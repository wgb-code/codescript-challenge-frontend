import { navTemplate, openServiceList, openMenuMobile, detectedThemeColor, themeColor } from '../pages/nav/nav.js';
import { partnersTemplate, initializeScrollers } from '../pages/partners/partners.js';
import { cookies, readCookies, getCookies } from '../pages/cookies/cookies.js';
import { footerTemplate } from '../pages/footer/footer.js';

document.addEventListener('DOMContentLoaded', async function () {
    let metricsContent = document.querySelector('.metricsContent');
    let counters = document.querySelectorAll('.card .counter');

    const CounterObserver = new IntersectionObserver(
        (entries, observer) => {
            let [entry] = entries;

            if (!entry.isIntersecting) return;

            let speed = 200;

            counters.forEach((counter, index) => {
                function updateCounter() {
                    const targetNumber = +counter.dataset.target;
                    const initialNumber = +counter.innerText;
                    const incPerCount = targetNumber / speed;

                    if (initialNumber < targetNumber) {
                        counter.innerText = Math.ceil(initialNumber + incPerCount);
                        setTimeout(updateCounter, 35);
                    } else {
                        counter.innerText = targetNumber;
                    }
                }

                updateCounter();

                if (counter.parentElement.style.animation) {
                    counter.parentElement.style.animation = '';
                } else {
                    counter.parentElement.style.animation =
                    `slide-up 0.3s ease forwards ${index / counters.length + 0.5}s`;
                }
            });
            observer.unobserve(metricsContent);
        },
        {
            root: null,
            threshold: window.innerWidth > 768 ? 0.4 : 0.3
        }
    );

    CounterObserver.observe(metricsContent);

    const observerInteraction = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const getViews = document.querySelectorAll('.hidden');

    getViews.forEach((view) => observerInteraction.observe(view));

    await cookies();
    await navTemplate();
    await partnersTemplate();
    detectedThemeColor();
    themeColor();
    readCookies();
    initializeScrollers();
    footerTemplate();

    window.openServiceList = openServiceList;
    window.openMenuMobile = openMenuMobile;
    window.detectedThemeColor = detectedThemeColor;
    window.themeColor = themeColor;
    window.getCookies = getCookies;
    window.readCookies = readCookies;
});
