let currentIndex = 0;

const desktopImages = document.querySelectorAll(".carousel-desktop");
const mobileImages = document.querySelectorAll(".carousel-mobile");

function showSlide(index) {
  desktopImages.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
  mobileImages.forEach((img, i) => {
    img.style.display = i === index ? "flex" : "none";
  });
}

document.getElementById("carousel-next")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % desktopImages.length;
  showSlide(currentIndex);
});

document.getElementById("carousel-prev")?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + desktopImages.length) % desktopImages.length;
  showSlide(currentIndex);
});

showSlide(currentIndex); 



// Play or Pause Toggle for images 
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");

playIcon?.addEventListener("click", () => {
  playIcon.classList.add("hidden");
  pauseIcon.classList.remove("hidden");
});

pauseIcon?.addEventListener("click", () => {
  pauseIcon.classList.add("hidden");
  playIcon.classList.remove("hidden");
});
