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
    let cookieData = JSON.parse(localStorage.getItem('codescript'));

    if (cookieData) {
        let currentTime = Date.now();
        let expirationTime = cookieData.timestamp + 24 * 60 * 60 * 1000;

        if (currentTime > expirationTime) {
            localStorage.removeItem('codescript');
            cookiesCard.classList.add('show');
        } else {
            cookiesCard.classList.remove('show');
        }
    } else {
        cookiesCard.classList.add('show');
    }
}

export function getCookies(action) {
    let cookiesCard = document.querySelector('.cookies-card');

    if (action === 'accepted' || action === 'rejected') {

        let cookieData = {
            status: action === 'accepted' ? 'Authorized' : 'Not Authorized',
            timestamp: Date.now()
        };

        localStorage.setItem('codescript', JSON.stringify(cookieData));
        cookiesCard.classList.remove('show');
    }
}