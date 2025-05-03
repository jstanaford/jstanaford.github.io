const sliderData = [
    { src: "img/bash_logo.jpg", alt: "Bash" },
    { src: "img/machine_learning.jpg", alt: "Machine Learning" },
    { src: "img/mysql_logo.png", alt: "MySQL" },
    { src: "img/php-logo-ADE513E748-seeklogo.com.png", alt: "PHP" },
    { src: "img/linux_logo.webp", alt: "Linux" },
    { src: "img/Linear_alg.png", alt: "Linear Algebra" },
    { src: "img/Typescript_logo.png", alt: "Typescript" },
    { src: "img/Image7.png", alt: "C#" },
    { src: "img/Image8.png", alt: "Python" }
];

let current = 0;

function updateSlider() {
    const img = document.getElementById('slider-image');
    const caption = document.getElementById('slider-caption');
    img.src = sliderData[current].src;
    img.alt = sliderData[current].alt;
    caption.textContent = sliderData[current].alt;
}

// Mobile Menu Functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const isHidden = mobileMenu.classList.contains('hidden');
    
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close mobile menu when clicking a link
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    // Slider functionality
    document.getElementById('slider-prev').addEventListener('click', () => {
        current = (current - 1 + sliderData.length) % sliderData.length;
        updateSlider();
    });
    document.getElementById('slider-next').addEventListener('click', () => {
        current = (current + 1) % sliderData.length;
        updateSlider();
    });
    updateSlider();

    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking links
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});
