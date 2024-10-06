export function scrollReveal () {
    const revealElements = document.querySelectorAll('.scrollReveal');

    let options = {
        root: null,
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    revealElements.forEach(element => {
        observer.observe(element);
    });
}
