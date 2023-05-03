// CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 12.5) + "px; left: " + (e.pageX - 12.5) + "px;"
  );
});

// SERVICES TILT EFFECT
let servicesBox = document.querySelectorAll(".services__box-content");
let threshold = 15;

function handleTiltHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;

  const rotateX = (threshold / 2 - horizontal * threshold).toFixed(2);
  const rotateY = (vertical * threshold - threshold / 2).toFixed(2);

  servicesBox.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetTiltStyles(e) {
  servicesBox.style.transform = `perspective(${e.CurrentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

servicesBox.addEventListener("mousemove", handleTiltHover);
servicesBox.addEventListener("mouseleave", resetTiltStyles);

// PORTFOLIO IMAGES

let youtube = document.getElementById("youtube-link");
let youtubeImage = document.getElementById("youtube");
let detailImage = document.getElementById("detail");
let vimeoImage = document.getElementById("vimeo");
let soundcloudImage = document.getElementById("soundcloud");
let imagesImage = document.getElementById("images");
let allImages = document.querySelectorAll(".portfolio__image");

youtube.addEventListener("click", () => {
  allImages.classList.add("portfolio__image--notdisplayed");
});

// SLIDER

tns({
  container: ".slider__element",
  items: 5,
  slideBy: "page",
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  navPosition: "bottom",
  mouseDrag: true,
});
