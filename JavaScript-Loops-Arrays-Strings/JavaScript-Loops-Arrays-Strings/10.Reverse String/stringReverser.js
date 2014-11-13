function reverseString(){
    var rowArray = document.getElementById("sequence").value;
    //var reversedArray = rowArray.split("").reverse().join("");
    //console.log(reversedArray);
    var array = rowArray.split("");
    var len = array.length;
    var reversedArray = [];

    for (var i = 0; i < len; i += 1){
           reversedArray[len - i - 1] = array[i];
    }
    document.getElementById("result").innerHTML = reversedArray.join("");
    console.log(reversedArray.join(""));

}
