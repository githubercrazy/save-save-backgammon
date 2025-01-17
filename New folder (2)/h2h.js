document.addEventListener("DOMContentLoaded", function () {
  const toggleIcons = document.querySelectorAll(".toggle-icon"); // Target the icons

  toggleIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const playerTable = icon.closest(".menu-player-table");
      const menu = playerTable.querySelector(".menu");

      if (!menu) {
        console.error("No .menu found for this icon!");
        return;
      }

      // Toggle the visibility of the menu
      const isHidden = menu.classList.contains("hidden");

      if (isHidden) {
        menu.classList.remove("hidden");
        icon.textContent = "expand_less"; // Change the icon to "expand_less" when showing info
      } else {
        menu.classList.add("hidden");
        icon.textContent = "expand_more"; // Change the icon to "expand_more" when hiding info
      }
    });
  });
});
