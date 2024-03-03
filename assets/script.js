const sliderImages = document.querySelectorAll(".slider img");

let currentIndex = 0;

function changeImage() {
  sliderImages.forEach((image) => {
    image.style.display = "none";
  });

  sliderImages[currentIndex].style.display = "block";

  currentIndex++;

  if (currentIndex >= sliderImages.length) {
    currentIndex = 0;
  }
}

setInterval(changeImage, 3000);

document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('active');
});
