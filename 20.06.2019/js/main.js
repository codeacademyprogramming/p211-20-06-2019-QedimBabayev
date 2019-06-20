"use strict";

$(document).ready(function(){

  //update runner width when page loads
  $(".runner").css("width", $(".menu li.active").outerWidth());

  //update runner when active menu item changes
  $(".menu li").click(function(){
    //update active class
    $(".menu li.active").removeClass("active");
    $(this).addClass("active");

    //update runner
    let sumOfWidths = 0;

    $(this).prevAll().each(function(i, item){
      sumOfWidths += $(item).outerWidth(true);
    });
    
    $(".runner").css({
      "left": sumOfWidths+"px",
      "width": $(this).outerWidth()
    });
  })
  
})

