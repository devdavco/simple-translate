// Configuración por defecto
const defaultSettings = {
  sourceLang: 'en',
  targetLang: 'es',
  ttsLang: 'en-US'
};

// Cargar configuración
chrome.storage.sync.get(defaultSettings, (settings) => {
  globalThis.savedSettings = settings;
});

// Escuchar cambios en configuración
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync') {
    globalThis.savedSettings = { ...globalThis.savedSettings, ...changes };
  }
});

// --- NUEVO: Escuchar clic en el icono de la extensión ---
chrome.action.onClicked.addListener((tab) => {
  // Enviar mensaje a la pestaña actual para que ejecute la traducción
  chrome.tabs.sendMessage(tab.id, { action: 'translate-click' }, (response) => {
    if (chrome.runtime.lastError) {
      // Si no hay content script, abrir la URL directamente (fallback)
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          // Intentamos obtener el texto seleccionado de forma limitada o abrimos translate vacío
          // Nota: Sin content script activo, no podemos obtener el texto fácilmente.
          // Pero si el content script está activo, este mensaje llegará.
        }
      });
    }
  });
});

// Escuchar comandos de teclado (si logramos configurarlos)
chrome.commands.onCommand.addListener((command) => {
  console.log('Comando recibido:', command);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.sendMessage(tabs[0].id, { 
        action: command === 'translate-selection' ? 'translate' : 'speak' 
      });
    }
  });
});

// Escuchar mensajes de content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openTranslateUrl') {
    const url = `https://translate.google.com/?sl=${request.sourceLang}&tl=${request.targetLang}&text=${encodeURIComponent(request.text)}&op=translate`;
    chrome.tabs.create({ url: url });
    sendResponse({ success: true });
    return true;
  }
  
    if (request.action === 'playAudio') {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&client=tw-ob&tl=${request.ttsLang}&q=${encodeURIComponent(request.text)}&textlen=${request.text.length}`;
    
    // CAMBIO: Abrir en pestaña activa (active: true) y NO cerrar automáticamente
    chrome.tabs.create({ url: url, active: true }, (tab) => {
      // Ya no hay setTimeout para cerrar la pestaña
      console.log('Audio playing in new tab:', tab.id);
    });
    
    sendResponse({ success: true });
    return true;
  }
});