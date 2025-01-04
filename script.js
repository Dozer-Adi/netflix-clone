const scrollContentElement = document.getElementById('scroll-content');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

// Function to scroll content
function scrollContent(amount) {
    scrollContentElement.scrollBy({ left: amount, behavior: 'smooth' });
    updateScrollButtons();
}

// Function to update button visibility
function updateScrollButtons() {
    const maxScrollLeft = scrollContentElement.scrollWidth - scrollContentElement.clientWidth;

    // Show or hide left button
    if (scrollContentElement.scrollLeft > 0) {
        scrollLeftButton.style.display = 'block';
    } else {
        scrollLeftButton.style.display = 'none';
    }

    // Show or hide right button
    if (scrollContentElement.scrollLeft < maxScrollLeft) {
        scrollRightButton.style.display = 'block';
    } else {
        scrollRightButton.style.display = 'none';
    }
}

// Initial button visibility update
updateScrollButtons();

// Add scroll event listener to update buttons on scroll
scrollContentElement.addEventListener('scroll', updateScrollButtons);

document.addEventListener('DOMContentLoaded', function() {
    const faqHeadings = document.querySelectorAll('.faq-heading');

    faqHeadings.forEach(heading => {
        heading.addEventListener('click', function() {
            const faqPara = this.nextElementSibling;
            faqPara.classList.toggle('show');

            const plusIcon = this.querySelector('.plus');
            if (plusIcon) {
                plusIcon.classList.toggle('rotate');
            }
        });
    });
});
