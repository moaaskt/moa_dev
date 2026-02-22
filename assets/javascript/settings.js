(function(){
  const panel   = document.getElementById('settings-panel');
  const openBtn = document.getElementById('settings-toggle');
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
  const docRoot = document.documentElement;
  const STORAGE_KEY = 'moa-settings';

  let settings = {};
  try{
    settings = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  }catch(e){
    settings = {};
  }

  function setVar(name, value){
    docRoot.style.setProperty(name, value);
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

  // --- pickers ---
  const accentPicker  = document.getElementById('accent-picker');
  const accent2Picker = document.getElementById('accent2-picker');
  const navbgPicker   = document.getElementById('navbg-picker');

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
      const alpha = settings.navBgAlpha ?? 0.8;
      const rgb   = hexToRgb(settings.navBgHex);
      if(rgb){
        setVar('--nav-bg', `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`);
        if(navbgPicker) navbgPicker.value = settings.navBgHex;
      }
    }
  }

  applySettings();

  // --- listeners ---
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

  if(navbgPicker){
    navbgPicker.addEventListener('input', ()=>{
      settings.navBgHex   = navbgPicker.value;
      settings.navBgAlpha = settings.navBgAlpha ?? 0.8;
      const rgb = hexToRgb(settings.navBgHex);
      if(rgb){
        setVar('--nav-bg', `rgba(${rgb.r},${rgb.g},${rgb.b},${settings.navBgAlpha})`);
      }
      save();
    });
  }

  // --- theme buttons (usa o mesmo contrato do theme-persistence.js) ---
  document.querySelectorAll('#settings-panel [data-theme]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const mode = btn.getAttribute('data-theme');
      try{
        localStorage.setItem('moa-theme', mode);
      }catch(e){}
      docRoot.classList.toggle('dark-mode', mode === 'dark');
      document.body.classList.toggle('dark-mode', mode === 'dark');
      const toggle = document.getElementById('dark-mode-toggle');
      if(toggle) toggle.checked = (mode === 'dark');
    });
  });

})();
