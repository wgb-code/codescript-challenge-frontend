export async function footerTemplate() {
    try {
        let response = await fetch('app/pages/footer/footer.html');

        if (!response.ok) {
            throw new Error(
                `Erro ao carregar footer: ${response.statusText}`
            );
        }

        let data = await response.text();

        document.getElementById('footer-container').innerHTML = data;

    } catch (error) {
        console.log('Erro ao carregar footer:', error)
    }
}