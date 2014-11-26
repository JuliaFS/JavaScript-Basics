function keepTheChange(input){
    var bill = parseFloat(input[0]);
    var mood = input[1];
    var result;
    var finalResult;

    if(mood == 'happy'){
        result = bill * 0.1;
    }
    else if(mood == 'married'){
        result = bill * 0.0005;
    }
    else if(mood == 'drunk'){
        var tipPercent = bill * 0.15;
        var tipsNumber = tipPercent.toString().split('');
        var firstNumber = parseFloat(tipsNumber[0]);
        result = Math.pow(tipPercent, firstNumber);
    }
    else{
        result = bill * 0.05;
    }
    finalResult = result.toFixed(2);
    return finalResult;
}

var input = [
    '120.44',
    'happy'
];

/*var input = [
  '1230.83',
  'drunk'
];

var input = [
  '716.00',
  'bored'
];*/
console.log(keepTheChange(input));
