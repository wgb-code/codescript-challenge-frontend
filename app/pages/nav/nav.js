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