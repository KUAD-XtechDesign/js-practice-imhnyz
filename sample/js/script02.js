$(function(){

    let txt1 = "ふわふわふわふわ！";
    let txt2 = "じりじりじりり！";
    let num1 = 22;
    let num2 = 11;

    $("#button01").on("click",function(){
        $("#content").text("ふわふわふわわ！");
    })

    $("#button02").on("click",function(){
        $("#content").text(txt1);
    })
        
    $("#button03").on("click",function(){
        $("#content").text(txt1 + txt2);
    })

    $("#button04").on("click",function(){
        $("#content").text(num1 + num2);
    })

    // たす＝+ ひく＝- かける＝* わる＝/

    $("#button05").on("click",function(){
        $("#content").text(num1+"➗"+num2+"="+(num1/num2)+"らしい")
    })


})

