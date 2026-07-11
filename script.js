// ===========================
// HABIORA VA JAVASCRIPT
// ===========================

// MOBILE MENU
const menu = document.getElementById("mobile-menu");
const nav = document.querySelector(".nav-links");

if (menu && nav) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// STICKY NAVBAR
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        navbar.classList.add("sticky");

    }else{

        navbar.classList.remove("sticky");

    }

});

// SCROLL REVEAL
const sections = document.querySelectorAll("section");

function reveal(){

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

