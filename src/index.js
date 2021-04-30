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

if(localStorage.length===0){
localStorage.setItem('themelight', Theme.LIGHT)
}

function onDarkTheme (){
    bodyPr.classList.toggle(Theme.DARK)
    if (changeTheme.checked===true){
        localStorage.removeItem('themelight')
        localStorage.setItem('themedark', Theme.DARK)    
    }else{
        localStorage.removeItem('themedark')
        localStorage.setItem('themelight', Theme.LIGHT)
    }
}
console.log(localStorage)
if(localStorage.themedark ){
bodyPr.classList.add(localStorage.getItem('themedark'));
changeTheme.checked=true
}else{
    bodyPr.classList.add(localStorage.getItem('themelight'));
    changeTheme.checked=false
}