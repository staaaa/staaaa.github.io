$(document).ready(function(){
    $(".m1").click(function() {
        $('html,body').animate({
            scrollTop: $(".t1").offset().top - 200},
            'slow');
    });
    $(".m2").click(function() {
        $('html,body').animate({
            scrollTop: $(".t2").offset().top - 180},
            'slow');
    });
    $(".m3").click(function() {
        $('html,body').animate({
            scrollTop: $(".t3").offset().top - 180},
            'slow');
    });
});