document.documentElement.classList.add('js-enabled');

const menus=document.querySelectorAll('.menu');
for(const menu of menus){
    menu.addEventListener('mouseover',montreSousMenu);
}
function montreSousMenu (event) {
event.currentTarget.querySelector('.submenu').style.display='block';
}

//boucle for of ou for