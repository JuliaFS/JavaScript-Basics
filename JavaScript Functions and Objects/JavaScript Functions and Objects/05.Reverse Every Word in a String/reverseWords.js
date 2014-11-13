function reverseWordsInString(){
    var sentence = document.getElementById("sentence").value;
    var words = sentence.split(" ");
    var reversedLetter = [];
    var result;
   // console.log(words);

    for(var letter in words){
        reversedLetter[letter] = words[letter].split("").reverse().join("");
    }

    resultAsString = reversedLetter.join(" ");
    document.getElementById("result").innerHTML = resultAsString;
    console.log(resultAsString);
}
