const toggle = document.getElementById('dark-mode-toggle');
const root = document.documentElement;
const body = document.body;

function apply(mode){
  const isDark = mode === 'dark';

  root.classList.toggle('dark-mode', isDark);
  body.classList.toggle('dark-mode', isDark);

  if (toggle) toggle.checked = isDark;

  try{
    localStorage.setItem('moa-theme', isDark ? 'dark' : 'light');
  }catch(e){}
}

let saved = null;
try{
  saved = localStorage.getItem('moa-theme');
}catch(e){}

apply(saved === 'dark' ? 'dark' : 'light');

if(toggle){
  toggle.addEventListener('change', ()=>{
    apply(toggle.checked ? 'dark' : 'light');
  });
}
