import { navbarTemplate } from "../../components/nav/nav.js";
import { footerTemplate } from "../../components/footer/footer.js";

import { scrollReveal } from "../../services/scrollReveal.js";

document.addEventListener("DOMContentLoaded", function () {
    navbarTemplate()
    footerTemplate()

    scrollReveal()
})