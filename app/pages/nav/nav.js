export async function navTemplate() {
    try {
        let response = await fetch('app/pages/nav/nav.html');

        if (!response.ok) {
            throw new Error(
                `Erro ao carregar navbar: ${response.statusText}`
            );
        }

        let data = await response.text();

        document.getElementById('navbar-container').innerHTML = data;

    } catch (error) {
        console.error('Erro ao carregar navbar:', error);
    }
}