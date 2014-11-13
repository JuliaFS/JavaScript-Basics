function findMaxSequence(){
    var rowArray = document.getElementById("sequence").value;
    var array = rowArray.split(', ').map(Number);

    var currentSequence = 1,
        longestSequence = 1,
        indexOfLongest;

    for (var i = 0; i < array.length; i += 1) {
        if (array[i] < array[i + 1]) {
            currentSequence += 1;
        }
        else{
            if(longestSequence < currentSequence){
                longestSequence = currentSequence;
                indexOfLongest = i - currentSequence + 1;
                document.getElementById("result").innerHTML = i;
                console.log(i);
            }
            currentSequence = 1;
        }
    }

    if(longestSequence < 2){
        document.getElementById("result").innerHTML = "no";
        console.log("no");
    }
    else{
        var result = array.slice(indexOfLongest, indexOfLongest + longestSequence);
        document.getElementById("result").innerHTML = "[" + result.join(", ") + "]";
        console.log("[" + result.join(", ") + "]");
    }
}
