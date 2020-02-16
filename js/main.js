// Global variables and function

const rootElement = document.querySelector('.root');
const sections = document.querySelectorAll("section");

let visibleSectionIndex = 0;

let scrollingBlocade = false;

function moveToSection(index) {
    activeSectionInNav(); // Use to set active item in navigation
    sections[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function setDirection(direction) {
    if (direction === 1) {
        const checkLastSection = visibleSectionIndex === sections.length - 1;
        if (checkLastSection) return; // Check if it last section
    } else if (direction === -1) {
        const checkFirstSection = visibleSectionIndex === 0;
        if (checkFirstSection) return; //Check if it first section
    }
    //
    visibleSectionIndex = visibleSectionIndex + direction;

    moveToSection(visibleSectionIndex);
}

// Bulding and render navigation with aside element

const navigation = document.createElement('aside');
navigation.classList.add("navigation")

const listUl = document.createElement('ul');
listUl.classList.add('navigation__list');

[...document.querySelectorAll('section')].forEach((section, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('navigation__item');

    listItem.addEventListener('click', () => {
        visibleSectionIndex = index;
        moveToSection(index);
    })

    listUl.appendChild(listItem);
})

navigation.appendChild(listUl);

document.body.appendChild(navigation);


// Function response to add and remove class on list items
function activeSectionInNav() {
    const navItems = document.querySelectorAll('.navigation__item');

    navItems.forEach((item, index) => {
        if (index === visibleSectionIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
}

// EVENT LISTENERS //

// Listenig on mousewheel move
document.addEventListener('wheel', function (event) {

    if (scrollingBlocade) return;

    scrollingBlocade = true;

    setTimeout(function () {
        scrollingBlocade = false;
    }, 1000);

    const direction = event.deltaY > 0 ? 1 : -1;

    setDirection(direction);
});

// Listening on key press

document.addEventListener('keydown', (event) => {

    if (event.keyCode === 40) return setDirection(1);
    else if (event.keyCode === 38) return setDirection(-1);
})

// Listening to swipe 
document.addEventListener('swipeUp', () => setDirection(1));
document.addEventListener('swipeDown', () => setDirection(-1));