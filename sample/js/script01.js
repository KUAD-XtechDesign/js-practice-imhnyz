$(function(){


　$("#button01").on("click",function(){
    $(".back-red").hide();
　})

　$("#button02").on("click",function(){
　　$(".back-blue").hide();
})

    $("#button03").on("click",function(){
        $("#box03,#box07").hide();

    })

    $("#button04").on("click",function(){
        $(".box").show();
    })

})