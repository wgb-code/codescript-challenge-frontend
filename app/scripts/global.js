import { navTemplate, openServiceList, openMenuMobile, detectedThemeColor, themeColor } from '../pages/nav/nav.js';
import { cookies, readCookies, getCookies } from '../pages/cookies/cookies.js';
import { footerTemplate } from '../pages/footer/footer.js';

document.addEventListener('DOMContentLoaded', async function () {
    const observerInteraction = new IntersectionObserver( (entries) => {
        entries.forEach( (entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const getViews = document.querySelectorAll('.hidden');

    getViews.forEach( (getViews) => observerInteraction.observe(getViews));

    await cookies();
    await navTemplate();
    detectedThemeColor();
    themeColor();
    readCookies();
    footerTemplate();

    window.openServiceList = openServiceList;
    window.openMenuMobile = openMenuMobile;
    window.detectedThemeColor = detectedThemeColor;
    window.themeColor = themeColor;
    window.getCookies = getCookies;
    window.readCookies = readCookies;
});