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

    console.log(eachSectionFromTop);


})