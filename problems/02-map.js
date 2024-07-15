/*
Given the `friends` array below, use the `Array.map()` method to map the
current array to an array of booleans representing whether or not the friend
has been friends with the user for more than 5 years. Assign the output of
`Array.map()` to the `goodFriendsOrNot` variable.
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

const goodOrNot = numberOfYears => {
  if(numberOfYears < 5){
    return false;
  } else {
    return true;
  }
};

const goodFriendsOrNot = friends.map((obj) => goodOrNot(obj.yearsOfFriendship));

 console.log(goodFriendsOrNot);          // [false, false, true, true]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = goodFriendsOrNot;
} catch {}
