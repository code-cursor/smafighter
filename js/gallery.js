document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("videoSection");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.remove("opacity-0", "translate-y-6");
          section.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(section); // Run only once
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);
});

// photo gallery lazy loading
document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("photoSection");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.remove("opacity-0", "translate-y-6");
          section.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(section);
});

// photo viewer
<!-- others -->
const images = [
  "./src/images/photo1.png",
  "./src/images/photo2.png",
  "./src/images/photo3.png",
];

let currentIndex = 0;

function openImageViewer(src, index) {
  const viewer = document.getElementById('imageViewer');
  const viewerImage = document.getElementById('viewerImage');
  currentIndex = index;
  viewerImage.src = src;
  viewer.classList.remove('hidden');
}

function closeImageViewer() {
  const viewer = document.getElementById('imageViewer');
  viewer.classList.add('hidden');
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('viewerImage').src = images[currentIndex];
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('viewerImage').src = images[currentIndex];
}
