const panel = document.getElementById('settings-panel');
const openBtn = document.getElementById('settings-toggle');
const closeBtn = document.getElementById('settings-close');

openBtn.addEventListener('click', ()=>{
    panel.classList.add('open');
    panel.setAttribute('aria-hidden','false');
});

closeBtn.addEventListener('click', ()=>{
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden','true');
});

const STORAGE_KEY = "moa-settings";
let settings = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

function save(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}
