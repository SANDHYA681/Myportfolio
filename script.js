// Toggle dark mode
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Toggle section visibility
function toggleSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.style.display = section.id === id ? "block" : "none";
  });
}
