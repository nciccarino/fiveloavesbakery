$(document).ready(function(){
    $("#hoursDrop").hover(function(){
        $("#dropHour").css("display", "block")
    });
    $(".contentAll").hover(function(){
        $("#dropHour").css("display", "none")
    });

    $(".button-collapse").sideNav();

});