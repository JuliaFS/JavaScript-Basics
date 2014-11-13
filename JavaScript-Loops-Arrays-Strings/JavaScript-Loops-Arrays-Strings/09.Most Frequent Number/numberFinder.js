function findMostFreqNum(){
 var rowArray = document.getElementById("sequence").value;
    var array = rowArray.split(', ').map(Number);
    var frequency = 0;
    var bestFrequency = 0;
    var len = array.length;
    var element;

    for (var i = 0; i < len; i += 1) {

        for (var j = 0; j < len; j += 1) {

            if (array[i] === array[j]) {
                frequency++;

                if (frequency > bestFrequency) {
                    bestFrequency = frequency;
                    element = array[i];
                }
            }
        }
        frequency = 0;
    }
    document.getElementById("result").innerHTML = element + " (" + bestFrequency + " times)";
    console.log(element + " (" + bestFrequency + " times)");
}


