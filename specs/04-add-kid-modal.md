# Add Kid Modal

**State:** Implemented  
**Depends on:** SPEC 02  
**Date:** 2026-08-22  
**Objective:** Implementar un modal para agregar niños desde `/kids`, con validación obligatoria de nombre completo, fecha de nacimiento y sala.

## Scope

### Included

- Abrir el modal al pulsar `Agregar niño` en `/kids`.
- Reproducir la composición visual de `references/pantallas/agregar-nino.dc.html`.
- Mostrar nombre completo como campo obligatorio.
- Mostrar fecha de nacimiento como campo obligatorio.
- Mostrar sala como campo obligatorio con la opción `Soles`.
- Mostrar alergias como campo opcional.
- Mostrar notas médicas como campo opcional.
- Validar que la fecha sea real y no futura.
- Mostrar errores inline en español.
- Cerrar mediante `Cancelar`, botón de cierre, `Escape` o clic en el backdrop.
- Agregar el niño al listado actual sin persistencia después de recargar.
- Mostrar una nueva tarjeta sin enlace a perfil.
- Actualizar dinámicamente el contador del listado.
- Generar el siguiente ID numérico disponible.
- Derivar inicial, edad, fecha de ingreso y estado sin padres vinculados.
- Adaptar el modal a desktop y móvil.
- Mantener nombres de archivos, rutas, componentes, variables y tipos en inglés.
- Usar Tailwind, los tokens visuales existentes y fuentes del sistema sin cargar fuentes remotas.

### Not included

- Ruta independiente `/agregar-nino`.
- Backend, API o base de datos.
- Persistencia en `localStorage`, `sessionStorage` o servidor.
- Edición o eliminación de niños.
- Creación de perfiles navegables para los nuevos registros.
- Vinculación de padres.
- Gestión funcional del buscador.

## Data Model

La feature no introduce persistencia. Reutilizará el tipo `Kid` de `components/kids/kids-data.ts` y agregará el tipo de entrada del formulario:

```ts
type AddKidFormData = {
  name: string;
  birthDate: string;
  room: string;
  allergies: string;
  medicalNotes: string;
};
```

El nuevo registro tendrá los siguientes valores derivados:

- `id`: máximo ID existente más uno.
- `initial`: primera letra del nombre.
- `age`: calculada desde `birthDate`.
- `room`: `Soles`.
- `enrollmentDate`: fecha actual.
- `parents`: arreglo vacío.
- `linkedParentsLabel`: `sin padres vinculados`.
- `allergies` y `medicalNotes`: valores opcionales del formulario.

## Implementation Plan

1. Convertir `components/kids/kids-list.tsx` en componente cliente y agregar estado local para el listado y la visibilidad del modal.
2. Crear `components/kids/add-kid-modal.tsx` con el formulario visual basado en `references/pantallas/agregar-nino.dc.html`.
3. Implementar validación inline para nombre, fecha, sala y fechas futuras.
4. Implementar cierre por Cancelar, botón de cierre, `Escape` y backdrop.
5. Crear el `Kid` derivado al guardar, agregarlo al listado y actualizar el contador.
6. Renderizar la nueva tarjeta sin navegación a perfil.
7. Ajustar responsive, accesibilidad, espaciado, colores, bordes, sombras e iconografía sin modificar visualmente las rutas existentes.
8. Ejecutar `npx tsc --noEmit` y `npm run build`.
9. Revisar `/kids` en `1440x900` y `390x844`, incluyendo apertura, validación, guardado y cierre del modal.

## Acceptance Criteria

- [x] Pulsar `Agregar niño` abre el modal.
- [x] El modal reproduce la estructura visual de la referencia.
- [x] Nombre completo, fecha de nacimiento y sala son obligatorios.
- [x] Sala muestra la opción `Soles`.
- [x] Una fecha futura impide guardar.
- [x] Los errores aparecen inline y en español.
- [x] El modal permanece abierto mientras existan errores.
- [x] Guardar con datos válidos agrega una tarjeta al listado.
- [x] La tarjeta nueva no navega a un perfil.
- [x] El contador refleja la cantidad actual de tarjetas.
- [x] El nuevo registro recibe el siguiente ID numérico.
- [x] Cancelar cierra el modal sin modificar el listado.
- [x] Escape cierra el modal.
- [x] Clic en el backdrop cierra el modal.
- [x] El botón de cierre cierra el modal.
- [x] Alergias y notas médicas son opcionales.
- [x] Los datos se pierden al recargar la página.
- [x] `/kids` no produce overflow horizontal en `390x844`.
- [x] `npx tsc --noEmit` finaliza correctamente.
- [x] `npm run build` finaliza correctamente.

## Decisions Taken And Discarded

- **Sí:** guardar en memoria React para mantener el alcance sin backend.
- **No:** usar persistencia local porque no fue solicitada.
- **Sí:** mostrar la nueva tarjeta inmediatamente.
- **No:** enlazarla a `/kids/[id]` porque el perfil no resolvería datos creados solo en memoria.
- **Sí:** usar `Soles` como única opción de sala.
- **Sí:** validar fechas reales no futuras.
- **Sí:** usar mensajes inline en español.
- **No:** crear una ruta separada para el formulario.
- **Sí:** generar IDs con el máximo existente más uno.

## Identified Risks

- El registro desaparece al recargar porque el alta se mantiene únicamente en memoria de la sesión.
- La tarjeta nueva no tiene perfil navegable porque el catálogo de perfiles sigue siendo estático.
- El cálculo de edad puede variar en los límites del día según la zona horaria del navegador.

## What is **not** in this spec

- Persistencia de niños.
- Backend o API.
- Ruta `/agregar-nino`.
- Edición o eliminación.
- Perfil navegable para niños agregados.
- Vinculación de padres.
- Buscador funcional.