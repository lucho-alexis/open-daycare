# Kids Management Visual

**State:** Approved  
**Depends on:** SPEC 01  
**Date:** 2026-08-21  
**Objective:** Implementar las interfaces visuales de listado y perfil de niños en `/kids` y `/kids/[id]` con componentes reutilizables, datos mock estáticos y navegación mínima entre ambas vistas.

## Scope

### Included

- Implementar la pantalla de gestión de niños en `/kids` basada en `references/pantallas/ninos.dc.html`.
- Implementar la pantalla de perfil de niño en `/kids/[id]` basada en `references/pantallas/perfil-nino.dc.html`.
- Mantener los textos visibles de las referencias en español.
- Usar nombres de archivos, rutas, componentes, variables y tipos en inglés.
- Usar IDs numéricos del `1` al `7` para los siete niños mock del listado.
- Mostrar los siete registros visibles del listado y conservar literalmente el contador `8 niños` de la referencia.
- Hacer que cada tarjeta del listado navegue a su perfil correspondiente.
- Hacer que el enlace de retorno del perfil navegue a `/kids`.
- Mostrar un estado 404 de Next para IDs que no existan en el catálogo mock.
- Reproducir la composición visual de las referencias: sidebar, navegación activa, encabezados, buscador, grilla de tarjetas, avatar, badges, alertas, datos básicos y padres vinculados.
- Extraer el shell común de navegación a `components/layout/daycare-shell.tsx`.
- Reutilizar el shell común desde el feed existente y desde las dos rutas Kids sin cambiar visualmente `/`.
- Crear componentes reutilizables en `components/kids/`.
- Usar Tailwind CSS, los tokens visuales existentes y fuentes del sistema sin cargar fuentes remotas.
- Adaptar ambas vistas a móvil ocultando el sidebar, mostrando una barra superior y evitando overflow horizontal.
- Mantener como elementos visuales sin lógica real el buscador, agregar niño, editar, resumen del día, vincular padre, nueva publicación, avisos, mi cuenta y cierre de sesión.

### Not included

- Backend, API, base de datos, autenticación o control de permisos.
- Persistencia local o sincronización de datos.
- Filtrado funcional del buscador.
- Alta, edición o eliminación real de niños.
- Gestión real de alergias, notas, padres vinculados o invitaciones.
- Implementación de las rutas enlazadas `agregar-nino`, `resumen-dia`, `vincular-padre`, `avisos`, `mi-cuenta`, login o creación de publicaciones.
- Navegación funcional desde el shell hacia otras áreas, excepto la navegación entre `/kids` y `/kids/[id]`.
- Cambios de contenido o comportamiento funcional del feed en `/`.
- Carga de imágenes reales o integración con servicios externos.

## Data Model

No se introduce persistencia ni un modelo de datos compartido. La feature usará un catálogo mock local en `components/kids/kids-data.ts`.

Cada niño tendrá esta estructura:

```ts
type Kid = {
  id: number;
  name: string;
  initial: string;
  age: string;
  room: string;
  linkedParentsLabel: string;
  badge?: string;
  badgeTone?: "allergy" | "link";
  birthDate: string;
  enrollmentDate: string;
  notes: string;
  parents: Parent[];
};

type Parent = {
  name: string;
  relationship: string;
  status: "active" | "pending";
  initial: string;
};
```

El catálogo contendrá siete niños con IDs `1` a `7`, usando los nombres, edades, sala, etiquetas y colores de `ninos.dc.html`. El registro con ID `1` será Mateo Fernández y contendrá el detalle completo de `perfil-nino.dc.html`, incluida la alergia al maní, la nota del inhalador y los dos padres vinculados. Los demás registros conservarán la misma composición de perfil con datos mínimos mock derivados del listado.

## Implementation Plan

1. Crear `components/layout/daycare-shell.tsx` con el sidebar, la barra móvil, la identidad de sala y la navegación visual compartida, conservando los tokens y la apariencia actual del feed.
2. Actualizar `app/page.tsx` para consumir `DaycareShell` sin modificar el contenido ni el resultado visual de `/`.
3. Crear `components/kids/kids-data.ts` con los tipos `Kid` y `Parent` y el catálogo estático de siete niños.
4. Crear `components/kids/kid-card.tsx` con la tarjeta visual enlazada al perfil numérico del niño.
5. Crear `components/kids/kids-list.tsx` con el encabezado, botón visual, buscador decorativo, contador de sala y grilla responsive de tarjetas.
6. Crear `app/kids/page.tsx` para renderizar el listado dentro de `DaycareShell`, dejando `/kids` funcional con datos locales.
7. Crear `components/kids/kid-profile.tsx` con la cabecera del perfil, alerta, datos básicos, resumen del día visual y padres vinculados.
8. Crear `app/kids/[id]/page.tsx` para resolver el ID numérico desde el catálogo, renderizar `KidProfile` y responder con 404 cuando el ID no exista.
9. Ajustar los estilos Tailwind necesarios para la grilla, tarjetas, shell compartido y adaptación móvil sin introducir fuentes remotas ni modificar la composición del feed.
10. Ejecutar `npx tsc --noEmit` y `npm run build`.
11. Revisar visualmente `/kids` y `/kids/1` en viewports `1440x900` y `390x844`, comparando estructura, colores, espaciado, jerarquía, navegación lista-perfil-retorno y ausencia de overflow horizontal. Este será el último paso de verificación.

