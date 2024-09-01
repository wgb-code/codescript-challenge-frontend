export async function navTemplate() {

    try {
        let response = await fetch('/app/pages/nav/nav.html');

        if (!response.ok) {
            throw new Error(
                `Erro ao carregar navbar: ${response.statusText}`
            );
        }

        let data = await response.text();

        document.getElementById('navbar-container').innerHTML = data;

    } catch (error) {
        console.error('Erro ao carregar navbar:', error);
    }
}

export function openServiceList() {
    let listService = document.getElementById('listService');
    let arrowIcon = document.getElementById('arrowIcon');

    if (!listService.classList.contains('active')) {
        listService.classList.add('active');
        arrowIcon.src = '/app/assets/svgs/icons/arrow-up.svg';
    } else {
        listService.classList.remove('active');
        arrowIcon.src = '/app/assets/svgs/icons/arrow.svg';
    }
}

export function openMenuMobile() {
    let mobileMenu = document.getElementById('nav-links');
    let menuIcon = document.getElementById('btnShowMenu').querySelector('img');

    if (!mobileMenu.classList.contains('active')) {
        mobileMenu.classList.add('active');
        menuIcon.src = '/app/assets/svgs/icons/close.svg';
    } else {
        mobileMenu.classList.remove('active');
        menuIcon.src = '/app/assets/svgs/icons/menu.svg';
    }
}

export function detectedThemeColor() {
    let getThemeUser = window.matchMedia('(prefers-color-scheme: light)');
    let getRoot = document.documentElement;
    let btnTheme = document.getElementById('themeSwitch');
    let iconTheme = document.getElementById('iconThemeColor');

    if (!getThemeUser.matches) {
        getRoot.style.setProperty('color-scheme', 'dark');
        iconTheme.src = '/app/assets/svgs/icons/sun.svg';
        btnTheme.title = 'Clique para mudar o tema do site para Claro'
    } else {
        getRoot.style.setProperty('color-scheme', 'light');
        iconTheme.src = '/app/assets/svgs/icons/moon.svg';
        btnTheme.title = 'Clique para mudar o tema do site para Escuro'
    }
}

export function themeColor() {
    let currentScheme = document.documentElement.style.getPropertyValue('color-scheme');
    let btnTheme = document.getElementById('themeSwitch');
    let iconTheme = document.getElementById('iconThemeColor');

    if (currentScheme === 'light') {
        document.documentElement.style.setProperty('color-scheme', 'dark');
        iconTheme.src = '/app/assets/svgs/icons/sun.svg';
        btnTheme.title = 'Clique para mudar o tema do site para Claro'
    } else {
        document.documentElement.style.setProperty('color-scheme', 'light');
        iconTheme.src = '/app/assets/svgs/icons/moon.svg';
        btnTheme.title = 'Clique para mudar o tema do site para Escuro'
    }
}
