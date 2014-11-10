function circlesArea() {
    var radius = document.getElementById('radius').value;
    var piConstant = Math.PI;
    var circleAreaSum = Math.PI * radius * radius;

    alert("Circle's area: " + circleAreaSum);
    console.log("Circle's area: " + circleAreaSum);
}
