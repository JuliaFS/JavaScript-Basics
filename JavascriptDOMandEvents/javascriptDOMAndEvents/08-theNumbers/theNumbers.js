function solve(input) {
    var text = input[0];
    var words = text.split(/\D+/g).filter(Boolean);
    //console.log(words);
    var len = words.length;
    var result = [];
    for(var i = 0; i < len; i += 1){
        var numbers = parseInt(words[i]);
        var hex = numbers.toString(16);
        //console.log(hex);
        var zerosLeft = 4 - hex.length;
        hex = hex.split('');
        while (zerosLeft > 0){
            hex.unshift("0");
            zerosLeft--;
            //console.log(hex);
        }
        words[i] = hex.join("");
        result[i] = "0x" + (words[i].toUpperCase());
    }
    console.log(result.join('-'));
}

//when you submit the code into the Judge system, do not copy the code below!
solve(['5tffwj(//*7837xzc2---34rlxXP%$”.']);
