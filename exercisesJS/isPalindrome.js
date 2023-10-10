var isPalindromenum = function (x) {
    let lastnum = 0;
    let reverse = 0;
    let number = x;
    if (x < 0) {
      return false;
    }
  
    while (number !== 0) {
      lastnum = number % 10;            //1.1 //2.2 //3.1
      reverse = reverse * 10 + lastnum; //1.1 //2.12//3.121
      number = Math.floor(number / 10); //1.12//2.1 //3.0
    }
    return x === reverse;
  };

  function isPalindromestr(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
  console.log(isPalindromenum(121))
  console.log(isPalindromestr("121"))