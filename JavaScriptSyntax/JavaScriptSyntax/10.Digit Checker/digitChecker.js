function checkDigit(){
    var number = document.getElementById("number").value;
    var bitThree = Math.floor((number / 100) % 10);

    if(bitThree == 3){
        document.getElementById("result").innerHTML = "true";
        console.log("true");
    }
    else{
        document.getElementById("result").innerHTML = "false";
        console.log("false");
    }
}