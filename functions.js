// Question 1
function maxOfTwoNumbers(num1, num2) {
  return (num1 >= num2)? num1 : num2;
}
console.log('maxOfTwoNumbers(12,13): ' +
             maxOfTwoNumbers(120,13));

// Question 2
function maxOfThree(num1, num2, num3) {
  var largest = maxOfTwoNumbers(num1, num2);
  return maxOfTwoNumbers(largest, num3);
}
console.log('maxOfThreeNumbers(3,212,13): ' +
             maxOfThree(212,3,13));

// Question 3
function isCharacterAVowel(character) {
  if(character.length === 1){
    return character.match(/[aeiou]/i) !== null;
  }
  return false;
}
console.log('isCharacterAVowel(\'x\'): ' +
             isCharacterAVowel('xa'));

// Question 4
function sumArray(someArray) {
  function sumFunc(accum, elem){
    return accum + elem;
  }
  var res;
  if(Array.isArray(someArray)){
    res = someArray.reduce(sumFunc, 0);
    console.log(res);
  }
  else {
      console.log('invalid array ');
  }
}
console.log('sumArray([4,4,4,4,1]): ' +
             sumArray([4,4,4,4,1]));

// Question 4
function multiplyArray(someArray) {
  function sumFunc(accum, elem){
    return accum * elem;
  }
  var res;
  if(Array.isArray(someArray)){
    res = someArray.reduce(sumFunc, 1);
    console.log(res);
  }
  else {
      console.log('invalid array ');
  }
}
console.log('multiplyArray([4,4,4,4,1]): ' +
             multiplyArray([4,4,4,4,1]));

// Question 5
var reverseString = function(someString){
    var reverseArr = [];

    if(typeof someString === 'undefined'){
      someString = this;
    }

    for(var i=someString.length-1; i>=0; i--){
      reverseArr.push(someString[i]);
    }
    return reverseArr.toString().replace(/,/g, '');
};
console.log('reverseString(\'Hope\'): ' +
             reverseString('Hope'));

// Question 8
function findLongestWord (wordArray) {
  var theLongestWord = wordArray[0];
  wordArray.forEach(function(word){
      if(word.length >= theLongestWord.length){
          theLongestWord = word;
      }
  });
  return theLongestWord;
}
console.log('findLongestWord(\'Hope\', \'Prope\', \'Mornist\',\'Mope\', \'Longeristran\'): ' +
             findLongestWord(['Hlodspopdpssdsdope', 'Prope', 'Mornist','Mope', 'Longeristran']));

// Question 9
function filterLongWords (wordsArray, i) {
  return wordsArray.filter(function(word){
    return word.length > i;
  });
}
console.log('filterLongWords(): ' +
             filterLongWords(['I exceed the limit', 'I don\'t exceed','I exceed the limit'],14));

// Bonus 1
//??????
String.prototype.reverseString = reverseString;
console.log(
"General Assembly".reverseString());

// Bonus 2
function charactersOccurencesCount() {
  var someStr = this;
  var dict = {};
  for(var i=0; i<someStr.length; i++){
    var currChar = someStr[i].toLowerCase();
    if(currChar === " "){ continue; }
    if (dict[currChar] !== undefined) {
      dict[currChar]++;
    }
    else {
      dict[currChar] = 1;
    }
  }
  return dict;
}
console.clear();
String.prototype.charactersOccurencesCount = charactersOccurencesCount;
console.log(
"General Assembly".charactersOccurencesCount());

// Bonus 3
var numberOfArguments = function(args){
  return args.length; // only works with arrays?
}
console.clear();
console.log(
  'numberOfArguments(1,2,3,4) is:\t'+
  numberOfArguments([1,2,3,4])
);
