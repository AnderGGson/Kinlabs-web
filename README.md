SaaS Landing — Estructura del proyecto

index.html              Landing page principal
pages/
contact.html          Página de contacto / agendar demo
privacy.html          Política de privacidad
terms.html            Términos de uso

css/
root.css              Variables CSS (:root), reset, utilidades, botones, tipografía
nav.css               Navegación fija + menú hamburger responsive
hero.css              Sección Hero (fondo negro, grid, eyebrow, título, CTA)
sections.css          Problema, Impacto, Transición, Ecosistema
cta-footer.css        CTA final y Footer
contact.css           Página de contacto y formulario
legal.css             Páginas de privacidad y términos
animations.css        Clase .reveal para animaciones de scroll

js/
nav.js                Scroll shadow en nav + hamburger toggle
animations.js         IntersectionObserver para .reveal
contact.js            Submit del formulario con estado de éxito

img/
[placeholder]         Agregar aquí las imágenes del proyecto:
hero-bg.jpg           Fondo o visual del Hero (opcional)
problema-visual.png   Gráfico / mapa de la sección Problema
impacto-chart.png     Gráfico de datos en la sección Impacto
producto-demo.png     Screenshot o mockup del producto

Variables de color en css/root.css:
--primary             #0A0A0A  (negro)
--primary-hover       #2A2A2A
--secondary           #E8FF47  (amarillo lima)
--secondary-hover     #D4EB2A
--white / --black     Neutros puros

Placeholders a reemplazar (buscar con [):
[EXPLICAR EL PROBLEMA]
[EXPLICAR POR QUÉ ES IMPORTANTE]
[CÓMO LO SOLUCIONAMOS]
[EXPLICACIÓN DEL PRODUCTO]
[FOOTER CON NUESTRAS REDES]
[TELEFONO DE CONTACTO]
[EMAIL DE CONTACTO]
[CIUDAD, PAÍS]
[FECHA] — en páginas legales
SaaS·Name — reemplazar con el nombre real
