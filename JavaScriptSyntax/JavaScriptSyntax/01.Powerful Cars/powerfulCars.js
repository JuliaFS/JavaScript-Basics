function convertKWtoHP() {
    var number = document.getElementById('carskw').value;
    var horsePower = number / 0.745699872;
    var hp = horsePower.toFixed(2);

    //console.log(hp);//
    document.getElementById("result").innerHTML = "hp is: " + hp;
}