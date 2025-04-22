# 🎨 Uso del Panel de Estilos (CSS)

El Panel de Estilos es la sección del Inspector de Elementos donde se analizan, editan y depuran las reglas CSS aplicadas a un elemento HTML seleccionado. Es fundamental para ajustar diseños, resolver conflictos de estilos y optimizar la presentación visual de una página.

---

## 1. 🔍 Ver estilos aplicados

**Descripción:**  
Muestra todas las reglas CSS que afectan al elemento seleccionado, incluyendo estilos en línea, hojas de estilo externas, reglas heredadas y estilos predeterminados del navegador.

### Características clave:

- **📐 Jerarquía visual:**
  - Las reglas se ordenan por especificidad.
  - Estilos sobrescritos aparecen tachados.

- **🗂 Origen de los estilos:**
  - Indica si proviene de archivo `.css`, etiqueta `<style>`, o frameworks.
  - Enlace directo al archivo fuente.

- **👨‍👩‍👧‍👦 Estilos heredados:**  
  - Propiedades como `color` o `font-family` heredadas de elementos padres.

📌 **Ejemplo:** Al seleccionar un `<button>`, se ve que su `background-color` proviene de Bootstrap y `font-size` es heredado.

---

## 2. 🛠️ Editar propiedades CSS

**Descripción:**  
Permite modificar valores CSS, activar/desactivar reglas y añadir nuevas propiedades en tiempo real.

### Pasos y funcionalidades:

- **✏️ Editar valores existentes:**  
  - Doble clic en valores y escribir nuevos.
  - Usa ↑ y ↓ para ajustar números.

- **✅ Activar/desactivar reglas:**  
  - Marca o desmarca propiedades para ver el efecto.

- **🎨 Herramientas integradas:**
  - Selector de color.
  - Editor de sombras.
  - Previsualización de fuentes.

📌 **Ejemplo:** Desactivar `display: flex` para probar diseño en bloque.

---

## 3. ➕ Añadir reglas personalizadas

**Descripción:**  
Crea nuevas reglas CSS o añade propiedades a reglas existentes.

### Pasos:

- **📏 Nueva regla:**  
  - Clic en el icono + y escribe selector y propiedades.

- **➕ Añadir propiedades existentes:**  
  - Escribe propiedad directamente en la regla.

- **🎯 Estilos en línea:**  
  - Modifica el atributo `style` del elemento.

📌 **Ejemplo:** Crear `.destacado { border: 2px solid #ff0000; }` para pruebas.

---

## 4. ⚖️ Prioridad y herencia de estilos

**Descripción:**  
Analiza cómo interactúan las reglas CSS.

### Conceptos clave:

- **🎯 Especificidad:**  
  - Selectores más específicos tienen más peso.

- **📊 Cascada:**  
  - Reglas más recientes prevalecen a igualdad de especificidad.

- **🚨 !important:**  
  - Sobrescribe cualquier otra regla.

- **🔁 Herencia forzada:**  
  - Usar `inherit` para heredar de padre.

📌 **Ejemplo:** Diagnosticar por qué `color: blue` no aplica debido a `!important`.

---

## 5. 📋 Ver estilos computados

**Descripción:**  
Muestra los estilos finales aplicados al elemento.

### Acceso:  
En la pestaña **Computed** del panel.

### Características clave:

- **🔎 Filtrado:**  
  - Buscar propiedades específicas.

- **🧮 Desglose de valores:**  
  - Ej: `1rem` convertido a `16px`.

- **📦 Modelo de caja:**  
  - Vista gráfica del modelo de caja.

📌 **Ejemplo:** Confirmar que el `width` no supera el 100% por `padding` oculto.

---

## 🧪 Ejemplo Integrado

**Contexto:** Corregir un botón que no se centra en móviles.

### Pasos:

1. Ver estilos aplicados.
2. Cambiar `margin: auto` por `margin: 0 auto`, `display: block`.
3. Detectar `display: flex` en media query.
4. Confirmar con pestaña **Computed**.

---

## 💡 Consejos y Trucos

- ⌨️ Atajos: `Tab` y `Shift + Tab` para navegar. `Esc` para abrir editor.
- 📋 Copiar: Clic derecho → `Copy declaration`.
- 📱 Responsividad: Usar junto con **Device Mode**.

---

## ✅ Conclusión

El Panel de Estilos es esencial para:

- 🎯 **Ajustes visuales precisos**
- 🧹 **Resolver conflictos de estilos**
- 🧠 **Optimizar y limpiar código CSS**
