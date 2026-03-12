document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      if (link.dataset.nav === page) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
});
