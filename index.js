$(document).ready(function(){
    $(".clickable").mouseover(function(){
        $(".word").not(this).css("opacity", "60%");
    });
    $(".clickable").mouseout(function(){
        $(".word").not(this).css("opacity", "100%");
    });
});