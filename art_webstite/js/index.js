$(".button").click(function() {
    $("#box1").css('margin-left', 0);
    $("#box1").css('margin-right', 0);
    $("#box1").animate({ left: '-500px' }, 'slow');
    $("#box2").animate({ left: '0px' }, 'slow');
});