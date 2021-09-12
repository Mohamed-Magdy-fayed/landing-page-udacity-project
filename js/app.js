/**
 * Define Global Variables
 * 
*/

const body = document.querySelector ("body");
const main = document.querySelector ("main");
const addSectionButton = document.querySelector ("button");
const navUl = document.querySelector ("ul");
const btn = document.getElementById ("toTopBtn");
const nav = document.querySelector ("nav");
const hamburgerBtn = document.getElementById ("hamburger__btn");
let sectionNum = 1;
const scrollTimer = -1;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// scroll into view function behavior

const scrollIntoView = function scrollIntoView(section) {
    section.scrollIntoView ({behavior: "smooth", block: "center"});
}

// hide and display the scroll to top button

const show = function show () {
    btn.style.display = "block";
}

const hide = function hide() {
    btn.style.display = "none";
}

//open/close hamburger menu

hamburgerBtn.addEventListener ("click", function open(event) {
    event.preventDefault();
    if (hamburgerBtn.classList.contains ("open")) {
        hamburgerBtn.classList.remove ("open");
        navUl.classList.remove ("opened");
        navUl.style.display = "none";
        body.style.overflow = "visible";
    } else {
        hamburgerBtn.classList.add ("open");
        navUl.classList.add ("opened");
        body.style.overflow = "hidden"
        navUl.style.display = "flex";
    }
})

// show/hide hamburger menu and nav list
addSectionButton.addEventListener ("click", function showHam() {
    if (navUl.childElementCount >= 9 && window.innerWidth >= 650) {
        hamburgerBtn.style.display = "block";
        navUl.style.display = "none";
    } else {} 
})

// scroll to top function behavior

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build page

const run = function run () {
    addItem ();
    addSection ();
}

addSectionButton.addEventListener ('click', run);

// funtion to add section

const addSection = function addSection () {
    const sectionContent = `
    <section id="section${sectionNum}" data-nav="${sectionNum}">
      <div class="landing__container">
        <h2>Section ${sectionNum}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>`;
    sectionNum++;

    main.insertAdjacentHTML ("beforeend", sectionContent);
}

// function to add menu item 

const addItem = function addItem () {
    const itemContent = `section ${sectionNum}`;
    const listItem = document.createElement ("li");

    listItem.classList.add ("menu__link");
    listItem.textContent = itemContent;
    listItem.dataset.nav = sectionNum

    navUl.appendChild (listItem);
}

// scroll event activates the section in view port
// using getBoundingClientRect object
// using helper function to hide/show the scroll to top button

window.onscroll = function () {   
    const sections = document.querySelectorAll ("section"); 
    sections.forEach (function callbackFn(element) {
        let toTop = element.getBoundingClientRect()
        if (toTop.top >= -300 && toTop.top <= 300) {
            element.classList.add ("active");
            let activeItem = document.querySelector (`[data-nav*="${element.dataset.nav}"]`)
            document.querySelectorAll ("menu__link").forEach (function callbackFn(elm) {
            });
            activeItem.classList.add ("menu__active");
        } else {
            element.classList.remove ("active");
            let deactiveItem = document.querySelector (`[data-nav*="${element.dataset.nav}"]`)
            document.querySelectorAll ("menu__link").forEach (function callbackFn(elm) {
            });
            deactiveItem.classList.remove ("menu__active");

            let height = main.getBoundingClientRect();
            height.top <= -227 ? show(): hide()
        }
    })
}

// Scroll to section on link click

navUl.addEventListener ("click", function selectSection (event) {
    let target = document.getElementById ("section"+event.target.dataset.nav);
    scrollIntoView(target);
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build page 

run ();
run ();
run ();
