function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();

    let listService = event.currentTarget.nextElementSibling;
    let isVisible   = listService.classList.contains('show');

    document.querySelectorAll('.list-service').forEach(menu => {
        menu.classList.remove('show');
    });

    if (!isVisible) {
        listService.classList.add('show');
    }
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

let nextButton  = document.querySelector('.next');
let prevButton  = document.querySelector('.prev');
let carousel    = document.querySelector('.carousel');
let list        = document.querySelector('.list');
let runningTime = document.querySelector('.timeRunning');

const TIME_AUTO_NEXT = 7000;

let runTimeOut;
let autoNextTimeout;

nextButton.addEventListener('click', () => 
    showSlider('next')
);

prevButton.addEventListener('click', () => 
    showSlider('prev')
);

function resetAnimation() {
    runningTime.style.animation = 'none';
    runningTime.offsetHeight;
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}

function showSlider(direction) {
    const sliderItems = list.querySelectorAll('.item');

    if (direction === 'next') {
        list.appendChild(sliderItems[0]);
        carousel.classList.add('next');
        
    } else {
        list.prepend(sliderItems[sliderItems.length - 1]);
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, 500);

    clearTimeout(autoNextTimeout);

    autoNextTimeout = setTimeout( () => 
        nextButton.click(), TIME_AUTO_NEXT
    );

    resetAnimation();
}

autoNextTimeout = setTimeout( () => 
    nextButton.click(), TIME_AUTO_NEXT
);

resetAnimation();