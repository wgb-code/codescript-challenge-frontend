export async function footerTemplate() {
    try {
        let response = await fetch('/app/components/footer/footer.html')

        if (!response.ok) {
            throw new Error(
                `Erro ao carregar Footer: ${response.statusText}`
            )
        }

        let data = await response.text()

        document.getElementById('footer').innerHTML = data

    } catch (error) {
        console.log('Erro ao carregar Footer:', error)
    }
}