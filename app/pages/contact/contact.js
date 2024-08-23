import { navTemplate, openServiceList, openMenuMobile } from '../nav/nav.js';
import { footerTemplate } from '../footer/footer.js';

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse.length > 0) {
        throw new Error('reCAPTCHA não completado.')
    }

    const formData = new FormData(e.target);
    const params = new URLSearchParams(formData);

    //Estou usando o httpbin para testar o envio do formulário.
    fetch('http://httpbin.org/post', {
        method: "POST",
        body: params,
    })
        .then(data => {
            form.reset();
            grecaptcha.reset();
            showToast();
            //Esse console é só para exibir a requisição.
            console.log(data);
            submitButton.disabled = false;
        })
        .catch(
            err => console.error(err)
        )
});

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hidden');
    }, 5000);
}

navTemplate();
footerTemplate();

window.openServiceList = openServiceList;
window.openMenuMobile = openMenuMobile;