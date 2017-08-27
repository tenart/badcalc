$(function() {
    /*
    var preOpNumber = 0;
    var postOpNumber = 0;
    var opEntered = false;
    var opSelected = "";
    var result = 0;
    var clear = true;
    
    $(".number").click(function() {
        if( $("#readout").text() == "BAD CALC" || opEntered == true || clear) {
            clear = false;
            $("#readout").empty();
        }
        $("#readout").append( $(this).text() );
    })
    
    $(".ops").click(function() {
        preOpNumber = parseInt($("#readout").text());
        opEntered = true;
        opSelected = $(this).attr("id");
    })
    
    $("#eval").click(function() {
        postOpNumber = parseInt($("#readout").text());
        var random = 2-(Math.floor(Math.random() * 3) + 1);
        if(opEntered) {
            $("#readout").empty();
            if(opSelected == "plus") {
                result = preOpNumber+postOpNumber;
            }
            if(opSelected == "minus") {
                result = preOpNumber-postOpNumber;
            }
            if(opSelected == "times") {
                result = preOpNumber*postOpNumber;
            }
            if(opSelected == "divide") {
                result = preOpNumber/postOpNumber;
            }
            $("#readout").append(result+random);
            clear = true;
        }
    })
    */
    
    var clear = true;
    
    $("#clear").click(function() {
        $("#readout").empty();
    })
    
    $(".input").click(function() {
        if( $("#readout").text() == "BAD CALC" || clear) {
            $("#readout").empty();
            clear = false;
        }
        $("#readout").append( $(this).text() );
    })
    
    $("#eval").click(function() {
        var input = $("#readout").text();
        var result = math.eval(input.replace(/×/g,"*").replace(/÷/g,"/"));
        var random = 2-(Math.floor(Math.random() * 3) + 1);
        $("#readout").empty();
        $("#readout").append( parseFloat(result)+random );
        clear = true;
    })
    
    
})