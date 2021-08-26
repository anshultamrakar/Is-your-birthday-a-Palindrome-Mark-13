function reverseString(str){
return str.split("").reverse("").join("");

}

console.log(reverseString("Hello"));


function isPalindrome(str){
    var reverse = reverseString(str);
    return str === reverse;
}

console.log(isPalindrome("oppo"));





function convertDateToStr(date){
    var dateStr = {day : "", month : "", year : ""};
    if(date.day < 10){
        dateStr.day  = '0'+ date.day 
    }else{
        dateStr.day = date.day.toString();
    }
    if(date.month < 10){
        dateStr.month = '0' + date.month
    }else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr ;

}



date ={
    day : 5,
    month : 9,
    year : 2020
};


console.log(convertDateToStr(date));