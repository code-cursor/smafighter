let currentIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", () => {
  images = Array.from(document.querySelectorAll(".zoomable"));

  // Re-assign index just in case they're missing or duplicated
  images.forEach((img, idx) => {
    img.dataset.index = idx;
  });
});

function openModal(imageElement) {
  currentIndex = parseInt(imageElement.dataset.index, 10);
  updateModalImage();
  document.getElementById("imageModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function updateModalImage() {
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentIndex].src;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateModalImage();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateModalImage();
}

// for keyboard support
document.addEventListener("keydown", function (e) {
  if (!document.getElementById("imageModal").classList.contains("hidden")) {
    if (e.key === "ArrowRight") showNextImage();
    if (e.key === "ArrowLeft") showPrevImage();
    if (e.key === "Escape") closeModal();
  }
});

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Download feature
function updateModalImage() {
  const modalImage = document.getElementById("modalImage");
  const downloadBtn = document.getElementById("downloadBtn");

  const src = images[currentIndex].src;
  modalImage.src = src;

  // Set the href and download filename
  downloadBtn.href = src;

  const filename =
    src.split("/").pop().split("?")[0] ||
    `prescription-${currentIndex + 1}.jpg`;

  downloadBtn.setAttribute("download", filename);
}
