// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introcuccion',
      items: [
        {
          type: 'doc',
          id: 'intro',
          label: 'Inicio en Elementos',
          className: 'Introduccion-Inicio-doc'
        }
      ],
      className: 'Introduccion-category',
    },
    {
      type: 'category',
      label: 'Conocimientos previos',
      className: 'Documentacion-category',
      items: [
        {
          type: 'doc',
          id: 'nueva-documentacion/Documentacion',
          label: 'Estructura',
          className: 'Usos-doc',
        },
        {
          type: 'doc',
          id: 'nueva-documentacion/uso-elementos',
          label: 'Usos de los elementos',
          className: 'Usos-doc',
        },
        {
          type: 'doc',
          id: 'nueva-documentacion/css-elementos',
          label: 'Esitlos de elementos',
          className: 'Usos-doc',
        }
      ],
    },
    {
      type: 'category',
      label: 'Consola',
      className: 'consola-category',
      items: [
        {
          type: 'doc',
          id: 'Consola/Uso-consola',
          label: 'Consola en Elementos',
          className: 'Usos-consola-doc',
        },
        {
          type: 'doc',
          id: 'Consola/depuracion_debugging',
          label: 'Depuracion y Debugging',
          className: 'Usos-consola-doc',
        },
        {
          type: 'doc',
          id: 'Consola/panel_red_network',
          label: 'Panel de red',
          className: 'Usos-consola-doc',
        },
      ],
    },
    // Documento suelto (sin categoría)
    {
      type: 'doc',
      id: 'Responsive', // Asegúrate que el ID coincida con tu archivo .md
      label: 'Modo Responsive para Dispositivos', // Mejorado el formato del título
      className: 'Responsive-doc',
    },
    {
      type: 'doc',
      id: 'Elementos', // Asegúrate que el ID coincida con tu archivo .md
      label: 'Aplicaciones Practicas', // Mejorado el formato del título
      className: 'Elementos-doc',
    },
    {
      type: 'doc',
      id: 'Avanzadas', // Asegúrate que el ID coincida con tu archivo .md
      label: 'Herramientas avanzadas', // Mejorado el formato del título
      className: 'Herramientas-doc', 
    }
  ],
};

export default sidebars;
