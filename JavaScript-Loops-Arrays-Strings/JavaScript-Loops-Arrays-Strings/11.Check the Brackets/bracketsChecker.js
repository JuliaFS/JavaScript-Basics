function checkBrackets(){
    var expression = document.getElementById("expression").value;
    var brackets = 0;

    for(var bracket in expression){
        if(expression[bracket] == "("){
            brackets++;
        }
        else if(expression[bracket] == ")"){
            brackets--;
        }
    }

    if(brackets == 0){
        document.getElementById("result").innerHTML = "correct";
        console.log("correct");
    }
    else{
        document.getElementById("result").innerHTML = "incorrect";
        console.log("incorrect");
    }
}
