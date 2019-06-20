
"use strict"


$(document).ready(function(){

$("li").click(function(){
    $("li.active").removeClass("active");
    $(this).addClass("active");
    let image = $(this).find("img").attr("src");
    $(".image-wrapper img").attr("src", image)

    let write = $(this).find("p").text();
    $(".image-wrapper p").text(write);

})

$("li i").click(function(){
    $(this).parents("li").remove();
})

$(".my-input").change(function(){
    $("li").each(function(i, item){
    setInterval(() => {
       
            let img = $(item).find("img").attr("src")
            console.log(img)
            $(".image-wrapper img").attr("src", img)

    }, 1000);
})


})



})
