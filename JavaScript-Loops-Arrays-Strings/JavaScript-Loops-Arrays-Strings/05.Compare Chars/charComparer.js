function compareChars(arr1, arr2) {
    var len = arr1.length;
    if (arr1.length === arr2.length) {
        for (var i = 0; i < len; i++) {
            if (arr1[i] === arr2[i]) {
                return "Equal";
            } else {
                return "Not Equal";
            }
        }
    }
    else {
        return "Not Equal";
    }
}


console.log(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
console.log(compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']));
console.log(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));

