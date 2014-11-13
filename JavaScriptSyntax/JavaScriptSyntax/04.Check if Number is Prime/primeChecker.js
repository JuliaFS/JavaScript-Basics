function checkNumber() {
    var number = document.getElementById("value").value;
    if (!isNaN(number)) {
        //The isNaN() function returns true if the value is NaN (Not-a-Number), and false if not.
        if (isPrime(number)) {
            document.getElementById("result").innerHTML = "true";
        }
        else {
            document.getElementById("result").innerHTML = "false";
        }
    }
    else {
        document.getElementById("result").innerHTML = "Please enter a number.";
    }
}
function isPrime(number) {

    // If n is less than 2 then by definition cannot be prime.
    if (number < 2){
        return false;
    }
    if (number != Math.round(number)){
        return false;
    }
    // Now assume that n is prime, we will try to prove that it is not.
    var isPrime = true;

    // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
    for (var i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0){
            isPrime = false;
        }
    }

    // Finally return whether n is prime or not.
    return isPrime;

}

