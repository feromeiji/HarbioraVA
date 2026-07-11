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

const menu = document.getElementById("mobile-menu");
const nav = document.querySelector(".nav-links");

if (menu && nav) {
    menu.addEventListener('click', () => {
        nav.classList.toggle("active");
    });
}
