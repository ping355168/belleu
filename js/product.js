$(document).ready(function(){
    let currentIndex = 0;
    const images = $('.carousel img');
    const imageCount = images.length;

    function showNextImage() {
        images.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % imageCount;
        images.eq(currentIndex).addClass('active');
    }

    images.eq(currentIndex).addClass('active');

    setInterval(showNextImage, 3000);
});