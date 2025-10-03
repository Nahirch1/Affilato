document.getElementById('y').textContent = new Date().getFullYear();
const ham = document.getElementById('hamburger');
const menu = document.getElementById('menu');
ham?.addEventListener('click', ()=>{
  if(menu.style.display==='block'){ menu.style.display='none'; }
  else { menu.style.display='block'; }
});