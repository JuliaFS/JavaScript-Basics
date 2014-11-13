function evenNumber(){
    var number = document.getElementById('number').value;

    if(number % 2 === 0){
        document.getElementById('result').innerHTML = "true";
        //console.log("true");
    }
    else{
        document.getElementById('result').innerHTML = "false";
        //console.log("false");
    }
}
