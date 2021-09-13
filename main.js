// function reverseString(str){
//     var listChar = str.split("");
//     var reversedList = listChar.reverse();
//     var reverseStr = reversedList.join('');
//     return reverseStr;
    
// }


// function checkIsPalindrome(str){
//     var reverse = reverseString(str);
//     if(str === reverse){
//         return true ;
//     }else{
//         return false ;
//     }
// }

// var date = {
//     day : 10,
//     month :02,
//     year : 2020
// }; 



// function convertDateToString(date){
//     var dateStr = {day : "", month : "", year : " "};
//     if(date.day < 10){
//         dateStr.day = '0' + date.day;
//     }else{
//     dateStr.day  =  date.day.toString(); 
//     }
//     if(date.month < 10){
//         dateStr.month = '0' + date.month;
//     }else{
//     dateStr.month  =  date.month.toString();

//     }

//     dateStr.year =  date.year.toString();

//     return dateStr;

// } 

// function getAllDateFormat(date){
// var dateStr = convertDateToString(date);
// var mmddyyyy =  dateStr.month + dateStr.day + dateStr.year ;
// var ddmmyyyy =  dateStr.day  + dateStr.month + dateStr.year ;
// var yyyymmdd =  dateStr.year  + dateStr.month + dateStr.day ;
// var mmddyy =  dateStr.month  + dateStr.day + dateStr.year.slice(-2) ;
// var ddmmyy = dateStr.day  + dateStr.month + dateStr.year.slice(-2) ;
// var yymmdd =  dateStr.year.slice(-2) + dateStr.month  + dateStr.day ;


// return [mmddyyyy,ddmmyyyy ,yyyymmdd,mmddyy, ddmmyy, yymmdd ]

// }

// console.log(getAllDateFormat(date));


// function checkPalindromeForAllDateFormats(date){
//     var listPalindrome = getAllDateFormat(date)
//      var flag = false ;
//      for (var i = 0 ; i < listPalindrome .lenght ; i ++){
//          if(checkIsPalindrome(listPalindrome[i])){
//              flag = true;
//             break;
//          }
//      }
//      return flag ; 
// }

// console.log(checkPalindromeForAllDateFormats(date));



// date  = {
//     date : 02, 
//     month : 08,
//     year : 2020
// }


// function isLeapYear(year){
//     if(year % 400 === 0){
//         return true ;
//     }
//     if(year % 100 === 0){
//         return false ;
//     }
//     if(year % 4 === 0){
//         return true ;
//     }
//     return false ;

// }

// console.log(isLeapYear(2020));


//  function getNextDate(date){
//      var day = date.day + 1;
//      var month =  date.month ;
//      var year = date.year;
     
//     var dayInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];


//     if(month === 2 ){
//         if(isLeapYear(year)){
//             if(day > 29){
//                 day = 1 ;
//                 month++ ;
//             }
//         }
//     }

//         else{
//             if(day > 28){
//                 day = 1 ;
//                 month++;
//             }
//             else{
//                 if(day > dayInMonth[month - 1]){
//                     day = 1 ;
//                     month++;
//                 }
//             }
//             if(month > 12){
//                 month = 1;
//                 year++ ;
//             }
//             return {
//                 day : day ,
//                 month : month ,
//                 year : year 
//             };
//         }
//     }

//  console.log(getNextDate(date));


// function getNextPalindromeDate(date){
//     var nextDate = getNextDate(date);
//     var ctr = 0;
    
//     while (1) {
//         ctr++;
//         var dateStr = convertDateToString(nextDate);
//         var resultList = checkPalindromeForAllDateFormats(dateStr);
    
//         for (let i = 0; i < resultList.length; i++) {
//           if (resultList[i]) {
//             return [ctr, nextDate];
//           }
//         }
//         nextDate = getNextDate(nextDate);
//       }
//     }
    
//     var date = {
//         day: 10,
//         month: 1,
//         year: 2020
//       }


// console.log(getNextPalindromeDate(date));


// var birthdayInput = document.querySelector('#bday-input');
// var buttonInput = documennt.querySelector("btn-input");

// function clickHandler(e){
//    var bdayStr = birthdayInput.value;

//    if(bdayStr !== ''){
//        var listofDate = bdayStr.split('-');
//        console.log(listofDate);
//    }

// }


// addEventListener("click", clickHandler)



function reverseString(str) {
    var listOfChars = str.split('');
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join('');
    return reversedString;
  }
  
  function isStringPalindrome(str) {
    var reversedString = reverseString(str);
    return str === reversedString;
  }
  
  function getDateAsString(date) {
    var dateInStr = { day: '', month: '', year: '' };
  
    if (date.day < 10) {
      dateInStr.day = '0' + date.day;
    }
    else {
      dateInStr.day = date.day.toString();
    }
  
    if (date.month < 10) {
      dateInStr.month = '0' + date.month;
    }
    else {
      dateInStr.month = date.month.toString();
    }
  
    dateInStr.year = date.year.toString();
    return dateInStr;
  }
  
  function getDateInAllFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }
  
  function checkPalindromeForAllDateFormats(date) {
    var dateFormatList = getDateInAllFormats(date);
    var palindromeList = [];
  
    for (var i = 0; i < dateFormatList.length; i++) {
      var result = isStringPalindrome(dateFormatList[i]);
      palindromeList.push(result);
    }
    return palindromeList;
  }
  
  function isLeapYear(year) {
  
    if (year % 400 === 0)
      return true;
  
    if (year % 100 === 0)
      return false;
  
    if (year % 4 === 0)
      return true;
  
    return false;
  }
  
  function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month = 3;
        }
      }
      else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    }
    else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }
  
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year
    }
  }
  
  
  function getNextPalindromeDate(date) {
  
    var nextDate = getNextDate(date);
    var ctr = 0;
  
    while (1) {
      ctr++;
      var dateStr = getDateAsString(nextDate);
      var resultList = checkPalindromeForAllDateFormats(dateStr);
  
      for (let i = 0; i < resultList.length; i++) {
        if (resultList[i]) {
          return [ctr, nextDate];
        }
      }
      nextDate = getNextDate(nextDate);
    }
  }
  
  var date = {
    day: 5,
    month: 1,
    year: 2020
  }
  
  console.log(getNextPalindromeDate(date));




var showBtn = document.querySelector('#bday-input');
var resultDiv = document.querySelector('#result');

function clickHandler() {
  var bdayString = bdayInput.value;

  if (bdayString !== '') {
    var date = bdayString.split('-');
    var yyyy = date[0];
    var mm = date[1];
    var dd = date[2];

    var date = {
      day: Number(dd),
      month: Number(mm),
      year: Number(yyyy)
    };

    var dateStr = getDateAsString(date);
    var list = checkPalindromeForAllDateFormats(dateStr);
    var isPalindrome = false;

    for (let i = 0; i < list.length; i++) {
      if (list[i]) {
        isPalindrome = true;
        break;
      }
    }

    if (!isPalindrome) {
      const [ctr1, nextDate] = getNextPalindromeDate(date);
      const [ctr2, prevDate] = getPreviousPalindromeDate(date);

      if (ctr1 > ctr2) {
        resultDiv.innerText = `The nearest palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year}, you missed by ${ctr2} days.`;
      } else {
        resultDiv.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr1} days.`;
      }

    } else {
      resultDiv.innerText = 'Yay! Your birthday is palindrome!';
    }
  }
}

showBtn.addEventListener("Click", clickHandler);
