# 🧩 Estructura del Inspector de Elementos

El Inspector de Elementos está organizado en paneles o pestañas especializadas, cada una enfocada en un aspecto específico del desarrollo web. A continuación, se detalla cada uno de ellos:

---

## 🌐 Panel HTML (DOM)

**Descripción:**  
Muestra la estructura jerárquica del DOM (Document Object Model), es decir, los elementos HTML y su relación.

**Características clave:**

- 🔍 **Exploración interactiva:**  
  Expande o colapsa nodos con `▶`, `→` y `←`.  
  Busca elementos con `Ctrl + F` / `Cmd + F`.

- ✏️ **Edición en vivo:**  
  Modifica texto o atributos (`class`, `id`).  
  Elimina o arrastra elementos para reordenarlos.

- 🖱️ **Resaltado visual:**  
  Al pasar el cursor sobre un elemento, se resalta en la página.

**🧪 Ejemplo:**  
Editar un título directamente para ver cómo se vería con otra palabra.

---

## 2. 🎨 Panel CSS (Estilos)

**Descripción:**  
Permite ver y modificar los estilos aplicados a un elemento HTML.

**Características clave:**

- 🧬 **Jerarquía de estilos:**  
  Muestra reglas aplicadas, heredadas o sobrescritas.

- 🧪 **Edición en tiempo real:**  
  Cambia propiedades (ej. `margin: 10px;`) y activa/desactiva reglas con checkboxes.

- 🎯 **Herramientas integradas:**  
  Selector de colores, visualizador del modelo de caja (Box Model).

**🧪 Ejemplo:**  
Ajustar el `padding` de un botón y ver el resultado al instante.

---

## 3. 💻 Consola

**Descripción:**  
Ejecuta código JavaScript, muestra errores y logs de la página.

**Características clave:**

- 🐞 **Depuración:**  
  Muestra errores de sintaxis y `console.log()`.

- ⌨️ **Ejecución de comandos:**  
  Probar comandos como `document.querySelector('button').click()`.

- 🔁 **Autocompletado:**  
  Sugerencias automáticas al escribir código.

**🧪 Ejemplo:**  
Probar una función JS sin cambiar el archivo fuente.

---

## 4. 📡 Red (Network)

**Descripción:**  
Monitorea todas las solicitudes HTTP/HTTPS de la página.

**Características clave:**

- 📊 **Tabla de solicitudes:**  
  Incluye columnas: URL, método, estado, tipo, tamaño, tiempo.

- 🔍 **Filtrado:**  
  Filtra por tipo (`JS`, `Img`, `XHR`) o busca con `Ctrl + F`.

- 📦 **Detalles avanzados:**  
  Ver headers, tiempos de carga, previsualizar respuestas JSON o imágenes.

**🧪 Ejemplo:**  
Detectar una imagen muy pesada que ralentiza la carga.

---

## 5. 🗂️ Fuentes (Sources)

**Descripción:**  
Depura scripts JS y gestiona archivos estáticos (HTML, CSS, JS).

**Características clave:**

- ⏸️ **Depuración paso a paso:**  
  Usa breakpoints, `F10` (step over), `F11` (step into).

- 🧑‍💻 **Edición de código:**  
  Modifica y guarda archivos en tiempo real (limitado por navegador).

- 🔗 **Source Maps:**  
  Depura archivos minificados vinculados al original.

**🧪 Ejemplo:**  
Detener la ejecución de un script en una línea específica para investigar errores.

---

## 6. 📦 Aplicación (Application)

**Descripción:**  
Gestiona almacenamiento local, cookies, bases de datos y caché.

**Características clave:**

- 💾 **Almacenamiento local:**  
  Visualiza y edita `LocalStorage` y `SessionStorage`.

- 🍪 **Cookies:**  
  Muestra propiedades como nombre, valor, expiración, dominio.

- 🗃️ **Bases de datos:**  
  Soporta `IndexedDB` o `Web SQL`.

- 🧹 **Clear Storage:**  
  Limpia todos los datos almacenados del sitio.

**🧪 Ejemplo:**  
Verificar si se guarda una cookie al iniciar sesión.

---

## 7. ⚙️ Rendimiento (Performance)

**Descripción:**  
Analiza el rendimiento general de la página.

**Características clave:**

- 🎥 **Grabación de métricas:**  
  Inicia grabación con `Ctrl + E` / `Cmd + E` para capturar eventos.

- 🕰️ **Línea de tiempo:**  
  Visualiza gráficos de FPS, CPU, red y renderizado.

- 🔎 **Detalles de eventos:**  
  Examina el tiempo que toma cada función o renderizado.

**🧪 Ejemplo:**  
Detectar animaciones que bajan el rendimiento.

---

## 8. ♿ Accesibilidad

**Descripción:**  
Evalúa la experiencia para usuarios con discapacidades.

**Características clave:**

- 🌳 **Árbol de accesibilidad:**  
  Muestra cómo lo interpretan los lectores de pantalla.

- 🧪 **Verificación automática:**  
  Busca errores como falta de `aria-label`, texto alternativo o mal contraste.

- 🎨 **Contraste de color:**  
  Verifica si el texto es legible sobre el fondo.

**🧪 Ejemplo:**  
Corregir colores para cumplir las pautas WCAG 2.1.

---

## 9. 🔐 Seguridad

**Descripción:**  
Muestra información sobre la seguridad de la conexión.

**Características clave:**

- 📜 **Estado del certificado:**  
  Verifica si se usa SSL/TLS válido.

- 🔗 **Detalles de conexión:**  
  Protocolo usado (ej. TLS 1.3), emisor del certificado.

- ⚠️ **Problemas comunes:**  
  Detecta contenido mixto (HTTP dentro de HTTPS).

**🧪 Ejemplo:**  
Identificar por qué el navegador indica “Conexión no segura”.

---

## ✅ Conclusión

Cada panel del Inspector de Elementos cumple un rol esencial en el desarrollo web. Dominar su uso te permite:

- 🔧 Depurar código más eficientemente.
- 🚀 Optimizar el rendimiento de tu sitio.
- ♿ Mejorar la accesibilidad.
- 🔐 Fortalecer la seguridad de tus aplicaciones.
- 📡 Comprender mejor el flujo de datos entre el cliente y servidor.

> 💡 ¡Explora cada pestaña y conviértete en un experto en DevTools!
