export function showAndHideLoader() {
    let loader = document.getElementById('preloader');
    let body   = document.getElementById('indexBody');

    loader.style.display = 'flex';
    body.style.overflow  = 'hidden';

    window.addEventListener('load', function() {

        setTimeout(() => {
            loader.style.display = 'none';
            body.style.overflow = '';

        }, 2000);
    });
}
