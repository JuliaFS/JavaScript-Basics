function calcSupply(){
    var age = document.getElementById("age").value;
    var maxAge = document.getElementById("max-age").value;
    var typeOfFood = document.getElementById("food").value;
    var foodPerDay = document.getElementById("all-food").value;

    var yearForCalc = maxAge - age;
    var allDays = yearForCalc * 365;
    var totalAmountOfFood = allDays * foodPerDay;

    document.getElementById("result").innerHTML = totalAmountOfFood + "kg of " + typeOfFood + " would be enough until I am " + maxAge + " years old.";
    console.log(totalAmountOfFood + "kg of " + typeOfFood + " would be enough until I am " + maxAge + " years old.");
}
