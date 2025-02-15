/*
Given the `friends` array below, use the `Array.find()` method to get the first
friend whose name contains 3 or more vowels. Assign the output of
`Array.find()` to the `threeVowelFriend` variable.
*/

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3
  },
  {
    name: "Angela",
    yearsOfFriendship: 2
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6
  }
];

// Hint: create an array of vowels to use in your solution.
function threeVowelsInWord(friend){
  let vowels = "aeiou";
  count = 0;

  for(let i = 0; i < friend.name.length; i++){
    console.log(friend.name[i]);
    if(vowels.includes(friend.name[i].toLowerCase())){
      count++;
    }
    if(count >= 3){
      return true;
    } else {
      continue;
    }
  }
}
const threeVowelFriend = friends.find(threeVowelsInWord);

 console.log(threeVowelFriend); // [ { name: 'Angela', yearsOfFriendship: 2 } ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = threeVowelFriend;
} catch {}
