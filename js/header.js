$(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});


$(document).ready(function() {
    $('#barlogo').click(function() {
        $('.barmenu').css('display', 'block').animate({
            left: '-800px'
        }, 200); 
    });

    $('#delete').click(function() {
        $('.barmenu').animate({
            left: '100px'
        }, 200); 
    });
});



