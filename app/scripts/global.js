import './carousel.js';
import { showAndHideLoader } from './preloader.js';

function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();

    let listService = event.currentTarget.nextElementSibling;
    let isVisible   = listService.classList.contains('show');

    document.querySelectorAll('.list-service')
        .forEach(menu => {
            menu.classList.remove('show');
        }
    );

    if (!isVisible) {
        listService.classList.add('show');
    }
}

function toggleDropdownMobile(event) {
    
    event.preventDefault();
    event.stopPropagation();

    let listService       = event.currentTarget.nextElementSibling;
    let isDropdownVisible = listService.style.display === 'block';

    listService.style.display = isDropdownVisible ? 'none' : 'block';

    event.currentTarget.setAttribute('aria-expanded', !isDropdownVisible);
}

function toggleNavbar() {
    let navigationMenu = document.querySelector('.navigation-menu');
    let btnOpenMenu    = document.querySelector('.open-nav');
    let btnCloseMenu   = document.querySelector('.close-nav');

    let isMenuVisible  = getComputedStyle(navigationMenu).display === 'block';

    navigationMenu.style.display = isMenuVisible ? 'none'  : 'block';
    btnOpenMenu.style.display    = isMenuVisible ? 'block' : 'none';
    btnCloseMenu.style.display   = isMenuVisible ? 'none'  : 'block';
}

window.toggleDropdown = toggleDropdown;
window.toggleDropdownMobile = toggleDropdownMobile
window.toggleNavbar   = toggleNavbar;

document.addEventListener('DOMContentLoaded', () => {
    showAndHideLoader();
});