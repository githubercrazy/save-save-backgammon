document.addEventListener("DOMContentLoaded", function () {
    // Get elements for the login and signup popups
    const loginPopup = document.getElementById("loginPopup");
    const signupPopup = document.getElementById("signupPopup");
    const loginBtn = document.querySelector(".login-btn");
    const signupBtn = document.querySelector(".signup-btn");
    const closeButtons = document.querySelectorAll(".close-popup");
  
    // Event listener for login button
    loginBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission
      loginPopup.style.display = "block";
      addCloseListener(loginPopup); // Add close listener
    });
  
    // Event listener for signup button
    signupBtn.addEventListener("click", function () {
      signupPopup.style.display = "block";
      addCloseListener(signupPopup); // Add close listener
    });
  
    // Function to close all popups
    function closePopups() {
      loginPopup.style.display = "none";
      signupPopup.style.display = "none";
    }
  
    // Function to add close button listeners for popups
    function addCloseListener(popup) {
      const closeBtn = popup.querySelector(".close-popup");
      if (closeBtn) {
        closeBtn.addEventListener("click", closePopups);
      }
    }
  
    // Event listener for signup popup interactions
    signupPopup.addEventListener("click", function (event) {
      // Handle dropdown button clicks
      if (event.target.classList.contains("dropdown-btn")) {
        const dropdownContent = event.target.nextElementSibling;
        dropdownContent.style.display =
          dropdownContent.style.display === "block" ? "none" : "block";
      }
  
      // Handle Back button clicks
      if (event.target.classList.contains("back-btn")) {
        const dropdownContent = event.target.closest(".dropdown-content");
        dropdownContent.style.display = "none"; // Hide the current dropdown
      }
    });
  
    // Function to handle list item click (showing dropdown)
    const listItems = document.querySelectorAll("li");
    listItems.forEach((li) => {
      const dropdownBtn = li.querySelector(".dropdown-btn");
      dropdownBtn.addEventListener("click", function () {
        // First, hide any open dropdowns
        const openDropdowns = document.querySelectorAll(".dropdown-content");
        openDropdowns.forEach((dropdown) => {
          if (dropdown !== li.querySelector(".dropdown-content")) {
            dropdown.style.display = "none"; // Close any other open dropdown
          }
        });
  
        // Toggle the current dropdown
        const dropdownContent = li.querySelector(".dropdown-content");
        dropdownContent.style.display =
          dropdownContent.style.display === "block" ? "none" : "block";
      });
    });
  });
  