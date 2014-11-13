function findLargestBySumOfDigits(){
    var rowArray = document.getElementById("row-arr").value;
    var arr = rowArray.split(", ");

    var maxSum = 0,
        numberWithMaxSumDigits,
        currentSum,
        i;

    for(i in arr){
        currentSum = sumDigits(arr[i]);

        if(isNaN(currentSum)) {
            numberWithMaxSumDigits = undefined;
            break;
        }

        if(maxSum < currentSum){
            maxSum = currentSum;
            numberWithMaxSumDigits = arr[i];
        }
    }
    document.getElementById("result").innerHTML = numberWithMaxSumDigits;
    console.log(numberWithMaxSumDigits);

    function sumDigits (number){
        var numberAsString = '' + Math.abs(number),
            sum = 0,
            i;

        for(i in numberAsString){
            sum += parseInt(numberAsString[i]);
        }

        return sum;
    }
}
