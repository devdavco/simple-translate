// Cargar configuración actual
chrome.storage.sync.get({
  sourceLang: 'en',
  targetLang: 'es',
  ttsLang: 'en-US'
}, (settings) => {
  document.getElementById('sourceLang').value = settings.sourceLang;
  document.getElementById('targetLang').value = settings.targetLang;
  document.getElementById('ttsLang').value = settings.ttsLang;
});

// Guardar configuración
document.getElementById('saveBtn').addEventListener('click', () => {
  const settings = {
    sourceLang: document.getElementById('sourceLang').value,
    targetLang: document.getElementById('targetLang').value,
    ttsLang: document.getElementById('ttsLang').value
  };
  
  chrome.storage.sync.set(settings, () => {
    const btn = document.getElementById('saveBtn');
    const originalText = btn.textContent;
    btn.textContent = '✓ Guardado';
    btn.style.background = '#34a853';
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '#4285f4';
    }, 1500);
  });
});