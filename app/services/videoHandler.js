export function videoConfig(videoId, overlayId) {

    const video   = document.getElementById(videoId)
    const overlay = document.getElementById(overlayId)

    function toggleOverlay(show) {
        overlay.style.display = show ? 'block' : 'none'
        document.body.style.overflow = show ? 'hidden' : ''
    }

    video.addEventListener('play', function () {
        toggleOverlay(true)
    });

    video.addEventListener('pause', function () {
        toggleOverlay(false)
    });

    video.addEventListener('ended', function () {
        toggleOverlay(false)
    });

    overlay.addEventListener('click', function () {
        video.pause()
    });
}
