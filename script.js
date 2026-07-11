// ===========================
// HABIORA VA JAVASCRIPT
// Part 1
// ===========================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }

});

// Back To Top Button
const backTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        backTop.style.display = "flex";
    }else{
        backTop.style.display = "none";
    }

});

// Scroll Reveal Animation
const reveals = document.querySelectorAll("section");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(sectionTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// ===========================
// HABIORA VA JAVASCRIPT
// Part 2
// ===========================

// Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Contact Form
const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you for contacting Habiora VA! We will get back to you shortly.");

        form.reset();

    });

}

// Fade-in Animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card, .service-card, .value-card, .client-card, .objective-card, .feature-box").forEach(el=>{

    observer.observe(el);

});

// Button Hover Effect
document.querySelectorAll(".primary-btn, .secondary-btn").forEach(button=>{

    button.addEventListener("mouseenter", ()=>{

        button.style.transform="translateY(-3px)";

    });

    button.addEventListener("mouseleave", ()=>{

        button.style.transform="translateY(0)";

    });

});

// Current Year in Footer
const year = document.querySelector("#year");

if(year){

    year.textContent = new Date().getFullYear();

}

// Page Loaded Animation
window.addEventListener("load", ()=>{

    document.body.classList.add("loaded");

});