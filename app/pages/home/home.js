import { videoConfig } from "../../services/videoHandler.js"
import { toggleListBody } from "../../services/toggleListBody.js";

document.addEventListener("DOMContentLoaded", function () {
    videoConfig('videoPlayer', 'overlay')

    const buttons = document.querySelectorAll('.listHeader button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        toggleListBody(button);
      });
    });
});