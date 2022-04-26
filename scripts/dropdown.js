$(document).ready(function(){
    var isMenuVisible = false;
    $(".fa-bars").click(function(){
        if(!isMenuVisible){
            $(".dropdown-content").css("display","flex");
            isMenuVisible = true;
        }
        else{
            $(".dropdown-content").css("display","none");
            isMenuVisible = false;
        }
    });
    //CHANGIN THEMES
    $(".color-1").click(function(){
        $("#particles-js").css("background","radial-gradient(circle, rgba(5,3,19,1) 0%, rgba(80,140,148,1) 100%)");
        $(".color-1").css("color","rgb(5,3,19)");
        $(".color-2, .color-3, .color-4").css("color","#fff");

    });
    $(".color-2").click(function(){
        $("#particles-js").css("background","radial-gradient(circle, rgba(163,59,59,1) 0%, rgba(173,124,65,1) 28%, rgba(90,10,140,1) 100%)");
        $(".color-2").css("color","rgb(5,3,19)");
        $(".color-1, .color-3, .color-4").css("color","#fff");
    });
    $(".color-3").click(function(){
        $("#particles-js").css("background","radial-gradient(circle, rgba(232,189,42,1) 0%, rgba(110,65,8,1) 100%)");
        $(".color-3").css("color","rgb(5,3,19)");
        $(".color-2, .color-1, .color-4").css("color","#fff");
    });
    $(".color-4").click(function(){
        $("#particles-js").css("background","radial-gradient(circle, rgba(255,163,240,1) 0%, rgba(39,40,85,1) 28%, rgba(218,160,255,1) 100%)");
        $(".color-4").css("color","rgb(5,3,19)");
        $(".color-2, .color-3, .color-1").css("color","#fff");
    });
});