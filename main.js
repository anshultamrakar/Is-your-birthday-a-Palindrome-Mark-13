function reverseString(str){
return str.split("").reverse("").join("");

}

console.log(reverseString("Anshul"));


function isPalindrome(str){
    var reverse = reverseString(str);
    return str === reverse;
}

console.log(isPalindrome("oppo"));
console.log(isPalindrome("level"));
console.log(isPalindrome("racecar"));



function getDateAsString(date){
    var dateInStr = {day: '', month: '', year: ''};
  
    if(date.day < 10){
      dateInStr.day = '0' + date.day;
     }
    else {
      dateInStr.day = date.day.toString();
    }
    
    if(date.month < 10){
      dateInStr.month = '0' + date.month;
    }
    else {
      dateInStr.month = date.month.toString();
    }
    
    dateInStr.year = date.year.toString();
    return dateInStr;
  }
  
  var date = {day: 5, month: 2, year: 2020};
  
  console.log(getDateAsString(date));


  function getDateInAllFormats(date){
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }
  
  var date = {
    day: 20,
    month: 6,
    year: 2020
  }
  
  console.log(getDateAsString(date));

  
  
  function checkPalindromeForAllDateFormats(date) {
    var dateFormatList = getDateInAllFormats(date);
    var palindromeList = [];
  
    for (var i = 0; i < dateFormatList.length; i++) {
      var result = isPalindrome(dateFormatList[i]);
      palindromeList.push(result);
    }
    return palindromeList;
  }
  
  var date = {
    day: 11,
    month: 2,
    year: 2020
  }
  
  var dateStr = getDateAsString(date);
  
  console.log(checkPalindromeForAllDateFormats(dateStr));

  



