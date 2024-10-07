export async function navbarTemplate() {

    try {
        let response = await fetch('/app/components/nav/nav.html')

        if (!response.ok) {
            throw new Error(
                `Erro ao carregar Navbar: ${response.statusText}`
            )
        }

        let data = await response.text()

        document.getElementById('navbar').innerHTML = data

        let menuToggle = document.getElementById('menuToggle')
        let menu = document.querySelector('nav ul')
        let logo = document.getElementById('codeLogo')

        if (menuToggle && menu) {
            menuToggle.addEventListener('click', () => {

                menu.classList.toggle('active')
                menuToggle.classList.toggle('open')

                if (menu.classList.contains('active')) {
                    menuToggle.innerHTML = '&times;'
                } else {
                    menuToggle.innerHTML = '&#9776;'
                }
            });
        }

        window.addEventListener('scroll', () => {

            let navbar = document.querySelector('nav')
            let links = document.querySelectorAll('nav ul li a')

            if (window.scrollY > 0) {
                navbar.classList.add('scrolled-nav')
                logo.src = '/app/assets/imgs/logos/codescript-white.webp'

                links.forEach(link => {
                    link.style.color = 'var(--whitePrimary)'
                })

                menuToggle.style.color = 'var(--whitePrimary)'
            } else {
                navbar.classList.remove('scrolled-nav');
                logo.src = '/app/assets/imgs/logos/codescript.webp'

                links.forEach(link => {
                    link.style.color = 'var(--darkPrimary)'
                })

                menuToggle.style.color = 'var(--darkPrimary)'
            }
        });

    } catch (error) {
        console.log('Erro ao carregar navbar:', error)
    }
}
