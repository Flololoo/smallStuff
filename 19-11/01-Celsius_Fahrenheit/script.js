'use strict';


let temp1 = document.getElementsByClassName('temp1'),
    temp2 = document.getElementsByClassName('temp2');

function changetemp1(event) {
    if(event.target.value !== ''){
        calcTemp(event.target.value, 'celsius');
    }else{
        temp2[0].value = '';
    }
}

function changetemp2(event) {
    if(event.target.value !== ''){
        calcTemp(event.target.value, 'fahrenheit');
    }else{
        temp2[0].value = '';
    }
}


function calcTemp(temp, inputTemp) {
    if(inputTemp === 'celsius'){
        temp2[0].value = temp * 1.8 +32;
    }else{
        temp1[0].value = (temp - 32) / 1.8;
    }
}