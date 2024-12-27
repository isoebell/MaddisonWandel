// Function to toggle the dropdown for the exhibitions infoText
document.addEventListener('DOMContentLoaded', () => {
    // Select the Exhibitions title and the corresponding infoText
    const exhibitionsTitle = document.querySelector('.navigation .title');
    const infoText = exhibitionsTitle.nextElementSibling; // The infoText is the next sibling

    // Check if both elements exist
    if (exhibitionsTitle && infoText) {
        exhibitionsTitle.addEventListener('click', () => {
            // Toggle the 'show' class to reveal/hide the infoText
            infoText.classList.toggle('show');
        });
    }
});
