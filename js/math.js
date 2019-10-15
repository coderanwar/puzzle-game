// myParseFloat(str , radix)
// to return converted floating point decimal from others .
// alternative to parseInt(str , radix)
function myParseFloat(str, radix) {
    var parts = str.split(".");
    if ( parts.length > 1 ) {
        return parseInt(parts[0], radix) + parseInt(parts[1], radix) / Math.pow(radix, parts[1].length);
    }
    return parseInt(parts[0], radix);
} // end myParseFloat()

// base conversion dec hex octal binary
function numberSys(base){

    //var d, h, o, b, getD, getH, getO, getB, retD, retH, retO, retB;
    
    // to retrieve value
    var getD = document.getElementById("d").value;
    var getH = document.getElementById("h").value;
    var getO = document.getElementById("o").value;
    var getB = document.getElementById("b").value;
    
    if (base == "D") {
        document.getElementById("h").value=(+getD).toString(16).toUpperCase();
        document.getElementById("o").value = (+getD).toString(8);
        document.getElementById("b").value = (+getD).toString(2);
    } else if(base == "H")  { 
        var intDfH = myParseFloat(getH, 16);
        document.getElementById("d").value = intDfH;
        document.getElementById("o").value = intDfH.toString(8);
        document.getElementById("b").value = intDfH.toString(2);
    } else if(base == "O")  { 
        var intDfO = myParseFloat(getO, 8);
        document.getElementById("d").value = intDfO;
        document.getElementById("h").value = intDfO.toString(16).toUpperCase();
        document.getElementById("b").value = intDfO.toString(2);
    } else if(base == "B")  { 
        var intDfB = myParseFloat(getB, 2);
        document.getElementById("d").value = intDfB;
        document.getElementById("h").value = intDfB.toString(16).toUpperCase();
        document.getElementById("o").value = intDfB.toString(8);
    }
    
} // end numberSys()

// to getAge
/*function getAge(){
    var birthDate = document.getElementById("birthDay").value;
    //var d2 = new Date();
   // var diff = d2.getTime() - d1.getTime();
  //  var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById('yourAge').innerHTML='Age is ' + birthDate;
} // end getAge()

function getAge2() {
    var Q4A = "Your birthday is: ";
    var Bdate = document.getElementById('birthDay').value;
    var Bday = +new Date(Bdate);
    Q4A += Bdate + ". You are " + ~~ ((Date.now() -
Bday) / (31557600000));
    var theBday = document.getElementById
('yourAge');
    theBday.innerHTML = Q4A;
} // end getAge2()*/

// to return age 
function getAge() {
    var bDate = document.getElementById('birthDay').value;
    var bDay = +new Date(bDate);   
    var today = +new Date();
    var diff = today - bDay;
    var age = 'test';
    var ageTotalDays = '';
    var ageYears = '';
    var ageMonths = '';
    var ageDays = '';
    if (bDay >= today){
       age = 'Wrong input';
    } else {
        //age = bDate + ' and ' + bDay + ' today is ' + today;
        //age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        ageTotalDays = Math.floor(diff / (1000 * 60 * 60 * 24));               
        ageYears = Math.floor(ageTotalDays / 365.242199);       
        ageMonths = Math.floor((ageTotalDays - (ageYears * 365.242199)) / 30.4368499); 
        var checkYear = ageTotalDays / 365.242199;
        var checkMonth = (ageTotalDays - (ageYears * 365.242199)) / 30.4368499;   
        if (checkYear < 1) {
            ageYears = 0;
        }
        if (checkMonth < 1) {
            ageMonth = 0;
        }
        ageDays = Math.floor((ageTotalDays - (ageYears * 365.242199)) - (ageMonths * 30.4368499));
    }
    var yourAge = document.getElementById('yourAge');
    yourAge.innerHTML ='<h3 style="display:inline;">Your age : <br></h3> Birthdate : ' + bDate + ' , ' + birthDayName(bDate) + ' Day ' + ' &hearts; <br>Todays date : ' + myToday() + '<br> Total Days : ' + ageTotalDays + '<br>Year(s) : ' + ageYears + '<br>Month(s) : ' + ageMonths + '<br>Day(s) : ' + ageDays;
} // end getAge()

// to return todays Date
function myToday(){
    var today = new Date();
    // Array day is declared in index.js
    var myDate = day[today.getDay()] + " Day , " + month[today.getMonth()] + " " + today.getDate() + " , " + today.getFullYear();
    return myDate;
} // end myToday()

// to return birthday name
function birthDayName(bDate){
    bDate = new Date(bDate);
    var bDay = day[bDate.getDay()];
    return bDay;
} // end birthDayName()


// to show All math cal
function showMath(){
    document.getElementById('primeBox').style.display='block';
    document.getElementById('ageCal').style.display='block';
    document.getElementById('math').style.display='block';
} // end showMath()


