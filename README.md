# Simple Translate

> Una extensión ligera para traducir texto seleccionado y escuchar pronunciación directamente en tu navegador.

## 📖 Descripción
<div align="center">
<img width="640" height="400" alt="Screenshot 2026-05-28 at 10 31 00" src="https://github.com/user-attachments/assets/2e4f3c85-752c-4a98-9534-38b97653548c" />
</div>
**Simple Translate** es una extensión de navegador diseñada para Vivaldi, Chrome, Edge y Opera. Permite traducir cualquier texto seleccionado con un atajo de teclado, abriendo automáticamente Google Translate en una nueva pestaña. También incluye una función para escuchar la pronunciación del texto seleccionado.

### ✨ Características

- **Traducción Instantánea:** Abre Google Translate con el texto seleccionado en una nueva pestaña.
- **Audio TTS:** Escucha la pronunciación del texto seleccionado.
- **Atajos de Teclado:** Configurables para un flujo de trabajo rápido.
- **Multi-idioma:** Soporte para múltiples idiomas de origen y destino.
- **Configuración Persistente:** Guarda tus preferencias de idioma automáticamente.
- **Privacidad:** No almacena datos locales; todo el procesamiento ocurre en los servidores de Google.

---

## 📋 Requisitos

- **Navegador:** Vivaldi, Chrome, Edge u Opera (basados en Chromium).
- **Soporte:** Manifest V3.
- **Internet:** Conexión activa requerida para acceder a Google Translate.

---

## 📥 Instalación

### 1. Descargar el Código

Clona este repositorio o descarga el archivo ZIP y extrae la carpeta.

```bash
git clone https://github.com/tu-usuario/simple-translate.git
cd simple-translate
```

### 2. Cargar en el Navegador

1. Abre tu navegador y navega a:
   - **Vivaldi:** `vivaldi://extensions`
   - **Chrome:** `chrome://extensions`
2. Activa el interruptor **"Modo desarrollador"** (Developer mode) en la esquina superior derecha.
3. Haz clic en el botón **"Cargar sin firmar"** (Load unpacked).
4. Selecciona la carpeta `simple-translate` que acabas de descargar.
5. ¡Listo! El icono de la extensión aparecerá en tu barra de herramientas.


## 🎮 Uso

### Atajos de Teclado (Por Defecto)

| Acción | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **Traducir Selección** | `Ctrl` + `Shift` + `1` | `Cmd` + `Shift` + `1` |
| **Escuchar Audio** | `Ctrl` + `Shift` + `2` | `Cmd` + `Shift` + `2` |

> **Nota:** Si los atajos no funcionan, ve a `vivaldi://extensions/shortcuts` (o la URL equivalente en tu navegador) y reasigna las combinaciones manualmente.

### Configurar Idiomas

1. Haz clic en el **icono de la extensión** en la barra de herramientas.
2. Selecciona tus idiomas preferidos en el menú desplegable:
   - **Origen:** Idioma del texto seleccionado.
   - **Destino:** Idioma al que quieres traducir.
   - **Audio:** Voz para la pronunciación.
3. Haz clic en **"Guardar Configuración"**.

## 📁 Estructura del Proyecto

```text
simple-translate/
├── manifest.json          # Configuración principal (Manifest V3)
├── background.js          # Service Worker (Lógica de atajos y mensajes)
├── content.js            # Script inyectado en las páginas web
├── popup.html            # Interfaz de configuración (Popup)
├── popup.js              # Lógica del popup
└── README.md             # Documentación 
```

## 🔧 Personalización

### Cambiar Atajos de Teclado

1. Navega a `vivaldi://extensions/shortcuts`.
2. Busca "Simple Translate".
3. Haz clic en el campo del atajo y presiona la nueva combinación deseada.

### Modificar Idiomas por Defecto

Edita el archivo `background.js` y modifica el objeto `defaultSettings`:

```javascript
const defaultSettings = {
  sourceLang: 'en',      // Idioma origen por defecto
  targetLang: 'es',      // Idioma destino por defecto
  ttsLang: 'en-US'       // Idioma de audio por defecto
};
```

### Agregar Más Idiomas

Abre `popup.html` y agrega nuevas opciones dentro de las etiquetas `<select>`:

```html
<option value="ja">Japonés</option>
<option value="ko">Coreano</option>
<!-- Agrega más idiomas según necesites -->
```

## 🐛 Solución de Problemas

| Problema | Solución Sugerida |
| :--- | :--- |
| **Los atajos no responden** | Verifica que estén configurados en `vivaldi://extensions/shortcuts`. |
| **Error de conexión** | Asegúrate de estar en una página web normal (`http://` o `https://`). No funciona en páginas internas del navegador. |
| **El audio no suena** | Verifica que el volumen del sistema no esté silenciado y que la pestaña de audio no haya sido bloqueada. |
| **La extensión no carga** | Ve a `vivaldi://extensions` y haz clic en el icono de recargar junto a la extensión. |
| **Error "Could not establish connection"** | Asegúrate de que `content_scripts` esté definido en `manifest.json` y que tengas permisos de host. |

### Depuración

Para ver errores en tiempo real:
1. Ve a `vivaldi://extensions`.
2. Haz clic en **"Inspect views"** (Inspeccionar vistas) bajo "Simple Translate".
3. Revisa la pestaña **Console** en la ventana que se abre.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Si deseas mejorar esta extensión:

1. Haz un **fork** del repositorio.
2. Crea una rama para tu característica: `git checkout -b feature/nueva-funcionalidad`.
3. Haz **commit** de tus cambios: `git commit -m 'Agrega nueva funcionalidad'`.
4. Haz **push** a la rama: `git push origin feature/nueva-funcionalidad`.
5. Abre un **Pull Request**.

## 🙏 Reconocimientos

- **Google Translate:** Por el servicio de traducción y síntesis de voz.
- **Web Speech API:** Por la capacidad de síntesis de voz nativa.
- **Equipo de Vivaldi/Chromium:** Por la plataforma del navegador.

## 📞 Contacto

- **Autor:** David Corrales
- **GitHub:** [Devdavco](https://github.com/devdavco)
- **Email:** [devdavco@pm.me](mailto:devdavco@pm.me)

---

<div align="center">

**Hecho con ❤️ para facilitar la traducción diaria**

⭐ ¡No olvides dejar una estrella si te resulta útil!

</div>
