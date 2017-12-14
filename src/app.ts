import * as $ from 'jquery'
import '../wwwroot/js/jquery.fizzbuzz'

$(() => {
    let randomNum = Math.round(100 * Math.random())
    $('#p1').text(randomNum)
})