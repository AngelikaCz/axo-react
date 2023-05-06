//NAVBAR

let navigation = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    navigation.classList.add("navbar--bg");
  } else {
    navigation.classList.remove("navbar--bg");
  }
});

let hamburger = document.querySelector(".navbar__hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("navbar__hamburger--active");
  navigation.classList.toggle("navbar--open");
});

//COUNTERS

let counts = setInterval(updated, 100);
let upto = 0;
function updated() {
  let count = document.getElementById("counterYears");
  count.innerHTML = ++upto;
  if (upto === 7) {
    clearInterval(counts);
  }
}

let countsP = setInterval(updatedP);
let uptoP = 0;
function updatedP() {
  let countP = document.getElementById("counterProjects");
  countP.innerHTML = ++uptoP;
  if (uptoP === 300) {
    clearInterval(countsP);
  }
}

let countsC = setInterval(updatedC);
let uptoC = 0;
function updatedC() {
  let countC = document.getElementById("counterClients");
  countC.innerHTML = ++uptoC;
  if (uptoC === 135) {
    clearInterval(countsC);
  }
}

// SLIDER testimonials

tns({
  container: ".testimonials__section",
  items: 2,
  slideBy: "page",
  autoplay: true,
  controls: true,
  controlsText: ["<", ">"],
  autoplayButtonOutput: false,
  nav: false,
  mouseDrag: true,
});

// SLIDER logos

tns({
  container: ".slider__element",
  items: 4,
  slideBy: 1,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  nav: false,
  mouseDrag: true,
});