## Acceptance Criteria

- [x] `/kids` carga sin errores y muestra la pantalla de listado de niños.
- [x] `/kids/1` carga sin errores y muestra el perfil visual de Mateo Fernández.
- [x] Los IDs del `1` al `7` corresponden a los siete registros mock del listado.
- [x] Un ID numérico que no exista muestra un estado 404 de Next.
- [x] El listado muestra siete tarjetas y conserva el texto `8 niños` de la referencia.
- [x] Las tarjetas muestran los nombres, edades, sala, etiquetas y colores definidos en el mock.
- [x] Cada tarjeta navega a `/kids/[id]` usando el ID numérico correspondiente.
- [x] El enlace de retorno del perfil navega a `/kids`.
- [x] El perfil de Mateo muestra alerta de alergia, notas, datos básicos y padres vinculados como en la referencia.
- [x] Los perfiles restantes reutilizan la misma composición con datos mínimos mock.
- [x] El buscador, editar, agregar, resumen del día, vincular padre y demás acciones fuera del flujo entre listado y perfil no ejecutan lógica real.
- [x] El sidebar y la barra móvil se comparten mediante `DaycareShell`.
- [x] `/` conserva su contenido y apariencia visual después de extraer el shell común.
- [x] En desktop se visualiza el sidebar y la grilla de niños en dos columnas.
- [x] En móvil el sidebar queda oculto, aparece la barra superior y la grilla se adapta a una columna.
- [x] En `390x844` ninguna de las dos vistas produce overflow horizontal accidental.
- [x] La interfaz utiliza Tailwind y fuentes del sistema, sin cargar Fredoka, Nunito ni otras fuentes remotas.
- [x] `npx tsc --noEmit` finaliza correctamente.
- [x] `npm run build` finaliza correctamente.
- [x] La revisión visual en `1440x900` y `390x844` confirma la fidelidad estructural y cromática de ambas referencias.

## Decisions Taken And Discarded

- **Rutas en inglés:** se eligen `/kids` y `/kids/[id]` para cumplir la convención de código del proyecto, aunque el contenido visible permanece en español.
- **Dos rutas visuales:** se descarta reemplazar `/` porque el feed existente debe conservarse.
- **Datos mock locales:** se descartan API, base de datos y persistencia porque el alcance es exclusivamente visual.
- **IDs numéricos:** se descartan slugs y nombres cortos para mantener una ruta dinámica simple con IDs `1` a `7`.
- **Siete perfiles válidos:** se descarta limitar la navegación a Mateo para que todas las tarjetas del listado tengan un destino coherente.
- **404 para IDs inválidos:** se descarta mostrar Mateo por defecto o un perfil vacío porque ocultaría errores de catálogo.
- **Navegación mínima:** se conserva únicamente el flujo listado-perfil-retorno y se descartan las acciones de negocio.
- **Shell compartido:** se elige extraer `DaycareShell` para evitar duplicación, manteniendo `/` visualmente sin cambios.
- **Componentes por responsabilidad:** se eligen archivos separados para datos, shell, listado, tarjeta y perfil en lugar de concentrar toda la feature en una sola vista.
- **Referencia literal del contador:** se conserva `8 niños` aunque la pantalla muestre siete tarjetas para reproducir la referencia sin corregir su contenido mock.
- **Responsive dedicado:** se elige ocultar el sidebar y mostrar una barra superior en móvil, siguiendo el patrón establecido por SPEC 01.
- **Fuentes del sistema:** se descarta Google Fonts para mantener el criterio de SPEC 01 y evitar dependencias remotas.

## Identified Risks

- La extracción del shell puede introducir regresiones visuales en `/`; se mitigará comparando el feed antes y después y manteniendo sus clases y tokens actuales.
- La referencia de perfil solo contiene datos completos para Mateo; los demás perfiles requerirán datos mínimos mock para que las siete rutas sean válidas.
- La diferencia entre siete tarjetas y el contador `8 niños` puede parecer inconsistente, pero se conserva deliberadamente por fidelidad a la referencia.
- Las fuentes del sistema pueden producir diferencias tipográficas frente a las fuentes de las referencias.
- La adaptación móvil puede cambiar la densidad de la grilla respecto al diseño desktop; se validará en `390x844` y se evitará overflow horizontal.
