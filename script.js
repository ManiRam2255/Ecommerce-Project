var MenuItems = document.getElementById("MenuItems");

    // Initialize the menu's max height to auto for larger screens
    if (window.innerWidth > 800) {
        MenuItems.style.maxHeight = "none";
    } else {
        MenuItems.style.maxHeight = "0px";
    }

    // Smooth transition effect
    MenuItems.style.overflow = "hidden";
    MenuItems.style.transition = "max-height 0.5s ease-out";

    function menutoggle() {
        if (window.innerWidth <= 800) {
            // Check the current max-height value to determine the new state
            if (MenuItems.style.maxHeight === "0px" || MenuItems.style.maxHeight === "") {
                // Expand the menu to fit all content
                MenuItems.style.maxHeight = MenuItems.scrollHeight + "px";
            } else {
                // Collapse the menu
                MenuItems.style.maxHeight = "0px";
            }
        }
    }

    // Adjust menu visibility based on viewport width on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 800) {
            MenuItems.style.maxHeight = "none"; // Show full menu on larger screens
        } else {
            MenuItems.style.maxHeight = "0px"; // Hide menu by default on smaller screens
        }
    });