function divisionByThree() {
    var number = document.getElementById("value").value;
    var sumOfDigits = 0;
    if (!isNaN(number)) {
        //The isNaN() function returns true if the value is NaN (Not-a-Number), and false if not.
        while (number > 0) {
            sumOfDigits += number % 10;
            number = Math.floor(number / 10);
        }
        if (sumOfDigits % 3 == 0) {
            document.getElementById("result").innerHTML = "the number is divided by 3 without remainder";
            //console.log("the number is divided by 3 without remainder");
        }
        else {
            document.getElementById("result").innerHTML = "the number is not divided by 3 without remainder";
            //console.log("the number is not divided by 3 without remainder");
        }
    }
    else{
        document.getElementById("result").innerHTML = "Please enter a number.";
    }
}
