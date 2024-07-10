document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.querySelector('.product-container');
    const productDescription = document.querySelector('.product-description');

    productDescription.addEventListener('scroll', function() {
        if (productDescription.scrollHeight - productDescription.scrollTop <= productDescription.clientHeight) {
            productContainer.style.overflowY = 'scroll';
        } else {
            productContainer.style.overflowY = 'hidden';
        }
    });
});
