function calcCylinderVol(){
    var rowArray = document.getElementById("values").value;
    var array = rowArray.split(', ');

    var volume = Math.PI * array[0] * array[0] * array[1];
    document.getElementById("result").innerHTML = volume.toFixed(3);
    console.log(volume.toFixed(3));
}
