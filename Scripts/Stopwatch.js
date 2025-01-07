let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let minute = 0o0;
let second = 0o0;
let millisecond = 0o0;

startBtn.addEventListener('click', function(){
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click',function(){
    timer = false;
});

resetBtn.addEventListener('click', function(){
    timer = false;
    minute = 0;
    second = 0;
    millisecond = 0;

    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('milli').innerHTML = "00";
});

function stopWatch(){
    if(timer){
        millisecond++

        if(millisecond == 100){
            second++;
            millisecond = 0;
        }

        if(second == 60){
            minute++;
            second = 0;
        }

        let minString = minute;
        let secString = second;
        let milliString = millisecond;

        if (minute < 10){
            minString = "0" + minString;
        }
        if (second < 10){
            secString = "0" + secString;
        }
        if (milli < 10){
            milliString = "0" + milliString;
        }

        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('milli').innerHTML = milliString;
        setTimeout(stopWatch, 10);
    }
}