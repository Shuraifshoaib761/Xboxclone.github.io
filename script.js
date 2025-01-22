const slider = document.getElementById('slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const pagination = document.getElementById('pagination');
let currentIndex = 0; // Start with the first banner
const totalSlides = slider.children.length; // Total number of banners

// Create pagination dots dynamically
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active'); // First dot is active initially
    dot.setAttribute('data-index', i);
    pagination.appendChild(dot);
}

// Handle "Next" button click
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Move to next slide
    updateSlider();
});

// Handle "Previous" button click
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to previous slide
    updateSlider();
});

// Handle click on pagination dots
pagination.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateSlider();
    }
});

// Update slider and pagination dots
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePagination();
}

// Update active dot
function updatePagination() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}






const carousel = document.getElementById('carousel');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const gap = 20; // The gap between the items
let itemWidth = 0;

// Function to update item width dynamically, in case of responsive layouts
function updateItemWidth() {
    itemWidth = carousel.querySelector('.carousel-item').offsetWidth + gap;
}

function scrollCarousel(direction) {
    // Update item width in case it changes
    updateItemWidth();

    const visibleItems = Math.floor(carouselWrapper.offsetWidth / itemWidth); // Calculate the number of visible items
    const scrollAmount = direction * itemWidth * visibleItems; // Scroll by visible items
    carousel.scrollLeft += scrollAmount;
}

// Call this function on page load or window resize to ensure proper calculation
window.addEventListener('resize', updateItemWidth);


function showTab(tabNumber) {
    // Hide all tab contents
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Deactivate all buttons
    const buttons = document.querySelectorAll('.tab-buttons button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show the selected tab content
    document.getElementById(`tab-${tabNumber}`).classList.add('active');

    // Activate the corresponding button
    buttons[tabNumber - 1].classList.add('active');
}



window.addEventListener('load', function () {
    const gridItems = document.querySelectorAll('.grid-items');
    gridItems.forEach(item => {
        item.classList.add('visible');
    });
});


// function toggleSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     if (sidebar.style.transform === "translateX(250px)") {
//         sidebar.style.transform = "translateX(0)";
//     } else {
//         sidebar.style.transform = "translateX(250px)";
//     }
// }
