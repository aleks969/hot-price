import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const hotPrices = document.querySelectorAll(".hot");
  hotPrices.forEach((p) => {
    p.textContent = p.textContent + "🔥";
  });
});
