function findPalindromes(str){
    var result = str.toLowerCase();
    result = result.replace(".", "");
    result = result.split(" ");

    var palindromes = [];
    var len = result.length;

    for(var i = 0; i < len; i += 1){
        var reversed = result[i].split("").reverse().join("");
        if(result[i] === reversed){
            palindromes.push(result[i]);
        }
    }

    return palindromes;
}

console.log(findPalindromes('There is a man, his name was Bob.'));
console.log(findPalindromes('There exe is a man, his ABBA lamal name was Bob.'));

