/**
 * Define Global Variables
 *
*/

const body = document.querySelector ("body");                       //disable the scrolling when the hamburger is opend
const main = document.querySelector ("main");                       //adding the section and show/hide to top button
const addSectionButton = document.querySelector ("button");         //show/hide the nav and the hamburger button also for adding section
const navUl = document.querySelector ("ul");                        //show/hide the nave, populate the navbar and scroll to section
const toTopBtn = document.getElementById ("toTopBtn");              //show/hide the to top button and scrolling to top event
const hamburgerBtn = document.getElementById ("hamburger__btn");    //hamburger button functionality
let sectionNum = 1;                                                 //conting the section on the page

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// scroll into view function behavior

const scrollIntoView = function scrollIntoView(section) {
    section.scrollIntoView({behavior: "smooth", block: "start"});
}

// hide and display the scroll to top button

const show = function show() {
    toTopBtn.style.display = "block";
}

const hide = function hide() {
    toTopBtn.style.display = "none";
}

//open/close hamburger menu, navbar and adjust the helper classes on them

const open = function open(event) {
    event.preventDefault();

    if (hamburgerBtn.classList.contains("open")) {
        hamburgerBtn.classList.remove("open");
        navUl.classList.remove("opened");
        navUl.style.display = "none";
        navUl.style.overflow = "auto";
        body.style.overflow = "visible";

        show()
    } else {
        hamburgerBtn.classList.add("open");
        navUl.classList.add("opened");
        navUl.style.display = "block";
        navUl.style.overflow = "auto";
        body.style.overflow = "hidden";
        
        hide()
    }
}

hamburgerBtn.addEventListener("click", open)

// show/hide hamburger menu and nav list

addSectionButton.addEventListener("click", function () {
    
    if (navUl.childElementCount === 9 && window.innerWidth >= 1000) {
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

const run = function run() {
    addItem();
    addSection();
}

// funtion to add section

const addSection = function addSection() {
    const sectionContent = `
    <section id="section${sectionNum}" data-nav="${sectionNum}">
      <div class="landing__container">
        <h2>Section ${sectionNum}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>`;
    sectionNum++;

    main.insertAdjacentHTML("beforeend", sectionContent);
}

// function to add menu item

const addItem = function addItem() {
    const fragment = document.createDocumentFragment();
    const itemContent = `section ${sectionNum}`;
    const listItem = document.createElement("li");

    listItem.classList.add ("menu__link");
    listItem.textContent = itemContent;
    listItem.dataset.nav = sectionNum

    fragment.appendChild(listItem);
    navUl.appendChild(fragment);
}

// scroll event activates the section in view port
// using getBoundingClientRect object
// using helper function to hide/show the scroll to top button

window.onscroll = function() {
    const sections = document.querySelectorAll ("section");

    sections.forEach (function callbackFn(element) {
        let toTop = element.getBoundingClientRect()

        if (toTop.top >= -300 && toTop.top <= 400) {
            element.classList.add("active");

            let activeItem = document.querySelector(`[data-nav*="${element.dataset.nav}"]`)
            document.querySelectorAll("menu__link").forEach(function callbackFn(elm) {
            });
            activeItem.classList.add("menu__active");
        } else {
            element.classList.remove("active");

            let deactiveItem = document.querySelector(`[data-nav*="${element.dataset.nav}"]`)
            document.querySelectorAll("menu__link").forEach(function callbackFn(elm) {
            });

            deactiveItem.classList.remove("menu__active");

            let height = main.getBoundingClientRect();
            height.top <= -227 ? show(): hide()
        }
    })
}

// Scroll to section on link click

navUl.addEventListener("click", function (event) {    
    let target = document.getElementById("section"+event.target.dataset.nav);
    scrollIntoView(target);

    if (window.innerWidth < 960 || hamburgerBtn.classList.contains("open")) {
        open(event);
    }
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build page

addSectionButton.addEventListener('click', run);

run();
run();
run();
run();
