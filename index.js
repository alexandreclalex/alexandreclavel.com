$(document).ready(function(){
    $(".clickable").mouseover(function(){
        $(this).css("transform", "scale(1.5)")
        $(".word").not(this).css("opacity", "40%");
        $(".word").not(this).each(function (i, obj){
            $(obj).css("transform", `scale(.85) rotate(${Math.random() * 10 - 5}deg)`);
        });
    });
    $(".clickable").mouseout(function(){
        $(".word").not(this).css("opacity", "100%");
        $(".word").css("transform", "");
    });
});