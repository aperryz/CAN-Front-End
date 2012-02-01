$(function() {

    //Sliding bar for main navigation
    //Adjusted from http://css-tricks.com/jquery-magicline-navigation/.
    var $el, leftPos, newWidth,
        $mainNav = $("#main-nav");

    $mainNav.append("<li id='rollover-bar'></li>");
    var $rollover_bar = $("#rollover-bar");

    $rollover_bar
        .width($(".active").width())
        .css("left", $(".active a").position().left)
        .data("origLeft", $rollover_bar.position().left)
        .data("origWidth", $rollover_bar.width());

    $("#main-nav li a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $rollover_bar.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $rollover_bar.stop().animate({
            left: $rollover_bar.data("origLeft"),
            width: $rollover_bar.data("origWidth")
        });
    });
    
    $("#main-nav li").click(function() {
      $("#main-nav li").removeClass("active");
      $el = $(this);
      $el.addClass("active");
      $rollover_bar.data("origLeft", $(".active a").position().left);
      $rollover_bar.data("origWidth", $(".active").width());
    });
    
    
    //Page movement
    
    
    
});

