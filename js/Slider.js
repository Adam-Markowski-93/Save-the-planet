const sliderMove = {
    startTouchY: null,
    startTouchX: null,
}
const endMove = {
    endtouchY: null,
    endtouchX: null,
}

const events = {
    swipeUp: new Event('swipeUp'),
    swipeDown: new Event('swipeDown'),
    swipeLeft: new Event('swipeLeft'),
    swipeRight: new Event('swipeRight'),
}

function startTouch(event) {
    event.preventDefault();
    sliderMove.startTouchX = event.touches[0].clientX;
    sliderMove.startTouchY = event.touches[0].clientY;
    // console.log(sliderMove.startTouchX);
    // console.log(sliderMove.startTouchY);
}

function moveTouch(event) {
    if (!sliderMove.startTouchX || !sliderMove.startTouchY) {
        return;
    }
    endMove.endtouchX = event.touches[0].clientX;
    endMove.endtouchY = event.touches[0].clientY;

    const touchChangeX = sliderMove.startTouchX - endMove.endtouchX;
    const touchChangeY = sliderMove.startTouchY - endMove.endtouchY;

    if (Math.abs(touchChangeX) > Math.abs(touchChangeY)) {
        //We are in horizontal axis (swipe from left to right and reverse)
        if (touchChangeX > 0) {
            // Moving left
            document.dispatchEvent(events.swipeLeft);
        } else {
            // Moving right
            document.dispatchEvent(events.swipeRight);
        }
    } else {
        //We are swiping from top to bottom and reverse. Vertical axis.
        if (touchChangeY > 0) {
            // Swipe to top
            document.dispatchEvent(events.swipeUp);
        } else {
            // Swipe to bottom
            document.dispatchEvent(events.swipeDown);
        }
    }

    sliderMove.startTouchY = null;
    sliderMove.startTouchX = null;
}

document.addEventListener('touchstart', startTouch);
document.addEventListener('touchmove', moveTouch);