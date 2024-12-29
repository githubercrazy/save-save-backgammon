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
    loginPopup.style.display = "flex";
  });

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

  // Event listener for dropdown buttons in signup popup
  signupPopup.addEventListener("click", function (event) {
    // Handle dropdown button clicks
    if (event.target.classList.contains("dropdown-btn")) {
      const dropdownContent = event.target.nextElementSibling;
      const dropdownBtn = event.target;

      // Toggle dropdown visibility and button text
      if (dropdownContent.style.display === "flex") {
        dropdownContent.style.display = "none";
        dropdownBtn.textContent = "Open"; // Change text back to "Open"
      } else {
        dropdownContent.style.display = "flex";
        dropdownBtn.textContent = "Close"; // Change text to "Closed"
      }
    }
  });

  // Function to handle clicking on list items to show dropdown content
  function handleListItemClick(li) {
    const itemTitle = li.firstChild.textContent.trim();
    const dropdownContent = li.querySelector(".dropdown-content");

    if (dropdownContent) {
      const formContent = dropdownContent.innerHTML;

      // Update the popup content dynamically with the selected item’s content
      const popupContent = document.querySelector(".signup-popup .popup-content");
      popupContent.innerHTML = ` 
        <h2>${itemTitle}</h2> 
        ${formContent} 
        <button class="close-popup">Close</button> 
      `;

      // Attach event listeners for the close button
      const closeBtn = popupContent.querySelector(".close-popup");
      if (closeBtn) {
        closeBtn.addEventListener("click", closePopups);
      }

      // Ensure the dropdown buttons still work after content update
      attachDropdownListeners();

      // Display the updated popup
      signupPopup.style.display = "block";
    } else {
      console.error("Dropdown content not found for this list item.");
    }
  }

  // Attach event listeners to all dropdown buttons
  function attachDropdownListeners() {
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");
    dropdownBtns.forEach((button) => {
      button.addEventListener("click", function () {
        const dropdownContent = button.nextElementSibling;
        const dropdownBtn = button;

        dropdownContent.style.display =
          dropdownContent.style.display === "block" ? "none" : "block";

        // Toggle the button text between "Open" and "Closed"
        dropdownBtn.textContent =
          dropdownContent.style.display === "block" ? "Closed" : "Open";
      });
    });
  }

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
