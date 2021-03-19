/* Given an array of integers, calculate the sum of all the integers.
 For duplicates, only count them once. ([1, 2, 3] → 6, [3, 4, 3, 4, 5] → 12, [1, 1, 0, 0] → 1)*/

 const arrayOne = [1,2,3];
 const arrayTwo = [3,4,3,4,5];
 const arrayThree = [1,1,0,0];

 function sumOfInts(array){
   let sum = 0;
   for(let n of array ){
     sum += n;
   }return sum;
 }

 //console.log(sumOfInts(arrayOne))
 //console.log(sumOfInts(arrayTwo))
 //console.log(sumOfInts(arrayThree))

/* Given an array of strings, return a map with a key for each different string, 
with the value the number of times that string appears in the array.
(["a", "b", "a", "c", "b"] → {"a": 2, "b": 2, "c": 1},
 ["c", "b", "a"] → {"a": 1, "b": 1, "c": 1},
  ["c", "c", "c", "c"] → {"c": 4})*/

  let array1 = ["a","b","c", "d", "a"];
  let hash1 = {};

  function arrayMap(array, hash){
  array.forEach((i)=>{
    hash[i]=(hash[i]||0)+1;})
   return hash;
  }

 // console.log(arrayMap(array1,hash1));

 /*Given an array of ints, return true if one of the 
 first 4 elements in the array is a 9. 
 The array length may be less than 4. 
 ([1, 2, 9, 3, 4] → true, 
  [1, 2, 3, 4, 9] → false, 
  [1, 2, 3, 4, 5] → false, 
  [] → false) */

  arrayInt1 = [1, 2, 9, 3, 4];
  arrayInt2 = [1, 2, 3, 4, 9];
  arrayInt3 = [1, 2, 3, 4, 5];
  arrayInt4 = [];

  function checkForNine(array){
    for(i=0; i < 4; i++){
      if(array[i]=== 9)
      return true;
      }
    return false;
    }
  //console.log(checkForNine(arrayInt1));
  //console.log(checkForNine(arrayInt2));
  //console.log(checkForNine(arrayInt3));
  //console.log(checkForNine(arrayInt4));
  

    
 
 

