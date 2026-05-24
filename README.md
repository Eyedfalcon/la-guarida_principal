# La Guarida Principal

Pagina independiente para elegir la sucursal de La Guarida.

## Sucursales

- La Guarida Barber Studio
- La Guarida Kids
- Nueva sucursal proximamente

## Editar enlaces

Los enlaces estan en `script.js`:

```js
const branchLinks = {
  principal: "https://la-guarida-frontend-y6zo.vercel.app/",
  kids: "https://la-guarida-kids.vercel.app/"
};
```

Cambia esas URLs por los dominios finales de cada sucursal cuando los tengas.

## Ver local

Abre `index.html` en el navegador. No requiere backend ni instalacion.

## Vercel

Importa este repositorio en Vercel. Como es una web estatica:

- Framework Preset: Other
- Build Command: vacio
- Output Directory: vacio

## GitHub

Este proyecto debe vivir en un repositorio separado de los proyectos de las sucursales.
