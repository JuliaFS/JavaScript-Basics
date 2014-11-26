function solve(input){
    var firstStar = input[0].split(" ");
    var firstStarName = firstStar[0];
    var firstX = Number(firstStar[1]);
    var firstY = Number(firstStar[2]);
    var secondStar = input[1].split(" ");
    var secondStarName = secondStar[0];
    var secondX = Number(secondStar[1]);
    var secondY = Number(secondStar[2]);
    var thirdStar = input[2].split(" ");
    var thirdStarName = thirdStar[0];
    var thirdX = Number(thirdStar[1]);
    var thirdY = Number(thirdStar[2]);
    var nCoordinates = input[3].split(" ").map(Number);
    var nX = nCoordinates[0];
    var nY = nCoordinates[1];
    var stepsUp = Number(input[4]);

    for(var i = 0; i <= stepsUp; i++){
        var name = 'space';
        if((nX <= firstX + 1 && nX >= firstX - 1) &&
            (nY >= firstY - 1 && nY <= firstY + 1)){
            name = firstStarName.toLowerCase();
        }
        if(nX <= secondX + 1 && nX >= secondX - 1 &&
            nY >= secondY - 1 && nY <= secondY + 1){
            name = secondStarName.toLowerCase();
        }
        if(nX <= thirdX + 1 && nX >= thirdX - 1 &&
            nY >= thirdY - 1 && nY <= thirdY + 1){
            name = thirdStarName.toLowerCase();
        }
        console.log(name);
        nY++;//показваме растежа на посоката нагоре с 1 клетка
    }
}

/*solve(['Sirius 3 7',
    'Alpha-Centauri 7 5',
    'Gamma-Cygni 10 10',
    '8 1',
    '6'
]);*/

solve(['Terra-Nova 16 2',
       'Perseus 2.6 4.8',
       'Virgo 1.6 7',
       '2 5',
       '4'
])
