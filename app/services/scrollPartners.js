export function scrollPartners() {

    let primary = document.querySelector('.partnersPrimary');
    let secondary = document.querySelector('.partnersSecondary');

    if (primary && secondary) {
        let scrollAmount = 0;

        function scrollLogos() {
            scrollAmount -= 1;
            if (Math.abs(scrollAmount) >= primary.clientWidth) {
                scrollAmount = 0;
            }
            primary.style.transform = `translateX(${scrollAmount}px)`;
            secondary.style.transform = `translateX(${scrollAmount + primary.clientWidth}px)`;
            requestAnimationFrame(scrollLogos);
        }

        scrollLogos();
    }
}