function roundNumber(number){
    console.log(Math.floor(number)); //rounds a number DOWNWARDS to the nearest integer
    console.log(Math.round(number)); //The round() method rounds a number to the nearest integer.
                                     //Note: 2.49 will be rounded down, 2.5 will be rounded up.
}

roundNumber(22.7);
roundNumber(12.3);
roundNumber(58.7);
roundNumber(2.49);
roundNumber(2.5);