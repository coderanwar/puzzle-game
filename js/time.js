function prompt1 () {
    var fullName = prompt ("What is your name?","");
    if (fullName !== null || "" || undefined) {
        alert("Thank you " + fullName + ". Have a good day.");
    } else {
        fullName = prompt("Who are you? Give me your name:" , "");
    }
    document.getElementById('prompt1').innerHTML = fullName;
}
 
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var myDate = day[today.getDay()] + " Day , " + month[today.getMonth()] + " " + today.getDate() + " , " + today.getFullYear();
    document.getElementById('txt').innerHTML = h+"<span class='timeBlink'>:</span>"+m+"<span class='timeBlink'>:</span>"+s+"&nbsp;&nbsp;<br><p style='font-size:18px;line-height:0.2;'>"+myDate+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>";
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}