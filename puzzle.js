/* We have a loud talking parrot. The "hour" parameter is the current hour
 time in the range 0..23. We are in trouble if the parrot is talking and the 
 hour is before 7 or after 20. Return true if we are in trouble. 
 ([true, 6] → true, [true, 7] → false, [false, 6] → false)


 function talkingParrot(hour)
 
 if(hour < 7 || hour > 20) {
   return "We're in trouble";
  } else if (hour >= 7 || hour <= 20) {
  return " It's all good" ;
}

function integer(int1, int 2){
  if(int1 !== int2){
    return int1 + int2;
  }else {
    return (int1 + int2)*2;
  }
}

//console.log(talkingParrot(5));

//console.log(talkingParrot(7));

//console.log(talkingParrot(20));

/*PUZZLE: Given a string name, e.g. "Bob", return a greeting of the form
 "Hello Bob!". ("Bob" → "Hello Bob!", "Alice" → "Hello Alice!","X" → "Hello X!")*/

 //console.log("Hello Bob");

 /* PUZZLE: Given a string of even length, return the first half. 
 ("WooHoo" → "Woo", "HelloThere" → "Hello", "abcdef" → "abc")

 function firstHalf(string){
   if(string.length % 2 == 0){
     return string.slice (0, string.length / 2);
   }
 }

 console.log(firstHalf("Meat"));*/

 /*PUZZLE: Given an integer, return the integer multiplied by 2. (2 → 4, 3 → 6, 5 → 10)

 //function that takes in an integer, then mulitply by 2

 function multByTwo(integer){
   var answer = integer*2;
   return answer;
 }

 console.log(multByTwo(2)); */

 /* PUZZLE: Given a number, find remainder when number is divided by 5. (10 → 0, 3 → 3, 17 → 2)*/

 /* 
 function remainderDivByFive(number){
  var answer = number % 5;
  return answer;
 }

 console.log(remainderDivByFive(17)); */

 /* PUZZLE: Given an array of numbers, return the last element. ([1, 0, 3] → 3, [1, 2, 3, 4, 5] → 5, [] → *null*)*/

 /*function lastElement(){
   var array = [ 1, 0, 3]
   return array.pop();
 }

 function lastElementTwo(){
  var array = [ 1, 2, 3, 4, 5]
  return array.pop();
}

function lastElementThree(){
  var array = [ ]
  return array.pop();
}
 console.log(lastElementThree()); */

 /* PUZZLE: Given an array of ints length 3, return a new array with the elements in
  reverse order.([1, 2, 3] → [3, 2, 1], [5, 11, 9] → [9, 11, 5], [7, 0, 0]) → [0, 0, 7]) 

  var arrayOne = [1,2,3]
  var arrayTwo = [3,2,1]
  var arrayThree = [5,11,9]
  var arrayFour = [9,11,5]
  var arrayFive = [7,0,0]
  var arraySix = [0,0,7]
  
  function arrayThreeInt(array){
    return array.reverse()
  }
  console.log(arrayThreeInt(arrayTwo));
  console.log(arrayThreeInt(arrayThree));
  console.log(arrayThreeInt(arrayFour));
  console.log(arrayThreeInt(arrayFive));
  console.log(arrayThreeInt(arraySix)); */

  /*PUZZLE: Get the value of "a". (
  {a: 123, b:456} → 123,
  {"a": "letter", "1": "number"}  →  "letter"},
  {b: 456, c: 789} → *null*) */

  var hashOne = {a: 123, b: 456};
  var hashTwo = {"a": "letter", "1": "number"};
  var hashThree = {b: 456, c: 789}

  function extractA(hash){
    if(hash.a != null){
      return hash.a
    }else{
    return null;
    }
  }

console.log(extractA(hashOne));
console.log(extractA(hashTwo));
console.log(extractA(hashThree));














 
