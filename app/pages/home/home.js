import { navbarTemplate } from "../../components/nav/nav.js";
import { footerTemplate } from "../../components/footer/footer.js";

import { videoConfig } from "../../services/videoHandler.js"
import { toggleListBody } from "../../services/toggleListBody.js";
import { scrollReveal } from "../../services/scrollReveal.js";
import { scrollPartners } from "../../services/scrollPartners.js";

document.addEventListener("DOMContentLoaded", function () {
    videoConfig('videoPlayer', 'overlay')

    let buttons = document.querySelectorAll('.listHeader button')

    buttons.forEach( button => {
      button.addEventListener('click', () => {
        toggleListBody(button)
      })
    })

    navbarTemplate()
    footerTemplate()

    scrollReveal()
    scrollPartners()
})