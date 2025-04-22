
# 🐞 Depuración (Debugging)

La depuración es un proceso esencial para identificar y corregir errores en JavaScript. El Inspector de Elementos ofrece herramientas avanzadas para pausar la ejecución de código, analizar variables y entender el flujo de tu programa.

---

## 1️⃣ Uso de Breakpoints

🔹 **¿Qué es un breakpoint?**  
Un punto de interrupción (breakpoint) pausa la ejecución del código en una línea específica, permitiendo inspeccionar el estado de variables, el contexto y el flujo del programa.

🔸 **Tipos de Breakpoints:**

- 📌 **Línea de código:**  
  - Cómo añadirlo: Haz clic en el número de línea en el panel **Sources**.  
  - Ejemplo: Pausar antes de que una función modifique un array.

- ⚙️ **Condicional:**  
  - Cómo añadirlo: Clic derecho sobre un breakpoint → Edit breakpoint → Define una condición (ej: `num === 5`).  
  - Ejemplo: Pausar solo cuando una variable `intentos` alcance 3.

- 🌳 **DOM:**  
  - Cómo añadirlo: En el panel **Elements**, clic derecho en un nodo → Break on → Subtree modifications / Attribute changes.  
  - Ejemplo: Detectar cuándo se añade un nuevo elemento a una lista.

- 🖱️ **Event Listeners:**  
  - Cómo añadirlo: En **Event Listener Breakpoints**, activa eventos como `click` o `submit`.  
  - Ejemplo: Pausar cuando un botón sea clickeado.

- 🌐 **XHR/Fetch:**  
  - Cómo añadirlo: En **XHR Breakpoints**, añade una URL parcial.  
  - Ejemplo: Detener la ejecución al llamar a una API (`/api/users`).

---

## 2️⃣ Depurar Funciones JavaScript

🔸 **Pasos para depurar una función:**

1. 🔍 Localiza la función en el panel **Sources**.
2. 📌 Añade un breakpoint en la línea deseada.
3. ▶️ Ejecuta el código (ej: haciendo clic en un botón).
4. 🔎 Analiza el contexto con el panel **Scope**.

📄 **Ejemplo:**  
```javascript
function calcularTotal(precios) {
  let total = 0; // Breakpoint aquí
  for (let precio of precios) {
    total += precio;
  }
  return total;
}
```

---

## 3️⃣ Ver el Flujo del Código Paso a Paso

🕹️ **Controles de ejecución:**

| Control     | Windows/Linux | macOS       | Descripción                                               |
|-------------|---------------|-------------|-----------------------------------------------------------|
| Resume      | F8            | F8          | Continúa hasta el próximo breakpoint                      |
| Step Over   | F10           | F10         | Ejecuta línea actual sin entrar a funciones               |
| Step Into   | F11           | F11         | Entra en la función para depurarla línea por línea        |
| Step Out    | Shift + F11   | Shift + F11 | Sale de la función actual                                 |

📄 **Ejemplo práctico:**  
Usa **Step Over** para iterar por un bucle sin entrar en funciones internas, o **Step Into** si deseas analizar una función llamada dentro.

---

## 4️⃣ Inspeccionar Variables y Contexto

🔧 **Herramientas clave:**

- 🧠 **Panel Scope:**  
  - Local: Variables en la función actual.  
  - Global: Variables globales como `window`.  
  - Closure: Variables externas capturadas.

- 🔍 **Watch Expressions:**  
  - Añade expresiones personalizadas.  
  - Ejemplo: `total * 1.16` para calcular total con IVA.

- 🧵 **Call Stack:**  
  - Muestra el orden de llamadas de funciones.  
  - Ejemplo:  
    ```
    funcionB  
    funcionA  
    (anonymous)  
    ```

- 💬 **Console en contexto:**  
  - Evalúa expresiones como `precios.length` durante una pausa.

---

## 🧩 Ejemplo Integrado

📌 **Contexto:** Un formulario no envía datos porque `validarFormulario()` retorna `false` incorrectamente.

🧭 **Pasos para depurar:**

1. 📌 Añadir un breakpoint en la llamada a `validarFormulario()`.
2. ▶️ Ejecutar el código (enviar formulario).
3. 🔍 **Step Into** con `F11` para entrar en `validarFormulario()`.
4. 🧠 Inspeccionar variables (`email`, `contraseña`) desde **Scope**.
5. ✏️ Modificar valores desde la consola:
```javascript
document.getElementById('email').value = 'test@example.com';
```
6. ▶️ Continuar ejecución con **Resume** (`F8`).

---

## 💡 Consejos Profesionales

- ⏯️ **Pause on exceptions:** Detiene la ejecución cuando ocurre un error.
- 📢 **Logpoints:** Click derecho → Add logpoint → Agrega logs sin editar código.
- 📱 **Depuración remota:** Conéctate a dispositivos móviles vía USB usando Chrome DevTools.

---

## ✅ Conclusión

Dominar la depuración con el Inspector de Elementos permite:

- 🕵️‍♂️ Identificar errores complejos en minutos.
- ⚙️ Optimizar funciones críticas.
- 📖 Aprender del código ajeno.

🎯 ¡Convierte la depuración en una superpotencia para tu desarrollo web! 🛠️🔍
