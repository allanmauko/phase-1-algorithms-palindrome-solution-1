 function reverseString(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("")
  return reversedWord
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);

  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

console.log("");

console.log("Expecting:true");
console.log("=>", isPalindrome("abba"));

console.log("");

console.log("Expecting; true");
console.log("=>", isPalindrome("a"));

console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting:false");
  console.log("=>", 
  isPalindrome("ab"));

  console.log("");
}


module.exports = isPalindrome;
