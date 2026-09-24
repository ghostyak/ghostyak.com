---
title: "Ya está aquí Folder History: app gratuita de Windows para volver a abrir carpetas visitadas recientemente en el Explorador"
description: "¿No recuerdas en qué carpeta trabajabas hace unos días? Folder History registra automáticamente las carpetas que visitas en el Explorador de archivos de Windows para que las vuelvas a abrir desde la bandeja. Es gratis."
publishedAt: "2026-09-24"
translationKey: "folder-history-launch"
sourceRevision: 1
image: "/images/folder-history/folder-history-main.png"
imageAlt: "Lista de visitas recientes de Folder History con nombres de carpeta, rutas y la hora de la última visita, de la más reciente a la más antigua"
---

**Folder History ya está disponible.** Es una app gratuita de Windows que registra automáticamente las carpetas que visitas en el Explorador de archivos de Windows y te permite recuperarlas desde la bandeja del sistema, ordenadas por visita más reciente, para volver a abrirlas al instante.

![Lista de visitas recientes de Folder History](/images/folder-history/folder-history-main.png)

## ¿Dónde estaba la carpeta que acababa de abrir?

Cuando trabajas moviéndote entre subcarpetas de un proyecto, es fácil que unos días después no recuerdes exactamente dónde estabas. Acabas recorriendo de nuevo la ruta o intentando recordar el nombre de la carpeta.

Creamos Folder History para ese momento. Registra las carpetas que abres en el Explorador dentro de las carpetas que eliges, así que puedes encontrarlas y abrirlas desde tus visitas recientes sin depender de la memoria.

## Cómo volver a abrir las carpetas visitadas recientemente

1. **Añade una carpeta vigilada.** Elige la carpeta que quieres registrar, por ejemplo `D:\Work`. Esa carpeta y sus subcarpetas forman el ámbito de registro.
2. **Usa el Explorador como siempre.** Al abrir una carpeta en el Explorador de archivos de Windows, se registra automáticamente la hora de la última visita.
3. **Vuelve a abrirla desde la bandeja.** Haz doble clic en el icono de la bandeja y verás las carpetas visitadas recientemente, en orden. Haz doble clic en una carpeta de la lista o pulsa Enter para abrirla de nuevo en el Explorador.

La X de la ventana solo la oculta y el registro continúa. Para salir por completo, haz clic derecho en el icono de la bandeja y elige Salir.

## Funciones principales

- **Búsqueda y orden**: busca por nombre de carpeta o ruta (Ctrl+F) y ordena por carpeta, ruta o última visita.
- **Fijar arriba**: fija las carpetas que abres a menudo para mantenerlas al principio de la lista.
- **Reglas de exclusión**: escribe, una por línea, los nombres de carpetas que no quieres registrar, como `node_modules` o `.git`. Puedes usar `*` y `?`.
- **Papelera y restauración**: los registros eliminados se guardan en la papelera y puedes restaurarlos con su hora de visita original.
- **Conservación del historial**: conserva el historial sin límite o límpialo automáticamente después de 1, 3, 6 o 12 meses.
- **Copiar ruta**: copia la ruta completa de una carpeta con el botón de copiar de la fila o con Ctrl+C.
- **Tema e inicio automático**: elige el tema del sistema, claro u oscuro, y activa el inicio al iniciar sesión en Windows en los ajustes. El inicio automático está desactivado de forma predeterminada.

![Editor de reglas de exclusión de Folder History](/images/folder-history/folder-history-ignore-rule.png)

## ¿Dónde se guarda el historial de visitas?

El historial de visitas y los ajustes se guardan en los datos locales de la aplicación en tu PC. No necesitas servidor ni cuenta. Borrar registros no afecta a tus carpetas y archivos reales.

## ¿Qué visitas a carpetas se registran?

Se registra cuando abres una carpeta dentro de una carpeta vigilada con el Explorador de archivos de Windows, o cuando vuelves a esa carpeta desde otra ventana o pestaña. La navegación en otros gestores de archivos o en diálogos para abrir archivos, y los cambios en archivos, no se registran como visitas.

## Requisitos y descarga gratuita

Folder History es gratuito y funciona en Windows 11 x64. El instalador se instala en la cuenta del usuario actual, así que no necesita permisos de administrador, e instala WebView2 Runtime durante la instalación si falta.

En la página del producto puedes ver capturas reales y las preguntas frecuentes, y descargar el instalador.

[Explorar Folder History](/es/product/folder-history)

[Ver el repositorio de GitHub](https://github.com/ghostyak/folder-history)
