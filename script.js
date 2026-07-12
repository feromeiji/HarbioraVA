/*=========================================================
HABIORA VA
Premium Interaction Script
=========================================================*/

/*====================================
LOADING SCREEN
====================================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1200);

});

/*====================================
STICKY NAVBAR
====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.padding="10px 8%";

header.querySelector(".navbar").style.background="rgba(255,255,255,.65)";

header.querySelector(".navbar").style.backdropFilter="blur(30px)";

}

else{

header.style.padding="22px 8%";

header.querySelector(".navbar").style.background="rgba(255,255,255,.28)";

}

});

/*====================================
SCROLL PROGRESS BAR
====================================*/

const progress=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const totalHeight=document.body.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});

/*====================================
SMOOTH SCROLL
====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});

/*====================================
COUNTER
====================================*/

const counters=document.querySelectorAll(".counter");

const speed=120;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

}

update();

});

/*====================================
SCROLL REVEAL
====================================*/

const reveals=document.querySelectorAll(

"section,.service-card,.portfolio-item,.about-item,.value-card,.testimonial-card"

);

function reveal(){

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*====================================
BACK TO TOP BUTTON
====================================*/

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.className="topBtn";

document.body.appendChild(topButton);

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

window.addEventListener("scroll",()=>{

topButton.style.opacity=

window.scrollY>500?"1":"0";

});

/*====================================
MOBILE MENU
====================================*/

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

menu.classList.toggle("open");

});
/*=========================================================
PORTFOLIO FILTER
=========================================================*/

const filterButtons=document.querySelectorAll(".portfolio-filter button");

const portfolioItems=document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

portfolioItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

setTimeout(()=>{

item.style.opacity="1";

item.style.transform="scale(1)";

},100);

}

else{

if(item.classList.contains(filter)){

item.style.display="block";

setTimeout(()=>{

item.style.opacity="1";

item.style.transform="scale(1)";

},100);

}

else{

item.style.opacity="0";

item.style.transform="scale(.8)";

setTimeout(()=>{

item.style.display="none";

},300);

}

}

});

});

});

/*=========================================================
PORTFOLIO POPUP
=========================================================*/

const modal=document.getElementById("imageModal");

const modalImage=document.getElementById("expandedImage");

const modalTitle=document.getElementById("imageTitle");

const modalDescription=document.getElementById("imageDescription");

const close=document.querySelector(".close-image");

document.querySelectorAll(".view-project").forEach(button=>{

button.addEventListener("click",()=>{

modal.style.display="flex";

document.body.style.overflow="hidden";

modalImage.src=button.dataset.image;

modalTitle.innerHTML=button.dataset.title;

modalDescription.innerHTML=button.dataset.description;

});

});

close.onclick=()=>{

modal.style.display="none";

document.body.style.overflow="auto";

}

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

document.body.style.overflow="auto";

}

}

/*=========================================================
FAQ
=========================================================*/

/* FAQ Accordion */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
/*=========================================================
AUTO TESTIMONIALS
=========================================================*/

const testimonials=document.querySelectorAll(".testimonial-card");

let currentTestimonial=0;

function rotateTestimonials(){

testimonials.forEach(card=>{

card.style.opacity=".35";

card.style.transform="scale(.95)";

});

testimonials[currentTestimonial].style.opacity="1";

testimonials[currentTestimonial].style.transform="scale(1)";

currentTestimonial++;

if(currentTestimonial>=testimonials.length){

currentTestimonial=0;

}

}

rotateTestimonials();

setInterval(rotateTestimonials,3500);

/*=========================================================
BOOKING FORM
=========================================================*/

const booking=document.getElementById("bookingForm");

if(booking){

booking.addEventListener("submit",(e)=>{

e.preventDefault();

const button=booking.querySelector("button");

button.innerHTML="Scheduling...";

button.disabled=true;

setTimeout(()=>{

button.innerHTML="✓ Request Sent";

button.style.background="#28a745";

setTimeout(()=>{

button.innerHTML="Schedule My Discovery Call";

button.disabled=false;

button.style.background="";

booking.reset();

},2500);

},1500);

});

}
/*=========================================================
CUSTOM CURSOR
=========================================================*/

const cursor=document.createElement("div");
cursor.className="cursor";

const cursor2=document.createElement("div");
cursor2.className="cursor2";

document.body.appendChild(cursor);
document.body.appendChild(cursor2);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

setTimeout(()=>{

cursor2.style.left=e.clientX+"px";
cursor2.style.top=e.clientY+"px";

},80);

});

document.querySelectorAll("a,button,.portfolio-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("grow");
cursor2.classList.add("grow");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("grow");
cursor2.classList.remove("grow");

});

});

/*=========================================================
MAGNETIC BUTTONS
=========================================================*/

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;

button.style.transform=`translate(${x*0.15}px,${y*0.15}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});

/*=========================================================
3D PORTFOLIO TILT
=========================================================*/

document.querySelectorAll(".portfolio-item").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;
const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

});

/*=========================================================
PARALLAX BACKGROUND
=========================================================*/

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

document.querySelectorAll(".gradient").forEach((blob,index)=>{

const speed=(index+1)*25;

blob.style.transform=
`translate(${x*speed}px,${y*speed}px)`;

});

});

/*=========================================================
ACTIVE NAVIGATION
=========================================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================================================
FADE-IN STAGGER
=========================================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(

".service-card,.portfolio-item,.value-card,.about-item,.testimonial-card,.faq-item"

).forEach(item=>observer.observe(item));

/*=========================================================
IMAGE LAZY LOADING
=========================================================*/

const lazyImages=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries,observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.classList.add("loaded");

observer.unobserve(img);

}

});

});

lazyImages.forEach(img=>imageObserver.observe(img));

/*=========================================================
KEYBOARD ESC CLOSE MODAL
=========================================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

const modal=document.getElementById("imageModal");

if(modal){

modal.style.display="none";

document.body.style.overflow="auto";

}

}

});

/*=========================================================
CONSOLE MESSAGE
=========================================================*/

console.log(

"%cHabiora VA",

"font-size:28px;color:#888;font-weight:bold;"

);

console.log(

"%cDesigned with ❤️",

"font-size:15px;color:#666;"

);

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", ()=>{

    navLinks.classList.toggle("active");

});

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});
document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});
/* =========================================
BUSINESS OBJECTIVES
========================================= */

.objectives{

padding:110px 8%;

}

.objectives-grid{

display:grid;

grid-template-columns:repeat(2,1fr);

gap:35px;

margin-top:60px;

}

.objective-card{

background:rgba(255,255,255,.05);

border:1px solid rgba(255,255,255,.08);

backdrop-filter:blur(18px);

border-radius:24px;

padding:40px;

transition:.35s;

}

.objective-card:hover{

transform:translateY(-10px);

border-color:rgba(255,255,255,.18);

}

.objective-icon{

width:70px;

height:70px;

border-radius:50%;

display:flex;

align-items:center;

justify-content:center;

background:rgba(255,255,255,.08);

margin-bottom:25px;

font-size:30px;

}

.objective-card h3{

margin-bottom:20px;

font-size:28px;

}

.objective-card ul{

padding-left:20px;

line-height:2;

}

.objective-card li{

margin-bottom:10px;

}

@media(max-width:768px){

.objectives-grid{

grid-template-columns:1fr;

}

}
