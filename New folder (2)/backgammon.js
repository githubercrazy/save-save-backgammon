document.addEventListener("DOMContentLoaded", function () {
  // Get elements for the login and signup popups
  const loginPopup = document.getElementById("loginPopup");
  const signupPopup = document.getElementById("signupPopup");
  const loginBtn = document.querySelector(".login-btn");
  const signupBtn = document.querySelector(".signup-btn");
  const closeButtons = document.querySelectorAll(".close-popup");


  // Event listener for signup button
  signupBtn.addEventListener("click", function () {
    signupPopup.style.display = "flex";
  });

  // Function to close all popups
  function closePopups() {
    loginPopup.style.display = "none";
    signupPopup.style.display = "none";
  }

  // Event delegation for close buttons
  closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      closePopups();
    });
  });

  // Event listener for list items (open dropdown content)
  const listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    const dropdownBtn = li.querySelector(".dropdown-btn");
    if (dropdownBtn) {
      dropdownBtn.addEventListener("click", function () {
        handleListItemClick(li);
      });
    }
  });
});
