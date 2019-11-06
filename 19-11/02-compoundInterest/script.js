'use strict';

function calc() {
    let interest = document.getElementsByClassName('js-interest'),
        time = document.getElementsByClassName('js-time'),
        sum      = document.getElementsByClassName('js-sum'),
        newsumDiv      = document.getElementsByClassName('js-new-sum');

    let newSum = sum[0].value;
    for(let i = 0; i < time[0].value; i++){
        newSum *= 1 + (interest[0].value/100);
    }
    newsumDiv[0].innerHTML = Math.round(newSum * 100) / 100;

}