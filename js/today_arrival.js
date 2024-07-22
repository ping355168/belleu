$(document).ready(function() {
    function updateCountdown() {
        var now = new Date();
        var target = new Date();
        target.setHours(21, 0, 0, 0); // 設置目標時間為今天的21:00:00

        if (now > target) {
            target.setDate(target.getDate() + 1); // 如果當前時間已經過了21:00，設置目標時間為明天的21:00
        }

        var diff = target - now;

        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        $('#hours').text(hours.toString().padStart(2, '0'));
        $('#minutes').text(minutes.toString().padStart(2, '0'));
        $('#seconds').text(seconds.toString().padStart(2, '0'));
    }

    // 初始化倒數計時
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
