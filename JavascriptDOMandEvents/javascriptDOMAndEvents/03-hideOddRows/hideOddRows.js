var buttonHide = document.getElementById('btnHideOddRows');

buttonHide.addEventListener('click', function (){
     var rows = document.querySelectorAll('tr');
     var i;

     for(var i = 0; i < rows.length; i+=1){
         if(i % 2 == 0){
             rows[i].innerHTML = '';
         }
     }
 });
