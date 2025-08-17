document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("hamburger-toggle");
  const links = document.getElementById("myLinks");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.style.display = links.style.display === "block" ? "none" : "block";
    });
  }
});
