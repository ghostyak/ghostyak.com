---
title: "Ya está disponible Boxes v0.4.1"
description: "Más rápido y ligero, ya está disponible Boxes v0.4.1. Se instala sin WebView2 ni permisos de administrador e incorpora cajas en vivo que muestran una carpeta tal cual y una vista propia para cada caja."
publishedAt: "2026-10-04"
translationKey: "boxes-041-release"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Escritorio de Windows con cajas de aplicaciones, fotos, música y proyectos, una caja de Descargas en vista de lista y dos cajas contraídas"
---

**Ya está disponible Boxes v0.4.1.** Es la versión con optimización del rendimiento que anunciamos en [nuestra publicación anterior](/es/blog/boxes-performance-update). Puedes descargarla desde la página del producto Boxes y desde GitHub Releases.

## Una instalación más ligera

- **No necesita WebView2.** Hemos rehecho las cajas, los menús, la ventana de configuración y la bandeja con funciones nativas de Windows.
- **No necesita permisos de administrador.** De forma predeterminada, Boxes se instala solo para el usuario actual.
- El instalador es para Windows 10/11 de 64 bits (x64).

## Novedades

### Cajas en vivo

Una caja en vivo muestra el contenido de una carpeta tal cual. Haz clic con el botón derecho en una carpeta dentro de una caja o en el Explorador de archivos de Windows y elige **Abrir esta carpeta como caja en vivo**. En el Explorador de archivos de Windows 11, la opción está en **Mostrar más opciones**.

Cuando se añaden o eliminan archivos en la carpeta, la caja se actualiza al instante. Las cajas en vivo son solo de visualización, así que Boxes nunca mueve ni elimina los archivos de la carpeta.

### Una vista para cada caja

Con los botones de la barra de estado, en la parte inferior de la caja, puedes elegir la vista **Detalles, Iconos o Iconos grandes** para cada caja. La vista Detalles muestra la fecha de modificación, el tipo y el tamaño, y puedes ordenar haciendo clic en el encabezado de una columna. A la izquierda de la barra de estado se muestra el número de elementos.

### Avisos de actualización

Cuando sale una nueva versión, Boxes te avisa con una notificación de Windows y en el menú de la bandeja. No descarga ni instala actualizaciones automáticamente.

## Antes de instalar

- El instalador todavía no tiene firma de código, así que la primera vez que lo ejecutes puede aparecer el aviso **Windows protegió su PC**. Haz clic en **Más información** y después en **Ejecutar de todas formas**.
- Las cajas que creaste en la versión anterior se importan automáticamente la primera vez que abres la aplicación.
- Las funciones de widgets, como el visor de fotos y el reloj, se eliminaron a partir de la v0.4.

Organizar accesos directos de archivos, carpetas y aplicaciones en cajas sigue siendo gratis para uso personal, empresarial y profesional. Si tienes algún problema, indícanos tu versión de Windows y de Boxes y qué ocurrió.

[Descargar Boxes](/es/product/boxes#download)

[Ver la versión v0.4.1](https://github.com/ghostyak/boxes/releases/tag/v0.4.1)

[Informar de un problema o enviar comentarios](https://github.com/ghostyak/boxes/issues)
