# Autoevaluación

## Comandos

Instalar dependencias:

```bash
npm install
```

Compilar:

```bash
npm run styles
```

## Estructura

El sitio cumple con la estructura solicitada para un CV en línea. Se utilizo etiquetas HTML semánticas, junto con sus secciones y cree la pagina específica para el formulario de contacto.

## Contenido

A lo que me concierne el contenido requerido está incluido y cumple con el objetivo del proyecto. Se utilizo la accion de formSubmit para el envio de correos.

## Accesibilidad y usabilidad

Utilice etiquetas, encabezados, atributos ARIA y una navegación lógica por medio de tabindex.

## Autoevaluación SCSS

**Parciales:** Implemente 6 parciales _variables,_mixins,_base,_layout, _components,_contact más los 2 archivos principales que los juntan.

**Variables:** Defini varias variables para colores, tipografía, espaciado, sombras y breakpoints, todas puestas en _variables.scss.

**Mixins:** Implemente 5 mixins reutilizables los cuales fueron respond-to, card, nav-link-hover, focus-ring y border-left-accent, estos los use en varios parciales.

**@extend con placeholders:** Use 4 placeholders que se extienden en distintos elementos.

**Loops:** Cree un @each para generar los estilos de trabajo/.educacion y los tipos de input del formulario, y @for para los ítems de la lista de proyectos.

**Breakpoints:** Por ultime implemente 2 breakpoints simples de 480px y 768px usados a través del mixin respond-to para ajustar el layout en pantallas pequeñas, por ejemplo uno lo use para que cambiara a un h1 mas pequeño en pantallas chicas.
