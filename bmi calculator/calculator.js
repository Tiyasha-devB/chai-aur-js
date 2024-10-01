const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    const bmi = (weight/((height/100)**2)).toFixed(2);

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height. ${height} is not valid`;
    }
    else if(bmi<=16.0){
        results.innerHTML=`Under Weight :${bmi}`;
    }else if(bmi>16.0 && bmi<=25.0){
            results.textContent=`Normal Weight:${bmi}`;
    }else if(bmi>25.0 && bmi<=35.0){
            results.textContent=`Over Weight : ${bmi}`;
    }else if(bmi>30.0 && bmi<=35.0){
        results.textContent=`Obese Class I: ${bmi}`;
    }else if(bmi>35.0 && bmi<=40.0){
        results.textContent=`Obese Class II: ${bmi}`;
    }else{
        results.textContent=`Obese Class III: ${bmi}`;
    }
})

