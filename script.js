// ==========================================
// HABIORA VA
// script.js
// ==========================================

// ===============================
// Smooth Scrolling
// ===============================

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

// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        navbar.classList.add("sticky");

    }

    else{

        navbar.classList.remove("sticky");

    }

});

// ===============================
// Mobile Menu
// ===============================

const menu = document.getElementById("mobile-menu");

const nav = document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

    nav.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

    });

});

// ===============================
// Booking Popup
// ===============================

const modal = document.getElementById("bookingModal");

const openBtn = document.getElementById("openModal");

const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click",()=>{

    modal.style.display="flex";

});

closeBtn.addEventListener("click",()=>{

    modal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});

// ===============================
// Booking Form
// ===============================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("🎉 Thank you for booking a Discovery Call! We will contact you shortly.");

    modal.style.display="none";

    bookingForm.reset();

});

// ===============================
// Scroll Animation
// ===============================

const sections = document.querySelectorAll("section");

function revealSections(){

    sections.forEach(section=>{

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - 120){

            section.style.opacity = "1";

            section.style.transform = "translateY(0)";

        }

    });

}

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition=".6s ease";

});

window.addEventListener("scroll",revealSections);

revealSections();

// BOOKING POPUP

const modal = document.getElementById("bookingModal");

const openBtn = document.getElementById("openModal");

const closeBtn = document.querySelector(".close");

const bookingForm = document.getElementById("bookingForm");

openBtn.addEventListener("click", () => {

    modal.style.display = "flex";

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

bookingForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("✅ Thank you! Your booking request has been received.");

    bookingForm.reset();

    modal.style.display = "none";

});

