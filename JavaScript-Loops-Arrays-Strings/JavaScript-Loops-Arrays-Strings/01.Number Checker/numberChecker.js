function printNumbers(){
    var number = document.getElementById("number").value;
    var result = [];

    if(number < 0){
        document.getElementById("result").innerHTML = "no";
        console.log("no");
    }
    for(var i = 1; i <= number; i+=1){
        if( i % 4 == 0 || i % 5 == 0){
            continue;
        }
        else{
            result.push(i);

        }
    }
    document.getElementById("result").innerHTML += result.join(", ");
    console.log(result);
}
