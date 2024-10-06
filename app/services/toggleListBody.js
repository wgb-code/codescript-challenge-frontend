export function toggleListBody(button) {
    let listBody = button.parentElement.nextElementSibling;
    let icon = button.querySelector('img');

    if (listBody.classList.contains('open')) {
      listBody.style.maxHeight = null;
      listBody.classList.remove('open');

      icon.src = "/app/assets/svgs/icons/more.svg";

    } else {
      listBody.style.maxHeight = listBody.scrollHeight + "px";
      listBody.classList.add('open');

      icon.src = "/app/assets/svgs/icons/minus.svg";
    }
  }
