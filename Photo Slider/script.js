let mainImg = document.getElementsByClassName("mainImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function setImages(count) {
  mainImg[0].src = `https://picsum.photos/id/${count - 1}/1000/500`;
}

var count = Math.floor(Math.random() * 100);
setImages(count);

prevBtn.addEventListener("click", () => {
  count--;
  setImages(count);
});

nextBtn.addEventListener("click", () => {
  count++;
  setImages(count);
});
