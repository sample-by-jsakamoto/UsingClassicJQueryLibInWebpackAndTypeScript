import * as $ from 'jquery'

$(() => {
    let randomNum = Math.round(100 * Math.random())
    $('#p1').text(randomNum)
    $('#p2').fizzbuzz(randomNum);
})