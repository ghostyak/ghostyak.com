---
title: "Optimización del rendimiento de Boxes: la v0.4.1 llegará pronto"
description: "Hemos optimizado el rendimiento de Boxes, centrándonos en la organización del escritorio, para que funcione más rápido y de forma más ligera. La v0.4.1 optimizada llegará pronto."
publishedAt: "2026-10-03"
translationKey: "boxes-performance-update"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Escritorio de Windows con cajas de aplicaciones, fotos, música y proyectos, una caja de Descargas en vista de lista y dos cajas contraídas"
---

**Boxes v0.4.1 llegará pronto.** Esta versión se centra en el rendimiento para que Boxes funcione más rápido y de forma más ligera.

## Por qué lo optimizamos

Un organizador de escritorio es el primer espacio de trabajo que ves cada vez que enciendes el PC. Las versiones anteriores dibujaban las cajas con una vista web (WebView2), lo que provocaba una y otra vez que las cajas aparecieran tarde justo después de iniciar sesión y que se mostraran mal en monitores con distinta escala.

## Qué cambia

- **Las cajas se dibujan directamente en el escritorio.** Hemos reconstruido Boxes para dibujar las cajas y los iconos con las funciones gráficas de Windows (DirectComposition y Direct2D) en lugar de una vista web.
- **Los menús y la configuración usan ahora la interfaz nativa de Windows.** Los menús de las cajas, la ventana de configuración y el menú de la bandeja se abren como menús y ventanas estándar de Windows, por lo que funcionan de forma más ligera.
- **Centrado en la organización del escritorio.** Por rendimiento, a partir de la v0.4 se han eliminado todas las funciones de widgets, como el visor de fotos y los relojes. Si usabas widgets, te agradecemos tu comprensión.

## Lanzamiento

La v0.4.1 estará disponible en GitHub Releases y en la página del producto Boxes en cuanto esté lista. Organizar archivos, carpetas y accesos directos a aplicaciones en cajas sigue siendo gratis para uso personal, en empresas y profesional.

Si encuentras un problema o ves algo que mejorar, indícanos tu versión de Windows y de Boxes y qué estaba pasando cuando ocurrió.

[Descubrir Boxes](/es/product/boxes)

[Ver la última versión](https://github.com/ghostyak/boxes/releases/latest)

[Informar de un problema o enviar comentarios](https://github.com/ghostyak/boxes/issues)
