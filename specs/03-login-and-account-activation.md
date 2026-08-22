# Login And Account Activation

**State:** Implemented  
**Depends on:** None  
**Date:** 2026-08-22  
**Objective:** Implementar las pantallas `/login` y `/activate-account` basadas en sus referencias visuales, con navegación mock al feed y sin selector Personal/Familia en login.

## Scope

### Included

- Crear `/login` basada en `references/pantallas/login.dc.html`.
- Crear `/activate-account` basada en `references/pantallas/activar-cuenta.dc.html`.
- Eliminar completamente la opción de elegir entre Personal y Familia en login.
- Mantener los textos visibles en español.
- Usar Tailwind, tokens visuales existentes y fuentes del sistema.
- Mantener inputs editables.
- Mantener checkbox real de autorización en activación.
- Hacer que los botones principales naveguen a `/`.
- Hacer funcional la navegación secundaria entre ambas pantallas.
- Adaptar ambas pantallas a desktop y móvil.
- Usar iconos SVG inline y datos mock estáticos.

### Not included

- Autenticación real.
- Backend, API, base de datos o persistencia.
- Validación explícita de formularios.
- Diferenciación funcional entre perfiles de usuario.
- Recuperación de contraseña.
- Creación real de cuentas.
- Uso de `DaycareShell` en estas pantallas.

## Data Model

La feature no introduce nuevas estructuras de datos. Los campos utilizarán valores mock estáticos:

- Login: `caro@opendaycare.com`.
- Activación: código `7K4P9`.
- Activación: `lucia.fernandez@gmail.com`.
- Invitación: `Mateo · Sala Soles`.

## Implementation Plan

1. Crear `app/login/page.tsx` con la composición dividida de la referencia y sin selector de rol.
2. Agregar inputs editables para email y contraseña y navegación principal hacia `/`.
3. Agregar enlace secundario hacia `/activate-account`.
4. Crear `app/activate-account/page.tsx` con la composición centrada de la referencia.
5. Agregar inputs editables, checkbox real marcado inicialmente y navegación principal hacia `/`.
6. Agregar enlace secundario hacia `/login`.
7. Ajustar responsive, espaciado, colores, bordes, sombras e iconografía sin modificar visualmente las rutas existentes.
8. Ejecutar `npx tsc --noEmit` y `npm run build`.
9. Revisar `/login` y `/activate-account` en `1440x900` y `390x844`, verificando navegación y ausencia de overflow horizontal.

## Acceptance Criteria

- [x] `/login` carga sin errores.
- [x] `/activate-account` carga sin errores.
- [x] Login no muestra las opciones Personal ni Familia.
- [x] Login muestra email y contraseña como inputs editables.
- [x] Activación muestra código, email y contraseña como inputs editables.
- [x] Activación muestra un checkbox real de autorización marcado inicialmente.
- [x] El botón de login navega a `/`.
- [x] El botón de activación navega a `/`.
- [x] `Activá tu cuenta` navega de `/login` a `/activate-account`.
- [x] `Iniciar sesión` navega de `/activate-account` a `/login`.
- [x] No existe autenticación, persistencia ni validación explícita.
- [x] La composición visual coincide con las referencias en desktop.
- [x] En móvil las pantallas se adaptan sin overflow horizontal.
- [x] No se cargan fuentes remotas.
- [x] `npx tsc --noEmit` finaliza correctamente.
- [x] `npm run build` finaliza correctamente.

## Decisions Taken And Discarded

- **Sí:** usar `/login` y `/activate-account` para seguir la convención de rutas en inglés.
- **No:** conservar el selector Personal/Familia porque fue excluido explícitamente.
- **Sí:** navegar al feed existente `/` después de ambas acciones principales.
- **No:** implementar autenticación real porque no existe backend ni alcance funcional.
- **Sí:** mantener inputs y checkbox interactivos sin validación.
- **No:** reutilizar `DaycareShell` porque las referencias presentan una composición de acceso independiente.
- **Sí:** reutilizar tokens visuales globales y fuentes del sistema.
- **No:** cargar Fredoka y Nunito desde Google Fonts.

## Identified Risks

- La eliminación del selector de rol cambia la altura y densidad visual de la pantalla de login respecto a la referencia original.
- Las fuentes del sistema pueden diferir tipográficamente de la referencia.
- La navegación mock hacia `/` no representa una sesión autenticada real.

## What is **not** in this spec

- Autenticación real.
- Validación de credenciales.
- Recuperación de contraseña.
- Registro persistente de usuarios.
- Roles Personal/Familia.
- Backend o base de datos.
