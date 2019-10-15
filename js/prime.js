
// to check a input is int or not 
/*function isInt(value) {
  var x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}*/


// to check whether the given Number is prime or not
function isPrime(n) {
   //var n = parseInt(num , 10); 
    var i, root;  
    if (n < 2) {
        return 0; // n is not prime
    }
    if (n == 2) {
        return 1; // 2 is a prime number
    }
    if (n % 2 == 0) {
        return 0;
        // if the given number is even then that is not prime.because the only 
        // even prime is 2.and we check wheather the given number is 2 or not
        // (n == 2)
    }
    root = Math.sqrt(n);
    for (i = 3; i <= root; i = i + 2) {
        if (n % i == 0) {
            return 0;
            // if p * q = m, then p<=sqrt(m) or q<=sqrt(m)
        }
    }
    return 1;
} // end isPrime()

// to get isPrime() value and set it html file 
function prime(){
    var value = parseInt(document.getElementById('primeInput').value , 10);
    //var value2 = document.getElementById('primeInput').value;
    var txt = '';
    var primeSignal = isPrime(value);
    if (primeSignal == 1){
        txt = 'Wow ! ' + value + ' is a prime number.';
    } else {
        txt = 'Oops ! ' + value + " isn't a prime number.";
    }
    if (txt == 'Wow ! NaN is a prime number.') {
        txt = 'Wrong input !'; 
    }
    document.getElementById('primeResult').innerHTML = txt;
} // end prime()


