function findMaxSequence(){
    var rowArray = document.getElementById("sequence").value;
    var array = rowArray.split(', ');

    var currentSequence = 1,
        longestSequence = 1,
        maxSeqNum = array[0]; // the maximal sequence first start with the first number

    for (var i = 1; i < array.length; i++) {
        if(array[i-1] === array[i]) {
            currentSequence++;
            if (currentSequence >= longestSequence) {
                longestSequence = currentSequence; // change max lenght to the temporary lenght
                maxSeqNum = array[i]; // set the number of the longest temp sequence
            }
        }
        else {
            currentSequence = 1; //if two elements are not equals, temporary counter = 1
        }
    }

    // create arr with the results
    var result = [];
    for (var i = 0; i < longestSequence; i++) {
        result.push(maxSeqNum);
    }

    document.getElementById("result").innerHTML = '[' + (result.join(', ')) + ']';
}




