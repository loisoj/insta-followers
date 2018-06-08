id = 1;
function getRandomNumber(start, end, increments) {
    var numbers = [];
    for(var n = start; n <= end; n += increments) {
        numbers.push(n);
    }

    var randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
}

var interval = getRandomNumber(25, 45, 1);//30 sec wait
a=document.getElementsByClassName("_5f5mN");
function nakr() {a[0].click();id==1;}
setInterval(nakr,interval*1000);
