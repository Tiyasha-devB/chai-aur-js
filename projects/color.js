const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');  

buttons.forEach(function (button) {
    //console.log(button);
    button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
        body.style.backgroundColor = e.target.id;
        body.style.color = 'white';
    }
    if (e.target.id === 'white') {
        body.style.backgroundColor = e.target.id;
        body.style.color = 'black';

    }
    if (e.target.id === 'blue') {
        body.style.backgroundColor = 'rgb(4, 4, 77)';
        body.style.color = 'white';

    }
    if (e.target.id === 'yellow') {
        body.style.backgroundColor = 'rgb(182, 182, 15)';
        body.style.color = 'black';

    }  
  })
})