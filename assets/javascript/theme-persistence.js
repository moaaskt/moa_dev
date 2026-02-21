const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;

const saved = localStorage.getItem('moa-theme');
if(saved === 'dark'){
  body.classList.add('dark-mode');
  if(toggle) toggle.checked = true;
}

if(toggle){
  toggle.addEventListener('change', ()=>{
    if(toggle.checked){
      body.classList.add('dark-mode');
      localStorage.setItem('moa-theme','dark');
    }else{
      body.classList.remove('dark-mode');
      localStorage.setItem('moa-theme','light');
    }
  });
}
