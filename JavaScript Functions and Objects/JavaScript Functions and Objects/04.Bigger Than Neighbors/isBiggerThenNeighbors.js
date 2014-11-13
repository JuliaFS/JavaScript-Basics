function biggerThanNeighbors(){
    var rowArray = document.getElementById("row-arr").value;
        rowArray = rowArray.replace("[", "").replace("]", "");
    var arr = rowArray.split(", ").map(Number);
    var index = arr[0];
    arr.shift();
    var len = arr.length;

    if(index >= len || index < 0){
        document.getElementById("result").innerHTML = "invalid index";
        console.log("invalid index");
    }
    else if(index === 0 || index === len - 1){
        document.getElementById("result").innerHTML = "only one neighbor";
        console.log("only one neighbor");
    }

    else if( arr[index - 1] >= arr[index] || arr[index] <= arr[index + 1]){
         document.getElementById("result").innerHTML = "not bigger";
         console.log("not bigger");
    }
    else if( arr[index - 1] < arr[index] && arr[index] > arr[index + 1]){
         document.getElementById("result").innerHTML = "bigger";
         console.log("bigger");
    }
    else{
        document.getElementById("result").innerHTML = "invalid index";
        console.log("invalid index");
    }
}
