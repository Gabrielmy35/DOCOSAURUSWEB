# 📂 Uso del Panel de Elementos (HTML)

##  Uso del Panel de Elementos (HTML)
El **Panel de Elementos** (o *Elements Panel*) es la sección principal del Inspector de Elementos donde se interactúa directamente con el DOM (*Document Object Model*) de la página. Permite explorar, modificar y depurar la estructura HTML en tiempo real. A continuación, se detallan sus funcionalidades clave:

---

## 🔍 1. Explorar el DOM

**Descripción:**  
Visualiza la estructura jerárquica de los elementos HTML de la página, mostrando relaciones padre-hijo-hermano entre nodos.

### Pasos y características:

- **Navegación básica:**  
  - Expandir/colapsar nodos: Haz clic en el icono ▶ o usa las teclas → (expandir) y ← (colapsar).  
  - Resaltado visual: Al pasar el cursor sobre un elemento, se resalta en la página.

- **Jerarquía del DOM:**  
  - **Padres e hijos:** Identifica contenedores (ej: `<div>`) y sus elementos internos (ej: `<p>`, `<img>`).  
  - **Atributos:** Inspecciona atributos como `id`, `class`, `src`, `href`, etc.

📌 *Ejemplo:*  
Al inspeccionar un menú de navegación (`<nav>`), se expanden sus nodos para ver los enlaces (`<a>`) y sus clases.

---

## ✏️ 2. Editar HTML en vivo

**Descripción:**  
Modifica el contenido o atributos de los elementos HTML directamente en el panel, con cambios reflejados al instante.

### Funcionalidades:

- **Editar texto:**  
  Doble clic en el texto de un nodo para editar.  
  📌 *Ejemplo:* Cambiar "Haz clic aquí" por "Ver más detalles".

- **Modificar atributos:**  
  Doble clic sobre un atributo para editarlo.  
  📌 *Ejemplo:* Cambiar `class="boton"` a `class="boton-activo"`.

- **Añadir nuevos atributos:**  
  Clic derecho en el elemento → "Añadir atributo".  
  📌 *Ejemplo:* `data-id="123"`.

⚠️ *Nota:* Los cambios son temporales y se pierden al recargar la página.

---

## ➕ 3. Añadir, eliminar o mover nodos

**Descripción:**  
Manipula la estructura del DOM: añade nuevos elementos, elimina existentes o reorganiza su posición.

### A. Añadir nodos:
1. Clic derecho en el elemento padre.
2. Selecciona "Añadir elemento".
3. Escribe el HTML (ej: `<li>Nuevo ítem</li>`).

### B. Eliminar nodos:
- Método 1: Seleccionar el elemento y presionar `Supr` (Delete).
- Método 2: Clic derecho → "Eliminar elemento".

### C. Mover nodos:
- Arrastra y suelta a una nueva posición.

📌 *Ejemplo práctico:*  
Eliminar un banner no deseado y añadir un nuevo botón en un formulario.

---

## 🔎 4. Buscar elementos

**Descripción:**  
Localiza elementos específicos en el DOM mediante búsqueda textual, selectores CSS o XPath.

### Métodos de búsqueda:

- **Búsqueda textual:**  
  - `Ctrl + F` / `Cmd + F`.
  - Escribe texto o parte de un atributo.

- **Selector CSS:**  
  - Ejemplo: `input[type="email"]`.

- **Jerarquía con CSS:**  
  - Ejemplo: `div > p` (para hijos directos).

📌 *Ejemplo:*  
Buscar todos los elementos con clase `error` para revisar validaciones.

---

## 🧪 Ejemplo Integrado

**Contexto:**  
Un usuario quiere modificar el encabezado de su sitio web.

### Pasos:

1. **Explorar el DOM:**  
   Localiza `<header>` y expande nodos.
2. **Editar HTML:**  
   Cambia `<h1>` de "Bienvenido" a "Explora nuestro contenido".  
   Cambia clase de `<nav>` a `nav-principal-dark`.
3. **Añadir nodo:**  
   Agrega `<button class="cta">Suscríbete</button>` dentro de `<header>`.
4. **Buscar:**  
   Usa `Ctrl + F` para verificar el botón.

---

## 💡 Consejos y Trucos

- 🔄 **Deshacer cambios:** `Ctrl + Z` / `Cmd + Z`.
- 📋 **Copiar elementos:** Clic derecho → "Copy" → "Copy element".
- 💾 **Guardar cambios:** Copia el HTML editado y pégalo en tu editor de código.

---

## ✅ Conclusión

El Panel de Elementos es una herramienta indispensable para:

- ⚡ Prototipado rápido: prueba cambios sin tocar el código fuente.
- 🛠️ Depuración eficiente: corrige errores HTML rápidamente.
- 📘 Aprendizaje interactivo: explora cómo están construidos los sitios web modernos.
