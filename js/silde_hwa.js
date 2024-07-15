let slideWidth = $('.slide').width()  
let slideIndex = 0
let prevIndex
let nextIndex
let slideCount = $('.slide').length 
let autoTime = 5000


function slideToTheNext(){
  {
    slideWidth = $(window).width()
    $('#next-btn').prop('disabled', true);
    $('#prev-btn').prop('disabled', true);
  
      if(slideIndex < (slideCount - 1) ){
        nextIndex = slideIndex + 1
      }else if (slideIndex == (slideCount - 1) ){
        nextIndex = 0
      }else{
        slideIndex = 0
        nextIndex = slideIndex + 1
      }
  
      $('.slideImg').eq(slideIndex).addClass('nonono')
    $('.slide').eq(slideIndex).css({'position': 'relative',left:0,zIndex:3})
    $('.slide').not($('.slide').eq(slideIndex)).css({'position': 'absolute',left:slideWidth + 'px',zIndex:2})

    $('.slide').eq(nextIndex).css({left:$(window).width() + 'px',zIndex:4})
    $('.slide').eq(nextIndex).animate({left: 0},"slow", function() {
      $('.slide').eq(slideIndex).css({'position': 'absolute'})
      $('.slideImg').eq(slideIndex).removeClass('nonono')
      $('.slide').eq(nextIndex).css({'position': 'relative',zIndex:2}) 
      $('.slide').eq(slideIndex).css({'position': 'absolute',left:slideWidth,zIndex:(slideCount - slideIndex)})
      slideIndex += 1;
  
      $('#next-btn').prop('disabled', false);
      $('#prev-btn').prop('disabled', false);
      resetAutoSlide();
    })
    }
}
  function slideToThePrev(){
    $('#next-btn').prop('disabled', true);
    $('#prev-btn').prop('disabled', true);
  
    if(slideIndex == 0 ){
      prevIndex = slideCount - 1;
      $('.slide').eq(slideIndex).css({zIndex:3})
    }else if(slideIndex < 0 ){
      slideIndex = slideCount - 1
      prevIndex = slideIndex - 1;
    }else{
      prevIndex = slideIndex - 1
    }
    $('.slideImg').eq(slideIndex).addClass('nonono')
    
    $('.slide').eq(slideIndex).css({'position': 'relative',left:0})
    $('.slide').not($('.slide').eq(slideIndex)).css({'position': 'absolute',left:-slideWidth,zIndex:3})
    $('.slide').eq(prevIndex).css({'position': 'absolute',left:-slideWidth,zIndex:(8-prevIndex)})
    $('.slide').eq(prevIndex).animate({left:0,},"slow", function() {
      $('.slide').eq(slideIndex).css({'position': 'absolute',left:-slideWidth})
      $('.slideImg').eq(slideIndex).removeClass('nonono')
      $('.slide').eq(prevIndex).css({'position': 'relative'}) 
      slideIndex -= 1;
  
      $('#next-btn').prop('disabled', false);
      $('#prev-btn').prop('disabled', false);
      resetAutoSlide();
    })
    }

  let TimeTravel
  function autoSlide(){
    TimeTravel = setInterval(slideToTheNext,autoTime)

  }
  function StopAutoSlide(){
    clearInterval(TimeTravel)
  }

  function resetAutoSlide() {
    StopAutoSlide();
    autoSlide();
  }

  autoSlide();

  $('#prev-btn').click(function() {
    StopAutoSlide();
    slideToThePrev();
  })

  $('#next-btn').click(function(){
    StopAutoSlide();
    slideToTheNext()
  })