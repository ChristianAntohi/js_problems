var isPalindrome = function (x) {
    let lastnum = 0;
    let reverse = 0;
    let number = x;
    if (x < 0) {
      return false;
    }
  
    while (number !== 0) {
      lastnum = number % 10;           //1.1 //2.2 //3.1
      reverse = reverse * 10 + lastnum;//1.1 //2.12//3.121
      number = Math.floor(number / 10); //1.12//2.1 //3.0
    }
    return x === reverse;
  };

  console.log(isPalindrome(121))