// Escuchar mensajes del background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getSelection') {
    const selection = window.getSelection().toString();
    sendResponse({ text: selection.trim() });
    return true;
  }
  
  // Manejar clic en el icono de la extensión
  if (request.action === 'translate-click') {
    const selection = window.getSelection().toString();
    if (!selection.trim()) {
      showNotification('❌ No hay texto seleccionado');
      return true;
    }
    
    chrome.storage.sync.get({
      sourceLang: 'en',
      targetLang: 'es'
    }, (settings) => {
      chrome.runtime.sendMessage({ 
        action: 'openTranslateUrl',
        text: selection,
        sourceLang: settings.sourceLang,
        targetLang: settings.targetLang
      });
    });
    
    showNotification('✅ Abriendo Google Translate...');
    return true;
  }
  
  if (request.action === 'translate') {
    const selection = window.getSelection().toString();
    if (!selection.trim()) {
      showNotification('❌ No hay texto seleccionado');
      return true;
    }
    
    chrome.storage.sync.get({
      sourceLang: 'en',
      targetLang: 'es'
    }, (settings) => {
      chrome.runtime.sendMessage({ 
        action: 'openTranslateUrl',
        text: selection,
        sourceLang: settings.sourceLang,
        targetLang: settings.targetLang
      });
    });
    
    showNotification('✅ Abriendo Google Translate...');
    return true;
  }
  
  if (request.action === 'speak') {
    const selection = window.getSelection().toString();
    if (!selection.trim()) {
      showNotification('❌ No hay texto seleccionado');
      return true;
    }
    
    chrome.storage.sync.get({
      ttsLang: 'en-US'
    }, (settings) => {
      chrome.runtime.sendMessage({ 
        action: 'playAudio',
        text: selection,
        ttsLang: settings.ttsLang
      });
    });
    
    showNotification('🔊 Reproduciendo audio...');
    return true;
  }
});

// Mostrar notificación
function showNotification(message) {
  const existing = document.getElementById('simple-notify');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.id = 'simple-notify';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #333;
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    z-index: 10000;
    font-family: sans-serif;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 2500);
}