/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const main = document.querySelector ("main");
const addSectionButton = document.querySelector ("button");
const navUl = document.querySelector ("ul");
const btn = document.getElementById ("myBtn");




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// scroll into view function 

const scrollIntoView = function scrollIntoView(section) {
    section.scrollIntoView ({behavior: "smooth"});
}

// hiding the scroll to top button

function show () {
    btn.style.display = "block";
}

function hide() {
    btn.style.display = "none";
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build page

// funtion to add section

let sectionNum = 1;
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

// function to run adding script 

const run = function run () {
    addItem ();
    addSection ();
}

// scroll event activates the section in view port
// takes the data nav ID and use it to add the menu item as well

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
        }
    })
}

window.onscroll = function () {
    let height = main.getBoundingClientRect();
    height.top < 100 ? show(): hide()
}


addSectionButton.addEventListener ('click', run);

// scroll to top function 

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build page 

run ();
run ();
run ();

// Scroll to section on link click

navUl.addEventListener ("click", function selectSection (event) {
    let target = document.getElementById ("section"+event.target.dataset.nav);
    scrollIntoView(target);
});

// Set sections as active


