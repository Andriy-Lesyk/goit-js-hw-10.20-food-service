import menus from './menu.json';
import dishName from './dish.hbs';
console.log(menus)


const menuList = document.querySelector('.js-menu')
console.log(menuList)

const markup =menus.map(dishName).join('')
console.log(markup)
menuList.insertAdjacentHTML('beforeend', markup)

const changeTheme = document.querySelector('.theme-switch__toggle')
const bodyPr = document.querySelector('body')

changeTheme.addEventListener('change', onDarkTheme)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
function onDarkTheme (){
    bodyPr.classList.toggle(Theme.DARK)
    if (changeTheme.checked===true){
        localStorage.setItem('theme', Theme.DARK)
        
    }else{
        localStorage.removeItem('theme');
    }
}

if(localStorage.theme==='dark-theme' ){
bodyPr.classList.add(localStorage.getItem('theme'));
changeTheme.checked=true
}else{
    changeTheme.checked=false
}