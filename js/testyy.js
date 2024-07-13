<script>
    document.addEventListener('DOMContentLoaded', function () {
        const pointer = document.querySelector('.fa-arrow-pointer');
        const cart = document.querySelector('.fa-cart-shopping');

        function startPointerAnimation() {
            pointer.style.animation = 'arrow 1.3s linear infinite';
            pointer.style.animationPlayState = 'running';
        }

        function startCartAnimation() {
            cart.style.animation = 'cart1 .3s .9s linear';
            cart.style.animationPlayState = 'running';
        }

        // 監聽滑鼠進入事件
        document.addEventListener('mouseover', function () {
            pointer.style.animationPlayState = 'running';
            cart.style.animationPlayState = 'paused';
        });

        // 監聽滑鼠移出事件
        document.addEventListener('mouseout', function () {
            pointer.style.animationPlayState = 'paused';
            cart.style.animationPlayState = 'running';
        });

        // 監聽滑鼠動畫結束事件
        pointer.addEventListener('animationend', function () {
            pointer.style.animationPlayState = 'paused'; // 暫停滑鼠動畫
            startCartAnimation(); // 開始購物車動畫
        });

        // 監聽購物車動畫結束事件
        cart.addEventListener('animationend', function () {
            cart.style.animationPlayState = 'paused'; // 暫停購物車動畫
            startPointerAnimation(); // 重新開始滑鼠動畫
        });

        startPointerAnimation(); // 初始狀態開始滑鼠動畫
    });
</script>
