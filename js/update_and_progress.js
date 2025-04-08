// Set progress dynamically
document.addEventListener("DOMContentLoaded", () => {
  const progress = 35; // current progress in percent
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("progressText").textContent = progress + "%";
});

// Toggle doctor notes
function toggleNotes() {
  const notes = document.getElementById("doctorNotes");
  notes.classList.toggle("hidden");
}
