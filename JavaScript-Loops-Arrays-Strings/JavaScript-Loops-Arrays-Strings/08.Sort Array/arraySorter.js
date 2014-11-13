function sortArray(){
    var rowArray = document.getElementById("sequence").value;
    var array = rowArray.split(', ').map(Number);
    var min;
    var len = array.length;
    //console.log(array);
    for( i = 0; i < len; i += 1){
        min = array[i];
        for(var j = i; j < len; j += 1){
            if(array[j] < array[i]){
                min = array[j];
                array[j] = array[i];
                array[i] = min;
            }
        }
    }
    document.getElementById("result").innerHTML += array.join(", ");
    console.log(array.join(", "));
}
