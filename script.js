document.documentElement.classList.add("js");

const body = document.body;
const menuToggle = document.querySelector("[data-menu-toggle]");

const closeMenu = () => {
  body.classList.remove("nav-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
};

menuToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelectorAll("[data-menu] a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => event.key === "Escape" && closeMenu());
document.querySelector("[data-year]").textContent = new Date().getFullYear();