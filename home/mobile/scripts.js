// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Home page (desktop version) loaded');

    // Example: Add a click event listener to the h1 element
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.addEventListener('click', () => {
            alert('Welcome to our website!');
        });
    }

    // Example: Dynamically add content
    const main = document.querySelector('main');
    if (main) {
        const newSection = document.createElement('section');
        newSection.innerHTML = `
            <h3>Dynamic Content</h3>
            <p>This content was added dynamically using JavaScript.</p>
        `;
        main.appendChild(newSection);
    }

    // You can add more JavaScript functionality here
});

