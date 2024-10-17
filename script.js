let Currentslide = 0;
const slides = document.getElementById("slides");
const totalslides = document.querySelectorAll(".slide").length;

console.log(totalslides);

document.getElementById("next").addEventListener("click", () => {
  Currentslide = (Currentslide + 1) % totalslides;
  UpdateSlides();
});

document.getElementById("previous").addEventListener("click", () => {
  Currentslide = (Currentslide - 1 + totalslides) % totalslides;
  UpdateSlides();
});

function UpdateSlides() {
  const offset = -Currentslide * 600;
  slides.style.transform = `translateX(${offset}px)`;
}
