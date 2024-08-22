import { navTemplate, openServiceList, openMenuMobile } from '../nav/nav.js';
import { footerTemplate } from '../footer/footer.js';

navTemplate();
footerTemplate();

window.openServiceList     = openServiceList;
window.openMenuMobile      = openMenuMobile;