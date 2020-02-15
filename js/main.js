const rootElement = document.querySelector('.root');
const sections = document.querySelectorAll("section");

let visibleSectionIndex = 0;

let scrollingBlocade = false;

function moveToSection(index) {
    sections[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function setDirection(direction) {
    if (direction === 1) {
        const checkLastSection = visibleSectionIndex === sections.length - 1;
        if (checkLastSection) return;
    } else if (direction === -1) {
        const checkFirstSection = visibleSectionIndex === 0;
        if (checkFirstSection) return;
    }

    visibleSectionIndex = visibleSectionIndex + direction;

    moveToSection(visibleSectionIndex);
}

document.addEventListener('wheel', function (event) {
    if (scrollingBlocade) return;

    scrollingBlocade = true;

    setTimeout(function () {
        scrollingBlocade = false;
    }, 1000);

    const direction = event.deltaY > 0 ? 1 : -1;

    setDirection(direction);
});

document.addEventListener('keydown', (event) => {

    if (event.keyCode === 40) return setDirection(1);
    else if (event.keyCode === 38) return setDirection(-1);
})