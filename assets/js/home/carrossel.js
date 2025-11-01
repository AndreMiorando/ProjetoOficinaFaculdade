document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel__image');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    document.querySelector('.carousel__button--next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    document.querySelector('.carousel__button--prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    setInterval(function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }, 3000); 
});