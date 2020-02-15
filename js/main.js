document.addEventListener("DOMContentLoaded", function () {

    const rootElement = document.querySelector('.root');
    const sections = document.querySelectorAll("section");

    let visibleSectionIndex = 0;

    let scrollingBlocade = false;

    document.addEventListener('wheel', function (event) {

        if (scrollingBlocade) return;

        scrollingBlocade = true;

        setTimeout(function () {
            scrollingBlocade = false;
        }, 1000);

        const direction = event.deltaY > 0 ? 1 : -1;

        if (direction === 1) {
            const checkLastSection = visibleSectionIndex === sections.length - 1;
            if (checkLastSection) return;
        } else if (direction === -1) {
            const checkFirstSection = visibleSectionIndex === 0;
            if (checkFirstSection) return;
        }

        visibleSectionIndex = visibleSectionIndex + direction;

        console.log(visibleSectionIndex);

        sections[visibleSectionIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});