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
function addFontFamilyStyle() {
    // Create a new style element
    const style = document.createElement('style');

    // Set the inner CSS rule
    style.innerHTML = `
        * {
            font-family: 'Noto Sans', sans-serif;
        }
    `;

    // Append the style element to the head of the document
    document.head.appendChild(style);
}

// Call the function to apply the style
addFontFamilyStyle();



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

// 

class Tooltip {
    constructor(buttonSelector, tooltipSelector) {
        this.buttons = document.querySelectorAll(buttonSelector);
        this.tooltips = document.querySelectorAll(tooltipSelector);
        this.hideTimeout = null; // Track timeout for hiding
        this.init();
    }

    init() {
        this.buttons.forEach((button, index) => {
            const tooltip = this.tooltips[index]; // Get corresponding tooltip by index

            if (button && tooltip) {
                button.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent event from bubbling up
                    this.toggleTooltip(tooltip);
                });

                // Add click event to document to hide tooltip on outside click
                document.addEventListener('click', (event) => {
                    if (!button.contains(event.target) && !tooltip.contains(event.target)) {
                        this.hideTooltip(tooltip);
                    }
                });
            }
        });
    }

    toggleTooltip(tooltip) {
        const isVisible = tooltip.classList.contains('visible');

        // Toggle visibility
        if (isVisible) {
            this.hideTooltip(tooltip);
        } else {
            this.showTooltip(tooltip);
        }
    }

    showTooltip(tooltip) {
        clearTimeout(this.hideTimeout); // Prevent hiding if quickly clicking
        tooltip.classList.add('visible');

        // Create and append close button
        this.createCloseButton(tooltip);
    }

    hideTooltip(tooltip) {
        this.hideTimeout = setTimeout(() => {
            tooltip.classList.remove('visible');

            // Remove close button after hiding tooltip
            const closeButton = tooltip.querySelector('.tooltip__close-btn');
            if (closeButton) {
                closeButton.remove();
            }
        }, 100); // Short delay to prevent flashing
    }

    createCloseButton(tooltip) {
        // Check if the close button already exists
        if (!tooltip.querySelector('.tooltip__close-btn')) {
            // Create a span to wrap the button
            const buttonWrapper = document.createElement('span');
            buttonWrapper.style.display = 'flex';
            buttonWrapper.style.justifyContent = 'flex-end'; // Align the close button to the right
            buttonWrapper.style.width = '100%'; // Take full width

            const closeButton = document.createElement('button');
            closeButton.type = 'button';
            closeButton.className = 'tooltip__close-btn';

            // Create the SVG element for the close icon
            const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="white" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/>
    </svg>
    `;

            // Set the close button's inner HTML to include the SVG
            closeButton.innerHTML = `${svgIcon}`;

            // Optional: Add CSS styles to the button
            closeButton.style.display = 'flex';
            closeButton.style.alignItems = 'center';
            closeButton.style.background = 'none'; // Remove background
            closeButton.style.border = 'none'; // Remove border
            closeButton.style.cursor = 'pointer'; // Change cursor to pointer
            closeButton.style.padding = '0'; // Remove padding

            // Add click event listener to the close button
            closeButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent event from bubbling up
                this.hideTooltip(tooltip);
            });

            // Append the close button to the wrapper
            buttonWrapper.appendChild(closeButton);

            // Append the button wrapper to the tooltip
            tooltip.prepend(buttonWrapper);
        }
    }

}







// Initialize the tooltip
try {
    new Tooltip('.tooltip__triggerx', '.tooltip__bodyx');
} catch (error) {

}

// 


// Select all elements with the class 'feature-row__content-wrapper'
const contentWrappers = document.querySelectorAll('.feature-row__content-wrapper');

// Loop through each wrapper and apply Tailwind CSS classes for flexbox centering
contentWrappers.forEach(wrapper => {
    wrapper.classList.add('flex', 'justify-center', 'items-center');
    // wrapper.style.height = '100vh'; // Set to full viewport height
    wrapper.style.backgroundColor = '#ffffff'; // Optional: Add a background color for visibility
});

// 


try {
    // Define the arrays for pricing
    const arrayA = ['₫99,000', '₫199,000', '₫399,000', '₫699,000']; // Example prices for array A
    const arrayB = ['₫139,000', '₫288,000', '₫588,000', '₫888,000']; // Example prices for array B

    let currentIndex = 0; // To keep track of the current index in the arrays
    let isArrayAActive = true; // Track which array is currently active

    // Function to set pricing from the active array
    function setPricing() {
        const priceSpans = document.querySelectorAll('.plan-price span:first-child'); // Select the first span
        // console.log(priceSpans)
        priceSpans.forEach(span => {
            span.innerText = isArrayAActive ? arrayA[currentIndex] : arrayB[currentIndex]; // Set the text from the active array
            currentIndex++;
        });
        currentIndex = 0; // Reset index after updating prices
    }

    // Event listener for the toggle switch
    document.getElementById('switch').addEventListener('change', function () {
        isArrayAActive = !this.checked; // Check if the switch is on (monthly payment)
        setPricing(); // Update pricing based on the active array
    });

    document.getElementById('iw3w5z').addEventListener('click', function () {
        // console.log("aaa")
        isArrayAActive = false;
        setPricing(); // Update pricing based on the active array
    });
    document.getElementById('iud7li').addEventListener('click', function () {
        // console.log("aaa")
        isArrayAActive = true;
        setPricing(); // Update pricing based on the active array
    });

    // Initial setting of pricing from array A
    setPricing();
    document.addEventListener("DOMContentLoaded", () => {
        const annualOption = document.getElementById("iud7li");
        const monthlyOption = document.getElementById("iw3w5z");

        // Function to handle style change
        const toggleStyles = (selected) => {
            if (selected === 'annual') {

            } else {

            }
        };

        // Event listeners for click events
        annualOption.addEventListener("click", () => toggleStyles('annual'));
        monthlyOption.addEventListener("click", () => toggleStyles('monthly'));
    });



} catch (error) {
    console.error(error); // Log any errors to the console
}


try {
    const menuToggle = document.getElementById("menu-toggle");
    const fullscreenMenu =
        document.getElementById("fullscreen-menu");
    let isMenuOpen = false;

    menuToggle.addEventListener("click", () => {
        isMenuOpen = !isMenuOpen;
        menuToggle.setAttribute("aria-expanded", isMenuOpen);
        fullscreenMenu.classList.toggle("opacity-0");
        fullscreenMenu.classList.toggle("pointer-events-none");
        document.body.classList.toggle("ow-menu-open");

        if (isMenuOpen) {
            menuToggle.innerHTML = `
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  `;
            menuToggle.classList.add("text-white");
        } else {
            menuToggle.innerHTML = `
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  `;
            menuToggle.classList.remove("text-white");
        }
    });

    const accordionToggles = document.querySelectorAll(
        ".ow-accordion-toggle"
    );
    accordionToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const content = toggle.nextElementSibling;
            content.classList.toggle("active");
            toggle.classList.toggle("active");

            // Close other open accordions
            accordionToggles.forEach((otherToggle) => {
                if (otherToggle !== toggle) {
                    otherToggle.nextElementSibling.classList.remove(
                        "active"
                    );
                    otherToggle.classList.remove("active");
                }
            });
        });
    });
} catch (e) { }

function toggleContentX(svgX, contentX) {
    const content = document.getElementById(svgX);
    const button = document.getElementById(contentX);
    content.classList.toggle('hidden');
    button.classList.toggle('rotate-180');
}

function toggleContent() {
    const content = document.getElementById('izfxbyi');
    const button = document.getElementById('ow-icon');
    content.classList.toggle('hidden');
    button.classList.toggle('rotate-180');
}

window.toggleContent = toggleContent
window.toggleContentX = toggleContentX

// Select elements that typically contain text
const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, blockquote, span, a');

// Iterate over each selected element and print its text content
textElements.forEach(element => {
    console.log(element.textContent.trim()); // trim() removes extra whitespace
});
