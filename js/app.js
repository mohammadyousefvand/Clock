let $ = document

const hrDigit = $.querySelector('.h1-digit')
const minDigit = $.querySelector('.min-digit')
const secDigit = $.querySelector('.sec-digit')
const hrAnalog = $.querySelector('.hr-analog')
const minAnalog = $.querySelector('.min-analog')
const secAnalog = $.querySelector('.sec-analog')
const amOrPm = $.querySelector('.amorpm')


// Digital Clock

setInterval(function () {

   let timedigit = new Date()

   let hourdigit = timedigit.getHours()
   let minutedigit = timedigit.getMinutes()
   let seconddigit = timedigit.getSeconds()

    hrDigit.innerHTML = hourdigit
    minDigit.innerHTML = minutedigit
    secDigit.innerHTML = seconddigit

    if (hourdigit < 10) {
        hrDigit.innerHTML = '0' + hourdigit
    }
    if (minutedigit < 10) {
        minDigit.innerHTML = '0' + minutedigit
    }
    if (seconddigit < 10){
        secDigit.innerHTML = '0' + seconddigit
    }

    if (hourdigit >= 0 && hourdigit < 12) {
        amOrPm.innerHTML = 'Am'
    }
    if (hourdigit >= 12 && hourdigit <= 23) {
        amOrPm.innerHTML = 'Pm'
    }

}, 1000)

setInterval( function () {

   let timeAnalog = new Date()

   let hourAnalog = timeAnalog.getHours()
   let minuteAnalog = timeAnalog.getMinutes()
   let secondAnalog = timeAnalog.getSeconds()

    let calcHr = (hourAnalog * 30) + (minuteAnalog / 2);
    let calcMin = (minuteAnalog * 6) + (secondAnalog / 10);
    let calcSec = secondAnalog*6;

    hrAnalog.style.transform = 'rotate(' + calcHr + 'deg)'
    minAnalog.style.transform = 'rotate(' + calcMin + 'deg)'
    secAnalog.style.transform = 'rotate(' + calcSec + 'deg)'

} , 1000)