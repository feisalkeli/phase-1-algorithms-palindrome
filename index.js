function isPalindrome(word) {
  // Write your algorithm here
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters and convert to lowercase
  return str === str.split("").reverse().join(""); // Check if reversed string is equal to original string
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
