(function () {
    const toggleButton = document.getElementById("darkModeToggle");
  
    // Function to toggle the dark mode class on the body
    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
  
      // Save the current mode in localStorage
      const isDarkMode = document.body.classList.contains("dark-mode");
      localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    }
  
    // Load the saved theme from localStorage on page load
    window.addEventListener("DOMContentLoaded", () => {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "enabled") {
        document.body.classList.add("dark-mode");
      }
    });
  
    // Add event listener to the toggle button
    toggleButton.addEventListener("click", toggleDarkMode);
  })();
  