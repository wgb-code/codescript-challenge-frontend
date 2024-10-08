import { navbarTemplate } from "../../components/nav/nav.js";
import { footerTemplate } from "../../components/footer/footer.js";
import { scrollReveal } from "../../services/scrollReveal.js";

document.addEventListener("DOMContentLoaded", function () {
    navbarTemplate();
    footerTemplate();
    scrollReveal();
});

let form = document.querySelector('form');
let submitButton = document.getElementById('submit-button');
let toastMessage = document.getElementById('toast-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    let captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse) {
        showToast('Por favor, complete o reCAPTCHA.', 'error');
        submitButton.disabled = false;
        return;
    }

    const formData = new FormData(e.target);
    const params = new URLSearchParams(formData);

    try {
        const response = await fetch('http://httpbin.org/post', {
            method: "POST",
            body: params,
        });

        if (response.ok) {
            form.reset();
            grecaptcha.reset();
            showToast('Formulário enviado com sucesso!', 'success');
        } else {
            showToast('Ocorreu um erro ao enviar o formulário.', 'error');
        }
    } catch (err) {
        console.error(err);
        showToast('Erro de rede. Tente novamente mais tarde.', 'error');
    } finally {
        submitButton.disabled = false;
    }
});

function showToast(message, type) {
    const toast = document.getElementById('toast');
    toastMessage.textContent = message;

    toast.classList.remove('hidden', 'success', 'error');
    toast.classList.add('show', type);

    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hidden');
    }, 5000);
}
