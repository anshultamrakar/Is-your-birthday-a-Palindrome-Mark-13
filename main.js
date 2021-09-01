function reverseString(str){
return str.split("").reverse("").join("");

}


function isPalindrome(str){
    var reverse = reverseString(str);
    return str === reverse;
}


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
  


  function getDateInAllFormats(date){

    var dateStr = getDateAsString(date)
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }
  

  var date = {
    day : 2,
    month : 11,
    year : 2020 
  };

  console.log(getDateInAllFormats(date))

  