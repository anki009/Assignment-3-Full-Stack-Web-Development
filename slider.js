let currentSlide = 0
const slides = Array.from(document.querySelectorAll('.slides'))
const dots = document.querySelectorAll(".dots")
console.log(dots);

var slider = setInterval(() => {
  slides.forEach((slide,index) => {
      slide.style.display = "none"
  })
  slides[currentSlide].style.display = "block"

  currentSlide++
  if(currentSlide > slides.length - 1) {
      currentSlide = 0
   }
  }, 2000);

setTimeout(slider, 3000)

dots.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    console.log("clicked", e.target, index);
    currentSlide = index
    setTimeout(slider, 500)
  })
})



 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
