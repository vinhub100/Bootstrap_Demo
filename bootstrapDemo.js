$(document).ready(function(){
    marTop = $('.bdScroll').scrollTop();
    $('.bdScroll').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta  > 0) {
            marTop = marTop + 40;
            $(this).css('margin-top',marTop);
        }
        else{
            marTop = marTop - 40;
            $(this).css('margin-top',marTop);
        }
        e.preventDefault();
//        e.stopPropagation();
    });
});


// var nearToBottom = 100;
//
// if ($(window).scrollTop() + $(window).height() > $(document).height() - nearToBottom) { 
//   .. my ajax here 
// }  




// if ($(window).scrollTop() + $(window).height() >= $('.CONTAINER').offset().top + $('.CONTAINER').height() ) { 
// .. my ajax here 
// } 

