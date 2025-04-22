# 🖥️ Uso de la Consola

La Consola es una herramienta integrada en las DevTools que permite interactuar con una página web mediante código JavaScript, mostrar mensajes de depuración, errores y realizar pruebas en tiempo real. Es esencial para depurar, explorar APIs y optimizar el comportamiento interactivo de un sitio.

---

## 1️⃣ Ejecutar JavaScript en tiempo real

🔹 **Descripción:**  
La Consola actúa como un entorno de ejecución de JavaScript donde puedes escribir y ejecutar código directamente en el contexto de la página actual.

🔸 **Características clave:**  

- ⚙️ **Interactuar con el DOM:**  
```javascript
document.querySelector('button').style.backgroundColor = 'red';
```

- 📜 **Llamar funciones definidas en la página:**  
```javascript
window.scrollTo(0, 500); // Desplaza la página 500px hacia abajo
```

- 🤖 **Autocompletado inteligente:**  
La Consola sugiere métodos, propiedades y variables disponibles. Usa `Tab` para completar.

- ↩️ **Expresiones multilínea:**  
Presiona `Shift + Enter` para saltar a una nueva línea sin ejecutar el código.

- 🧮 **Ejemplo: Calcular el ancho total de un elemento:**  
```javascript
const elemento = document.getElementById('header');
console.log(elemento.offsetWidth);
```

---

## 2️⃣ Ver errores y advertencias

🔹 **Descripción:**  
La Consola muestra mensajes generados por el navegador o el código de la página, como:

- ❌ **Errores:** Fallos críticos (ej: scripts no cargados, variables no definidas).
- ⚠️ **Advertencias:** Problemas no bloqueantes (ej: recursos obsoletos).
- ℹ️ **Información:** Logs generados con `console.log()`, `console.info()`, etc.

🔸 **Funcionalidades:**  

- 🧩 **Filtrado de mensajes:**  
Muestra solo errores, advertencias o logs usando los iconos de filtro.

- 🔍 **Seguimiento de errores:**  
Haz clic en el archivo y línea (ej: `script.js:25`) para abrir el código.

- 🧵 **Contexto:**  
Los errores incluyen un stack trace.

📌 **Ejemplo:**  
```
Error: Failed to fetch data from https://api.example.com (status 404).
```

---

## 3️⃣ Comandos comunes

🔹 **Descripción:**  
La Consola incluye comandos y atajos útiles para el desarrollo.

| Comando              | Función                                                        |
|----------------------|----------------------------------------------------------------|
| `$_`                 | Devuelve el resultado de la última operación.                 |
| `$0 - $4`            | Últimos elementos seleccionados en el panel de elementos.     |
| `copy()`             | Copia texto u objetos al portapapeles.                        |
| `clear()`            | Limpia el historial de la Consola.                            |
| `monitorEvents(el)`  | Monitorea eventos de un elemento.                             |
| `debug(función)`     | Pausa la ejecución cuando se llama a una función.            |

🧪 **Ejemplos:**  

- ✅ **Seleccionar elementos rápidamente:**  
```javascript
const botones = $$('button'); // querySelectorAll simplificado
```

- 🔧 **Aplicar estilo al último elemento inspeccionado:**  
```javascript
$0.classList.add('destacado');
```

---

## 4️⃣ Uso del objeto `console`

🔹 **Descripción:**  
El objeto `console` ofrece métodos para mostrar información estructurada y depurar.

🔸 **Métodos principales:**  

- 📄 `console.log()`:
```javascript
console.log('Usuario:', nombre, 'Edad:', edad);
```

- ⚠️ `console.warn()`:
```javascript
console.warn('Esta función está obsoleta.');
```

- ❌ `console.error()`:
```javascript
console.error('La conexión falló.');
```

- 📊 `console.table()`:
```javascript
const usuarios = [{id: 1, nombre: 'Ana'}, {id: 2, nombre: 'Luis'}];
console.table(usuarios);
```

- 📁 `console.group()` / `console.groupEnd()`:
```javascript
console.group('Detalles del usuario');
console.log('Nombre: Ana');
console.log('Rol: Admin');
console.groupEnd();
```

- ⏱️ `console.time()` / `console.timeEnd()`:
```javascript
console.time('Carga de datos');
// Código a medir...
console.timeEnd('Carga de datos');
```

- 🌲 `console.dir()`:
```javascript
console.dir(document.body);
```

- ✅ `console.assert()`:
```javascript
console.assert(numero > 0, 'El número debe ser positivo');
```

---

## 🧩 Ejemplo Integrado

📍 **Contexto:**  
Un desarrollador quiere depurar un formulario que no envía datos.

🧭 **Pasos:**

1. 🔎 **Ver errores:**  
```
TypeError: submitForm is not a function
```

2. 🧪 **Ejecutar código en tiempo real:**  
```javascript
typeof submitForm; // "undefined"
```

3. 📊 **Usar `console.table()` para datos del formulario:**  
```javascript
const formData = new FormData(document.querySelector('form'));
console.table([...formData.entries()]);
```

4. 🕵️‍♂️ **Monitorear eventos:**  
```javascript
monitorEvents(document.querySelector('form'), 'submit');
```

---

## 💡 Consejos y Trucos

- 🧼 `Ctrl + L` o `Cmd + K`: Limpiar la Consola.
- 🧭 `Ctrl + Shift + K` (Firefox) o `Ctrl + Shift + J` (Chrome): Abrir la Consola.
- 🔒 **Preservar logs:** Marca "Preserve log" para mantener mensajes tras recargar.
- 👁️ **Live Expressions:** Pincha el icono 👁️ para seguir valores en tiempo real.

---

## ✅ Conclusión

La Consola es una herramienta poderosa para:

- 🚀 **Depuración rápida:** Identificar errores y validar datos.
- 🧪 **Prototipado ágil:** Probar código sin modificar archivos fuente.
- ⚡ **Optimización:** Medir tiempos de ejecución y rendimiento.
