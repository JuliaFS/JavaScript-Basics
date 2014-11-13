function treeHouseCompare(){
    var rowArray = document.getElementById("values").value;
    var arrayValues = rowArray.split(', ');
    var a = arrayValues[0];
    var b = arrayValues[1];

    var houseArea = a * a + (a * (a * 2 / 3)) / 2;
    var treeArea = b * (b / 3) + Math.PI * (b * 2 / 3) * (b * 2 / 3);

    if (houseArea > treeArea) {
        document.getElementById("result").innerHTML = "house/" + houseArea.toFixed(2);
        console.log("house/" + houseArea.toFixed(2));
    } else {
        document.getElementById("result").innerHTML = "tree/" + treeArea.toFixed(2);
        console.log("tree/" + treeArea.toFixed(2));
    }
}
