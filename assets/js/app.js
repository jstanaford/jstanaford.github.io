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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('slider-prev').addEventListener('click', () => {
        current = (current - 1 + sliderData.length) % sliderData.length;
        updateSlider();
    });
    document.getElementById('slider-next').addEventListener('click', () => {
        current = (current + 1) % sliderData.length;
        updateSlider();
    });
    updateSlider();
});
