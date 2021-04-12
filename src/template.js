import template from './menu-template.hbs'
import menu from './menu.json';

const menuTemp = template(menu);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', menuTemp);


