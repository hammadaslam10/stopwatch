/////// ROUND OFF RULE/////

// var ak = 5.9;
// var maak = Math.round(ak);
// document.write(maak)


///// CEIL RULE /////////

// var ak = 6.8;
// var maak = Math.ceil(ak)
// document.write(maak)


///// FLOOR RULE /////////

// var ak = 6.8;
// var maak = Math.floor(ak)
// document.write(maak)

/////  RANDOM RULE /////////

// var ak = Math.random();
// var maak = (ak * 6) + 1;
// var num = Math.floor(maak)
// document.write(num)

///// toFixed Rule //////

// var ak = 100.1 + 100.22;
// var maak = ak.toFixed(2);
// document.write(maak)

/// FOR LOOP //////

// var ak = 1;
// var maak = "aqib";
// for(i = 1; i <=10; i++){
//    document.write(i, "  " , maak ,"<br>") 
// }

//// TABLE /////

// var ak = 12;
// var result;

// for( var i = 1 ; i<= 10 ; i++){
//     // result = ak * 2;

//     document.write(ak , "X" , i , "=" , i * 12,"<br>")
// }

//// TABLE BY ANOTHER WAy //////

// var ak = 12;
// var result;

// for( var i = 1 ; i<= 10 ; i++){   

//     document.write(ak ," " , "X", " " , i ," " , "=", " "  , i * 12, " " ,"<br>")
// }

///// IF OR ELSE (GAME) /////

// var userinp = prompt("enter your lucky no");

// var num = Math.random();
// var numIpm = (num * 6) + 1;
// var result = Math.floor(numIpm);

// if (result == userinp) {
//     document.write("you won")
// }
// else {
//     document.write("you loss")
// }


////// get DATE | DAY | TIME | MONTH etc.... ////////

//// BASIC(for all purpose) /////

// var rightNow = new Date();
// document.write(dateString)


//// (for DAY but in number) /////

// var rightNow = new Date();
// var theDay = rightNow.getDay();
// document.write(theDay)

// //// (for DAYs IN NAME) /////

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write(nameOfToday)



// var now = new Date();
// var ak = new Date("June 30, 2035");

// var maak = ak - now;


// console.log(maak);

// function add(val1,val2)
// {
//     var result = val1 + val2;
//  alert(result);
//     return result;
// }

// add(5,3);
// alert(add());

/////////// SET INTERVEL //////////

// function ak() 
// {
//     console.log("hello");
// }

// var maak = setInterval (ak,2000);

// function stopcounter() {
//     clearInterval(maak)
// }

const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
if(sec==20){
stopTimer()
alert("over")
}
    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}