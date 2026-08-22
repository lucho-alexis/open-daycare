# Feed Home Visual

**State:** Verificado  
**Depends on:** None  
**Date:** 2026-08-19  
**Objective:** Reproducir en `/` el feed de `references/pantallas/feed.dc.html` usando Tailwind y datos mock estáticos, con adaptación responsive y sin autenticación, base de datos ni navegación funcional.

## Scope

### Included

- Implementar únicamente la vista `/`.
- Reproducir la composición visual del template: sidebar, encabezado, compositor de publicación y feed de publicaciones.
- Mantener tres publicaciones mock con la estructura del template:
  - logro;
  - actividad con espacio visual para foto;
  - anuncio general.
- Usar Tailwind CSS para layout, espaciado, colores, bordes, sombras, badges e iconos SVG.
- Usar fuentes disponibles en el sistema/Tailwind, sin cargar fuentes remotas.
- Adaptar la vista a móvil ocultando el sidebar y mostrando una barra superior con la marca y un botón de menú decorativo.
- Mantener los textos del template como contenido mock inicial.

### Not included

- Autenticación, cierre de sesión real o control de permisos.
- Base de datos, API, persistencia local o cualquier backend.
- Implementación de las pantallas enlazadas: Niños, Avisos, Mi cuenta, crear publicación, detalle de publicación y foto.
- Navegación entre rutas.
- Acciones funcionales de likes, comentarios, edición o creación de publicaciones.
- Subida o visualización real de imágenes.

## Data Model

No se introduce persistencia ni un modelo de datos compartido. La página tendrá un arreglo local `mockPosts` en `app/page.tsx`.

Cada elemento de `mockPosts` tendrá esta estructura:

```ts
type MockPost = {
  type: "achievement" | "activity" | "announcement";
  author: string;
  time: string;
  audience: string;
  body: string;
  reactions: number;
  comments: number;
  mediaLabel?: string;
};
```

Los valores deben representar las tres publicaciones visibles en `feed.dc.html`, incluyendo sus cantidades, etiquetas, colores y contenido mock.

## Implementation Plan

1. Actualizar `app/layout.tsx` para establecer el idioma español, conservar el layout raíz y evitar depender de fuentes remotas.
2. Actualizar `app/globals.css` con los tokens visuales y estilos base necesarios para aproximar el fondo, color de texto, scrollbar y tipografía del template usando Tailwind.
3. Reemplazar el contenido inicial de `app/page.tsx` por una vista estática del feed basada en `mockPosts`, dejando el sistema funcional en `/`.
4. Implementar la composición desktop con sidebar de navegación visual, identidad de sala, botón de nueva publicación, encabezado y tarjetas de publicaciones.
5. Implementar la adaptación móvil: ocultar el sidebar, mostrar barra superior decorativa y ajustar paddings, anchos y tarjetas para evitar overflow horizontal.
6. Convertir los elementos que parecen enlaces o acciones en controles visuales sin navegación ni handlers.
7. Ejecutar `npx tsc --noEmit` y `npm run build`.
8. Revisar visualmente `/` en un viewport desktop de `1440x900` y uno móvil de `390x844`, comparando estructura, colores, espaciado, jerarquía y ausencia de overflow horizontal con `references/pantallas/feed.dc.html`. Este será el último paso de verificación.

## Acceptance Criteria

- [x] `/` muestra el feed implementado y no muestra contenido del starter de Next.js.
- [x] En desktop se visualizan sidebar, encabezado, compositor y tres publicaciones.
- [x] Las publicaciones conservan los tipos logro, actividad con foto y anuncio general.
- [x] Los datos se cargan únicamente desde `mockPosts` y no requieren backend, autenticación ni base de datos.
- [x] Los controles visuales no navegan, no persisten datos y no modifican el estado.
- [x] No se implementan las rutas de las pantallas enlazadas.
- [x] En móvil el sidebar queda oculto y aparece una barra superior con marca y menú decorativo.
- [x] En móvil no existe desplazamiento horizontal accidental.
- [x] La interfaz utiliza Tailwind y fuentes del sistema, sin carga de Fredoka, Nunito ni otras fuentes remotas.
- [x] La composición mantiene los colores cálidos, tarjetas redondeadas, badges, sombras, iconos y jerarquía visual del template.
- [x] `npx tsc --noEmit` finaliza correctamente.
- [x] `npm run build` finaliza correctamente.
- [x] En `1440x900`, la revisión visual confirma sidebar, encabezado, compositor y tres tarjetas con la estructura, colores cálidos, bordes redondeados, badges, sombras e iconos de la referencia.
- [x] En `390x844`, el sidebar está oculto, la barra superior está visible y el feed no produce overflow horizontal.

## Decisions Taken And Discarded

- **Solo `/`:** se descartan las demás pantallas para mantener esta spec enfocada en el home.
- **Datos mock locales:** se descartan API, base de datos y persistencia porque todavía no existen autenticación ni backend.
- **Controles visuales:** se descartan likes, comentarios, edición y creación reales para evitar introducir lógica fuera del alcance.
- **Estructura de tres posts:** se conserva la estructura exacta del template para hacer verificable la fidelidad visual.
- **Fuentes del sistema/Tailwind:** se descarta Google Fonts por decisión de no usar fuentes remotas.
- **Responsive móvil:** se elige ocultar el sidebar y mostrar una barra superior decorativa en lugar de mantener una barra lateral fija o crear navegación funcional.

## Identified Risks

- Las fuentes del sistema pueden producir diferencias tipográficas frente a Fredoka y Nunito del template.
- La ausencia de imágenes reales limita la reproducción de contenido fotográfico a un placeholder visual.
- El botón de menú móvil será decorativo y no ofrecerá navegación hasta que exista una spec específica para navegación.
