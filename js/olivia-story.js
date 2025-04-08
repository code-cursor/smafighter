let currentPage = 0;
const pages = document.querySelectorAll(".page");
const prevPageNum = document.getElementById("prevPageNum");
const nextPageNum = document.getElementById("nextPageNum");

function showPage(index) {
  pages.forEach((page, i) => {
    page.style.display = i === index ? "block" : "none";
  });

  // Update side numbers
  const prev = (index - 1 + pages.length) % pages.length;
  const next = (index + 1) % pages.length;

  prevPageNum.textContent = `Page ${prev + 1}`;
  nextPageNum.textContent = `Page ${next + 1}`;
}

function nextPage() {
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
}

function prevPage() {
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  showPage(currentPage);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => showPage(currentPage));
