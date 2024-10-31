// Function to remove all font-family styles
function removeAllFonts() {
    // Get all elements in the document
    const allElements = document.querySelectorAll("*");

    // Iterate over each element and remove the font-family style
    allElements.forEach((element) => {
        element.style.fontFamily = "";
    });
}

// Function to set Noto Sans font for all elements
function setNotoFont() {
    // Get all elements in the document
    const allElements = document.querySelectorAll("*");

    // Set Noto Sans as the font-family for all elements
    allElements.forEach((element) => {
        element.style.fontFamily = "'Noto Sans', sans-serif";
    });
}
removeAllFonts();
setNotoFont();


//   

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("custom-button");

    // Apply base styles
    button.style.backgroundColor = "white";
    button.style.color = "black";
    button.style.border = "2px solid black";
    button.style.borderRadius = "0.5rem"; // Maintain rounded corners

    // Add hover effect with JavaScript
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "black";
        button.style.color = "white";
        button.style.border = "2px solid white"; // White border on hover
    });

    button.addEventListener("mouseout", function () {
        // Revert to the original styles
        button.style.backgroundColor = "white";
        button.style.color = "black";
        button.style.border = "2px solid black"; // Black border after hover
    });
});

//   

try {
    // Get references to the elements
    const resourcesx_element =
        document.getElementById("resourcesx_button");
    const resourcesx_menu = document.getElementById("resourcesx_menu");
    const productsx_element =
        document.getElementById("productsx_button");
    const menux = document.getElementById("menux_products_data");

    // Check if elements exist before proceeding
    if (
        resourcesx_element &&
        resourcesx_menu &&
        productsx_element &&
        menux
    ) {
        resourcesx_menu.style.display = "none";
        menux.style.display = "none";

        // Optional: Toggle visibility of resourcesx_menu on click and hide menux
        resourcesx_element.addEventListener("click", function () {
            if (resourcesx_menu.style.display === "block") {
                resourcesx_menu.style.display = "none";
            } else {
                resourcesx_menu.style.display = "block";
                menux.style.display = "none"; // Hide menux when resourcesx_menu is opened
            }
        });

        // Optional: Toggle visibility of menux on click and hide resourcesx_menu
        productsx_element.addEventListener("click", function () {
            if (menux.style.display === "flex") {
                menux.style.display = "none";
            } else {
                menux.style.display = "flex";
                resourcesx_menu.style.display = "none"; // Hide resourcesx_menu when menux is opened
            }
        });
    }
} catch (error) {
    console.error(
        "An error occurred while setting up the menus:",
        error
    );
}



//   

try {
    // Select all menu items and images
    const menuItems =
        document.querySelectorAll("[data-menu-item]");
    const images = document.querySelectorAll(
        "[data-menu-image].mainImage"
    );

    // Function to hide all images
    const hideAllImages = () => {
        images.forEach((image) => {
            image.style.display = "none";
        });
    };

    // Function to remove underline and arrow icon from all menu items
    const resetMenuItems = () => {
        menuItems.forEach((item) => {
            item.classList.remove("underline");
            item.querySelector(".arrow-icon").style.display =
                "none";
        });
    };

    // Function to display the selected image and update menu style
    const showImage = (index) => {
        hideAllImages();
        resetMenuItems();
        images[index].style.display = "block";
        menuItems[index].classList.add("underline");
        menuItems[index].querySelector(
            ".arrow-icon"
        ).style.display = "inline-block";
    };

    // Initially show the first image and style
    showImage(0);

    // Add click and hover events to menu items
    menuItems.forEach((item, index) => {
        // Click event
        item.addEventListener("click", () => {
            showImage(index);
        });

        // Hover event
        item.addEventListener("mouseenter", () => {
            showImage(index);
        });
    });
} catch (e) { }



class CarouselDesktop {
    constructor() {
        this.currentIndex = 0;
        this.totalSlides = 3;
        this.carousel = document.querySelector('[data-ow-carousel]');
        this.indicators = document.querySelectorAll('[data-ow-indicator]');

        this.init();
    }

    init() {
        // Add event listeners
        document.querySelector('[data-ow-prev]').addEventListener('click', () => this.move(-1));
        document.querySelector('[data-ow-next]').addEventListener('click', () => this.move(1));

        // Initial update
        this.updateCarousel();
    }

    move(direction) {
        this.currentIndex = (this.currentIndex + direction + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }

    updateCarousel() {
        this.carousel.style.transform = `translateX(-${this.currentIndex * 50}%)`;

        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('bg-gray-800', Math.floor(this.currentIndex / 2) === index);
        });
    }
}

// Initialize carousel when DOM is loaded
try {
    new CarouselDesktop();
} catch (error) {
    console.error('Carousel initialization failed:', error);
}


document
    .querySelectorAll(".accordion-trigger")
    .forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const content = trigger.nextElementSibling;
            const icon =
                trigger.querySelector(".accordion-icon");

            // Toggle visibility of the content
            content.classList.toggle("hidden");

            // Change icon + to -
            if (content.classList.contains("hidden")) {
                icon.textContent = "+";
            } else {
                icon.textContent = "-";
            }
        });
    });


// Function to find the highest z-index in the document
function findHighestZIndex() {
    let elements = document.getElementsByTagName("*");
    let highest = 0;

    for (let i = 0; i < elements.length; i++) {
        let zIndex = parseInt(
            window.getComputedStyle(elements[i]).zIndex
        );
        if (zIndex > highest && !isNaN(zIndex)) {
            highest = zIndex;
        }
    }
    return highest;
}
try {
    const toggleButton =
        document.querySelector("[data-chat-toggle]");
    const chatWindow =
        document.querySelector("[data-chat-window]");
    const chatContainer = toggleButton.parentElement;

    // Set z-index for the chat container
    const highestZIndex = findHighestZIndex();
    chatContainer.style.zIndex = highestZIndex + 1;

    // Toggle functionality
    toggleButton.addEventListener("click", function () {
        if (chatWindow.style.transform === "scale(1)") {
            chatWindow.style.transform = "scale(0)";
            chatWindow.style.opacity = "0";
        } else {
            chatWindow.style.transform = "scale(1)";
            chatWindow.style.opacity = "1";

            // Recheck z-index when opening to ensure it's still on top
            const currentHighestZIndex = findHighestZIndex();
            chatContainer.style.zIndex = currentHighestZIndex + 1;
        }
    });

    // Optional: Recheck z-index when new elements are added to the DOM
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                const currentHighestZIndex = findHighestZIndex();
                chatContainer.style.zIndex = currentHighestZIndex + 1;
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
} catch (error) { }

