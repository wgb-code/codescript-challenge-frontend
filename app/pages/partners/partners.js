export async function partnersTemplate() {

    try {
        let response = await fetch('/app/pages/partners/partners.html');

        if (!response.ok) {
            throw new Error(
                `Erro ao carregar Partners: ${response.statusText}`
            );
        }

        let data = await response.text();

        document.getElementById('partners').innerHTML = data;

    } catch (error) {
        console.error('Erro ao carregar Partners:', error);
    }
}

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}