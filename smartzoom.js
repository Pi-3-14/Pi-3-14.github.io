// Copyright Coding_Blink 2025
const MIN_ZOOM = 0.3;
const ZOOM_STEP = 0.05;

function applyZoom(zoom) {
    document.body.style.zoom = zoom;
}

function checkNavOverflow() {
    const nav = document.getElementById('desktop-nav');
    return nav.scrollWidth > nav.clientWidth;
}

function zoomOutUntilFits() {
    let currentZoom = Number(document.body.style.zoom) || 1;

    function tryZoomOut() {
        if (!checkNavOverflow() || currentZoom <= MIN_ZOOM) {
            return;
        }

        currentZoom -= ZOOM_STEP;
        currentZoom = Math.max(currentZoom, MIN_ZOOM);
        applyZoom(currentZoom);

        setTimeout(tryZoomOut, 100);
    }

    tryZoomOut();
}

document.addEventListener('DOMContentLoaded', () => {
    // Apply zoom only if there's overflow
    if (checkNavOverflow()) {
        zoomOutUntilFits();
    }

    window.addEventListener('resize', function() { document.body.style.zoom = 1; zoomOutUntilFits(); });
});
zoomOutUntilFits();