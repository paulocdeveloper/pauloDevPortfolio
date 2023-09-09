
 function setupScrollReveal(selector, options) {
   const sr = ScrollReveal({ reset: true });
   sr.reveal(selector, options);
 }
 
 const commonOptions = {
   rotate: { x: 100, y: 10, z: 0 },
   duration: 2000,
 };
 
 // Aplicar ScrollReveal aos elementos desejados
 setupScrollReveal('.conhecimentos', commonOptions);
 setupScrollReveal('.content-about', commonOptions);
 setupScrollReveal('.sobre-title', commonOptions);
 setupScrollReveal('.caixa-sobre', commonOptions);
 setupScrollReveal('.projetos', commonOptions);
 setupScrollReveal('.content-projetos', commonOptions);
 setupScrollReveal('.content-about2', commonOptions);
 setupScrollReveal('#paulo-img', commonOptions);
 setupScrollReveal('.text-position', commonOptions);
 setupScrollReveal('.projetos', commonOptions);
 setupScrollReveal('.projeto1', commonOptions);
 setupScrollReveal('.projeto2', commonOptions);
 setupScrollReveal('.projeto2', commonOptions);
 setupScrollReveal('.contato', commonOptions);
 setupScrollReveal('.content-contato', commonOptions);
 setupScrollReveal('.email', commonOptions);
 setupScrollReveal('.whatsapp-contato', commonOptions);
















 const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Developer", "Javascript", "Web"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});