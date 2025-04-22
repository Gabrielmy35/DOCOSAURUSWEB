
# 🌐 Panel de Red (Network)

El **Panel de Red** es una herramienta esencial para analizar todas las solicitudes HTTP/HTTPS que realiza una página web al cargarse o interactuar con ella. Permite diagnosticar problemas de rendimiento, optimizar recursos y depurar comunicaciones con servidores.

## 1. 🔎 Ver Solicitudes HTTP

### 📄 Descripción:
Muestra una lista detallada de todas las solicitudes realizadas por la página, incluyendo archivos HTML, CSS, JavaScript, imágenes, llamadas a APIs (XHR/Fetch), y más.

### 🚪 Cómo acceder:
- Abre el Inspector de Elementos (`F12` o `Ctrl+Shift+I` / `Cmd+Opt+I`).
- Navega a la pestaña **Network**.
- Recarga la página (`Ctrl+R` / `Cmd+R`) para capturar las solicitudes.

### 📊 Columnas clave:
- **Name**: Nombre del recurso (ej: `styles.css`, `api/users`).
- **Status**: Código de estado HTTP (ej: `200 OK`, `404 Not Found`).
- **Type**: Tipo de recurso (ej: `XHR`, `Script`, `Stylesheet`).
- **Initiator**: Qué código o archivo inició la solicitud (ej: `app.js:25`).
- **Size**: Tamaño del recurso (transferido y descomprimido).
- **Time**: Tiempo total que tomó la solicitud.

### 🎯 Filtrado:
- Usa el menú desplegable para filtrar por tipo (ej: `JS`, `CSS`, `Img`).
- Escribe en la barra de búsqueda (`Ctrl+F` / `Cmd+F`) para encontrar recursos por nombre.

### 🧪 Ejemplo:
Identificar una imagen (`banner.jpg`) que devuelve un error `404`.

## 2. 📬 Inspeccionar Cabeceras y Respuestas

### 🔍 Descripción:
Analiza los encabezados (headers) de solicitud y respuesta, parámetros de consulta, y el cuerpo de la respuesta.

### 🔧 Pasos:
Haz clic en una solicitud para ver sus detalles. Navega por las pestañas **Headers**, **Preview**, **Response** o **Timing**.

#### ✉️ A. Headers:

- **Request Headers**:
  - `User-Agent`: Navegador y sistema operativo del usuario.
  - `Cookie`: Datos de sesión enviados al servidor.
  - `Content-Type`: Tipo de datos enviados (ej: `application/json`).

- **Response Headers**:
  - `Cache-Control`: Directivas de caché.
  - `Content-Encoding`: Método de compresión (ej: `gzip`).

#### 🖼️ B. Preview / Response:

- **Preview**: Muestra una vista previa de recursos como imágenes, JSON o HTML.
- **Response**: Muestra el cuerpo de la respuesta en formato crudo.

🧪 Ejemplo: Verificar si una API retorna `{ "status": "success" }` en su respuesta JSON.

## 3. ⏱️ Analizar Tiempos de Carga

### 📄 Descripción:
Examina cuánto tiempo toma cada fase de una solicitud (DNS, conexión, espera del servidor, etc.).

### 🧷 Fases de una solicitud:

- **Queueing**: Tiempo en cola.
- **DNS Lookup**: Resolución del dominio.
- **Initial Connection**: Establecimiento de conexión TCP/TLS.
- **SSL Handshake**: Negociación de cifrado (solo HTTPS).
- **TTFB**: Tiempo al primer byte de respuesta.
- **Content Download**: Tiempo de descarga del recurso.

### 🧭 Cómo visualizarlo:
- En la columna **Timing**, pasa el cursor sobre la barra para ver el desglose.
- Usa la vista **Waterfall** para comparar tiempos entre solicitudes.

🧪 Ejemplo: Diagnosticar un TTFB alto (`>500ms`) que indica lentitud en el servidor.

## 4. 💾 Descargar Recursos

### 🧰 Descripción:
Guarda recursos individuales (imágenes, JSON, CSS) o copia sus datos para pruebas.

### 🪜 Pasos:
Haz clic derecho en una solicitud. Selecciona:
- `Save As`: Descarga el recurso (ej: una imagen PNG).
- `Copy → Copy Response`: Copia el cuerpo de la respuesta.
- `Copy → Copy as cURL`: Genera un comando `cURL` para replicar la solicitud.

🧪 Ejemplo: Descargar un archivo CSV generado dinámicamente.

## 💡 Ejemplo Integrado

### 🎯 Contexto:
Un sitio web tarda demasiado en cargar. Usa el Panel de Red para optimizarlo.

### 🧾 Pasos:
- **Ver solicitudes**: Detecta `analytics.js` de 500KB bloqueando carga.
- **Analizar cabeceras**: Asegúrate que tengan `Cache-Control: max-age=3600`.
- **Optimizar tiempos**: Identifica imágenes sin comprimir (ej: `imagen.jpg` de 2MB).
- **Descargar recursos**: Copia cURL de una API y pruébala en Postman.

## 🎓 Consejos Profesionales

- ⚙️ **Simular condiciones lentas**: Usa `Throttling` para simular 3G.
- 🧪 **Grabar y comparar**: Usa el botón 🔴 para grabar sesiones.
- 🎯 **Priorizar recursos críticos**: Ordena por `Size` para encontrar los más pesados.

## ✅ Conclusión

El **Panel de Red** es crucial para:
- 🚀 Optimizar velocidad de carga.
- 🧩 Depurar APIs y flujos de datos.
- 🧹 Auditar recursos innecesarios.

¡Conviértete en un experto en rendimiento web dominando esta herramienta! 🚀📊
