function reverseString(str){
    var listChar = str.split("");
    var reversedList = listChar.reverse();
    var reverseStr = reversedList.join('');
    return reverseStr;
    
}


function checkIsPalindrome(str){
    var reverse = reverseString(str);
    if(str === reverse){
        return true ;
    }else{
        return false ;
    }
}


var date ={
    day : 15,
    month :9,
    year : 2020
}; 

function convertDateToString(date){
    var dateStr = {day : "", month : "", year : " "};
    if(date.day < 10){
        dateStr.day = '0' + date.day;
    }else{
    dateStr.day  =  date.day.toString(); 
    }
    if(date.month < 10){
        dateStr.month = '0' + date.month;
    }else{
    dateStr.month  =  date.month.toString();

    }

    dateStr.year   =  date.year.toString();

    return dateStr;

} 

console.log(convertDateToString(date));


// var date = {
//     day : 02,
//     month :02,
//     year : 2020
// };


function getAllDateFormat(date){
var dateStr = convertDateToString(date);
var mmddyyyy =  dateStr.month + dateStr.day + dateStr.year ;
var ddmmyyyy =  dateStr.day  + dateStr.month + dateStr.year ;
var yyyymmdd =  dateStr.year  + dateStr.month + dateStr.day ;
var mmddyy =  dateStr.month  + dateStr.day + dateStr.year.slice(-2) ;
var ddmmyy = dateStr.day  + dateStr.month + dateStr.year.slice(-2) ;
var yymmdd =  dateStr.year.slice(-2) + dateStr.month  + dateStr.day ;


return [mmddyyyy,ddmmyyyy ,yyyymmdd,mmddyy, ddmmyy, yymmdd ]

}

console.log(getAllDateFormat(date));


function checkPalindromeForAllDateFormats(date){
    var listPalindrome = getAllDateFormat(date)
     var flag = false ;
     for (var i = 0 ; i < listPalindrome .lenght ; i ++){
         if(checkIsPalindrome(listPalindrome[i])){
            flag = true;
            break;
         }
     }
     return flag ; 
}



function isLeapYear(year){
    if(year % 400 === 0){
        return true ;
    }
    if(year % 100 === 0){
        return false ;
    }
    if(year % 4 === 0){
        return true ;
    }
    return false ;

}


 function getNextDate(date){
     var day = date.day + 1;
     var month =  date.month ;
     var year = date.year;
     
    var dayInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
 

  if(month === 2){
    if(isLeapYear(year)){
        if(day > 29){
        day = 1;
        month ++ ;
    }  
}
else{
    if(day > 28){
     day = 1 ;
     month ++;
 }

}
  }
  else{
      if(day > dayInMonth[month - 1]){
          day = 1 ;
          month ++;
      }
  }
  if(month> 12){
      month = 1;
      year ++ ;
  }
  return {
      day : day ,
      month : month ,
      year : year 
    
  };

 };

function getNextPalindromeDate(date){
    var nextDate = getNextDate(date);
    var ctr = 0;
    
    while (1) {
        ctr++;
        var dateStr = convertDateToString(nextDate);
        var resultList = checkPalindromeForAllDateFormats(dateStr);
    
        for (let i = 0; i < resultList.length; i++) {
          if (resultList[i]) {
            return [ctr, nextDate];
          }
        }
        nextDate = getNextDate(nextDate);
      }
    }
    



var date ={
    day : 31,
    month :01,
    year : 2020
}


// console.log(checkPalindromeForAllDateFormats(date));

console.log(getNextPalindromeDate(date));



