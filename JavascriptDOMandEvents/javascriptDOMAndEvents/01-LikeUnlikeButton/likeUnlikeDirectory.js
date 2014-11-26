var theButton = document.getElementById('like-unlike');
theButton.addEventListener('click', changeText, false);

function changeText(){
    //theButton = document.getElementById('like-unlike');
    var buttonText = theButton.innerHTML;
    if (buttonText == 'Like') {
        buttonText = 'Unlike';
    } else {
        buttonText = 'Like';
    }

    theButton.innerHTML = buttonText;
}


