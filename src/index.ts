const slides = document.querySelectorAll<HTMLElement>(".slide");
const nextBtn = document.querySelector<HTMLButtonElement>(".nextBtn");
const prevBtn = document.querySelector<HTMLButtonElement>(".prevBtn");
slides.forEach((slide: HTMLElement, index: number) => {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn?.addEventListener("click", () => {
  counter++;
  carousel();
});

prevBtn?.addEventListener("click", ()=> {
  counter--;
  carousel();
});

function carousel(): void {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    if(nextBtn != undefined)
    nextBtn.style.display = "block";
  } else {
    if(nextBtn != undefined)
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    if (prevBtn != undefined)
    prevBtn.style.display = "block";
  } else {
    if (prevBtn != undefined)
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
if (prevBtn != undefined)
prevBtn.style.display = "none";
export {}