function variablesTypes(arr) {
    var name = arr[0];
    var age = arr[1];
    var isMale = arr[2];
    var food = new Array(); // array for food on values[3]

    for (i = 3; i <= arr.length - 1; i++) { // filling food array
        food[i - 3] = arr[i];
    }

    return "My name: " + name + " //type is " + typeof (name) +
        "\nMy age: " + age + " //type is " + typeof (age) +
        "\nI am male: " + isMale + " //type is " + typeof (isMale) +
        "\nMy favourite foods are: " + food + " //type is " + typeof (food);
}

console.log(variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]));

