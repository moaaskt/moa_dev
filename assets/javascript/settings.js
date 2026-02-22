(function(){
  const panel    = document.getElementById('settings-panel');
  const openBtn  = document.getElementById('settings-toggle');
  const closeBtn = document.getElementById('settings-close');

  openBtn.addEventListener('click', ()=>{
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
  });

  closeBtn.addEventListener('click', ()=>{
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
  });

  // --- helpers ---
  const docRoot    = document.documentElement;
  const STORAGE_KEY = 'moa-settings';

  let settings = {};
  try{
    settings = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  }catch(e){
    settings = {};
  }

  function setVar(name, value){
    docRoot.style.setProperty(name, value);  // fix: era setProperty(name,value) sem receiver
  }

  function save(){
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    }catch(e){}
  }

  function hexToRgb(hex){
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m ? { r: parseInt(m[1],16), g: parseInt(m[2],16), b: parseInt(m[3],16) } : null;
  }

  // --- presets ---
  const PRESETS = {
    default: { accent: '#4c93fb', accent2: '#1f6fe5', navBgHex: '#ffffff', navBgAlpha: 0.75 },
    ocean:   { accent: '#0ea5e9', accent2: '#0369a1', navBgHex: '#ffffff', navBgAlpha: 0.75 },
    purple:  { accent: '#7c3aed', accent2: '#a78bfa', navBgHex: '#ffffff', navBgAlpha: 0.75 },
    matrix:  { accent: '#16a34a', accent2: '#4ade80', navBgHex: '#0b0f0c', navBgAlpha: 0.85 }
  };

  // --- elements ---
  const accentPicker  = document.getElementById('accent-picker');
  const accent2Picker = document.getElementById('accent2-picker');
  const navbgPicker   = document.getElementById('navbg-picker');
  const navAlphaRange = document.getElementById('navalpha-range');
  const navAlphaValue = document.getElementById('navalpha-value');
  const resetBtn      = document.getElementById('settings-reset');

  // --- nav-bg helper ---
  function applyNavBgFromSettings(){
    if(!settings.navBgHex) return;
    const rgb = hexToRgb(settings.navBgHex);
    if(!rgb) return;
    const alpha = typeof settings.navBgAlpha === 'number' ? settings.navBgAlpha : 0.8;
    setVar('--nav-bg', `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`);
  }

  // --- restore saved values ---
  function applySettings(){
    if(settings.accent){
      setVar('--accent', settings.accent);
      if(accentPicker) accentPicker.value = settings.accent;
    }
    if(settings.accent2){
      setVar('--accent-2', settings.accent2);
      if(accent2Picker) accent2Picker.value = settings.accent2;
    }
    if(settings.navBgHex){
      const alpha = typeof settings.navBgAlpha === 'number' ? settings.navBgAlpha : 0.8;
      applyNavBgFromSettings();
      if(navbgPicker)   navbgPicker.value  = settings.navBgHex;
      if(navAlphaRange) navAlphaRange.value = String(alpha);
      if(navAlphaValue) navAlphaValue.textContent = String(alpha);
    }
  }

  applySettings();

  // --- listeners: accent pickers ---
  if(accentPicker){
    accentPicker.addEventListener('input', ()=>{
      settings.accent = accentPicker.value;
      setVar('--accent', settings.accent);
      save();
    });
  }

  if(accent2Picker){
    accent2Picker.addEventListener('input', ()=>{
      settings.accent2 = accent2Picker.value;
      setVar('--accent-2', settings.accent2);
      save();
    });
  }

  // --- listener: nav color picker ---
  if(navbgPicker){
    navbgPicker.addEventListener('input', ()=>{
      settings.navBgHex   = navbgPicker.value;
      settings.navBgAlpha = typeof settings.navBgAlpha === 'number' ? settings.navBgAlpha : 0.8;
      applyNavBgFromSettings();
      save();
    });
  }

  // --- listener: nav alpha range ---
  if(navAlphaRange){
    navAlphaRange.addEventListener('input', ()=>{
      settings.navBgAlpha = parseFloat(navAlphaRange.value);
      if(navAlphaValue) navAlphaValue.textContent = String(settings.navBgAlpha);
      applyNavBgFromSettings();
      save();
    });
  }

  // --- listener: presets ---
  document.querySelectorAll('#settings-panel [data-preset]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const preset = PRESETS[btn.getAttribute('data-preset')];
      if(!preset) return;
      settings.accent     = preset.accent;
      settings.accent2    = preset.accent2;
      settings.navBgHex   = preset.navBgHex;
      settings.navBgAlpha = preset.navBgAlpha;
      save();
      applySettings();
    });
  });

  // --- listener: reset ---
  if(resetBtn){
    resetBtn.addEventListener('click', ()=>{
      settings = {};
      try{ localStorage.removeItem(STORAGE_KEY); }catch(e){}
      docRoot.style.removeProperty('--accent');
      docRoot.style.removeProperty('--accent-2');
      docRoot.style.removeProperty('--nav-bg');
      applySettings();
    });
  }

  // --- listener: theme buttons (contrato moa-theme / theme-persistence.js) ---
  document.querySelectorAll('#settings-panel [data-theme]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const mode = btn.getAttribute('data-theme');
      try{ localStorage.setItem('moa-theme', mode); }catch(e){}
      docRoot.classList.toggle('dark-mode', mode === 'dark');
      document.body.classList.toggle('dark-mode', mode === 'dark');
      const toggle = document.getElementById('dark-mode-toggle');
      if(toggle) toggle.checked = (mode === 'dark');
    });
  });

})();
