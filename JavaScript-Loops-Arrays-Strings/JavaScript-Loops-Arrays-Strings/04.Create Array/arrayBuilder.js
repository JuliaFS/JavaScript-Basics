function createArray(){
    var array = new Array(20);
    var len = array.length;

    for(var i = 0; i <= len; i++){
        array[i] = i * 5;
        document.getElementById("result").innerHTML += array[i] + "  ";
        console.log(array[i]);
    }

}
