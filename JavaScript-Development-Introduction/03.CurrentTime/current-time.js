var datetime = new Date();
var hours = datetime.getHours();
var minutes = datetime.getMinutes();

if (minutes < 10) {
    console.log(hours + ":" + "0" + minutes);
    document.write(hours + ":" + "0" + minutes);
}
else {
    console.log(hours + ":" + minutes);
    document.write(hours + ":" + minutes);
}
