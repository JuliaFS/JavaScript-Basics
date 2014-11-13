function checkingBits(){
    var number = document.getElementById("value").value;

    var thirdDigit = ((number >> 3) & 1);

    if (thirdDigit == 0){
        document.getElementById("result").innerHTML = "false";
        console.log("true");
    }
    else{
        document.getElementById("result").innerHTML = "true";
        console.log("false");
    }
}
