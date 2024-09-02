import { navTemplate, openServiceList, openMenuMobile, detectedThemeColor, themeColor } from '../nav/nav.js';
import { footerTemplate } from '../footer/footer.js';

document.addEventListener('DOMContentLoaded', async function () {
    await navTemplate();
    detectedThemeColor();
    themeColor();
    footerTemplate();

    window.openServiceList = openServiceList;
    window.openMenuMobile = openMenuMobile;
    window.detectedThemeColor = detectedThemeColor;
    window.themeColor = themeColor;
});