export async function cookies() {

    try {
        let response = await fetch('/app/pages/cookies/cookies.html');

        if (!response.ok) {
            throw new Error(
                `Erro ao carregar Cookies Message: ${response.statusText}`
            );
        }

        let data = await response.text();

        document.getElementById('cookies').innerHTML = data;

    } catch (error) {
        console.error('Erro ao carregar Cookies Message:', error);
    }
}

export function readCookies() {
    let cookiesCard = document.querySelector('.cookies-card');
    let readCookies = localStorage.getItem('codescript');

    readCookies ? cookiesCard.classList.remove('show') : cookiesCard.classList.add('show');
}

export function getCookies(action) {
    let cookiesCard = document.querySelector('.cookies-card');

    if (action === 'accepted') {
        localStorage.codescript = 'Authorized';
        cookiesCard.classList.remove('show');

    } else if (action === 'rejected') {
        localStorage.codescript = 'Not Authorized';
        cookiesCard.classList.remove('show');
    }
}