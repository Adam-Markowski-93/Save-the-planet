document.addEventListener('scroll', () => {
    //Global variables shows actuall window height and position of scroll from the top of window;
    const windowHeight = this.innerHeight;
    const valueOfScroll = this.scrollY;

    // Array contain all section from HTML structure
    const allSections = [...document.querySelectorAll('section')];

    // In that case all sections have the same height, I decided to get from any.
    const sectionHeight = allSections[0].offsetHeight;

    // Attribute distance from top from all sections
    const eachSectionFromTop = [];

    for (let i = 0; i < allSections.length; i++) {
        const secHei = allSections[i].offsetTop;
        eachSectionFromTop.push(secHei);
    }

    //All conditions to relase an effects

    if (valueOfScroll === 0) {
        allSections[0].classList.add("animation");
    }
    if (valueOfScroll > eachSectionFromTop[1] + sectionHeight - windowHeight) {
        allSections[1].classList.add("animation");
    }
    if (valueOfScroll > eachSectionFromTop[2] + sectionHeight - windowHeight) {
        allSections[2].classList.add("animation");
    }
    if (valueOfScroll > eachSectionFromTop[3] + sectionHeight - windowHeight) {
        allSections[3].classList.add("animation");
    }
    if (valueOfScroll > eachSectionFromTop[4] + sectionHeight - windowHeight) {
        allSections[4].classList.add("animation");
    }
    if (valueOfScroll > eachSectionFromTop[5] + sectionHeight - windowHeight) {
        allSections[5].classList.add("animation");
    }
    if (valueOfScroll > eachSectionFromTop[6] + sectionHeight - windowHeight) {
        allSections[6].classList.add("animation");
    }
    if (valueOfScroll > eachSectionFromTop[7] + sectionHeight - windowHeight) {
        allSections[7].classList.add("animation");
    }

    if (valueOfScroll < 50) {
        allSections.forEach(section => {
            section.classList.remove("animation");
        })
    }
})