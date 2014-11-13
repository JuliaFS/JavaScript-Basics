function findNthDigit(){
    var rowArray = document.getElementById("row-arr").value;
    var arr = rowArray.split(", ");
    var n = arr[0];
    var num = arr[1].replace("-", "").replace(".", "");
    //.replace(/[.-]+/g, '')

    if (n > num.length){
        console.log("The number doesn’t have " + n + " digits");
        document.getElementById("result").innerHTML = "The number doesn’t have " + n + " digits";
    }
    else {
        num = Number(num);
        for (var i = 0; i < n - 1; i += 1) {
            num = Math.floor(num / 10);
        }
        document.getElementById("result").innerHTML = num % 10;
        console.log(num % 10);
    }
}
