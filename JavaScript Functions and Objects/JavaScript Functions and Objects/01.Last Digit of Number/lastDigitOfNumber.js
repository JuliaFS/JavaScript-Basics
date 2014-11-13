function lastDigitAsText(){
    var number = document.getElementById('row-number').value;
    var lastDigit = number % 10;

    if(lastDigit < 0){
        lastDigit = lastDigit * (-1);
    }

    switch (lastDigit) {
        case 0:
            console.log("Zero");
            document.getElementById("result").innerHTML = "Zero";
            break;
        case 1:
            console.log("One");
            document.getElementById("result").innerHTML = "One";
            break;
        case 2:
            console.log("Two");
            document.getElementById("result").innerHTML = "Two";
            break;
        case 3:
            console.log("Three");
            document.getElementById("result").innerHTML = "Three";
            break;
        case 4:
            console.log("Four");
            document.getElementById("result").innerHTML = "Four";
            break;
        case 5:
            console.log("Five");
            document.getElementById("result").innerHTML = "Five";
            break;
        case 6:
            console.log("Six");
            document.getElementById("result").innerHTML = "Six";
            break;
        case 7:
            console.log("Seven");
            document.getElementById("result").innerHTML = "Seven";
            break;
        case 8:
            console.log("Eight");
            document.getElementById("result").innerHTML = "Eight";
            break;
        case 9:
            console.log("Nine");
            document.getElementById("result").innerHTML = "Nine";
            break;
        default: document.getElementById("result").innerHTML = "Incorrect input!";
    }
}
