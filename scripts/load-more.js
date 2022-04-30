$(function(){
    $(".item").slice(0, 8).show(); // select the first ten
    $("#load-more").click(function(e){ // click event for load more
        e.preventDefault();
        $(".item:hidden").slice(0, 8).show(); // select next 10 hidden divs and show them
    });
});