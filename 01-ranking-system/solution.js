/*
 * Exercise 01: Ranking System
 *
 * Problem:
 * Given an array of users with scores, calculate their ranking
 * based on their scores.
 *
 * Rules:
 * - Higher scores receive better ranks.
 * - Users with the same score receive the same rank.
 * - The next rank must skip the appropriate number of positions.
 *
 * Example:
 * 920, 920, 850, 850, 760, 680
 *
 * Expected ranks:
 * 1, 1, 3, 3, 5, 6
 *
 * Constraints:
 * - Do not use external libraries.
 * - The solution should work with multiple users.
 */

const users = [
  { name: "Amir", score: 850 },
  { name: "Sara", score: 920 },
  { name: "Ali", score: 850 },
  { name: "Reza", score: 760 },
  { name: "Nima", score: 920 },
  { name: "Mina", score: 680 }
];

let userScore=[users[0]];
let user =[]

for(let a=1;a<=(users.length-1);a++){
  if(userScore[0].score<users[a].score)
  {
    userScore=[users[a]]
  }
  else if(userScore[0].score==users[a].score){
    userScore=[userScore[0],users[a]]
  }
}
user =  [...userScore]




let done = false;

for(let b=0;b<=(users.length-1);b++){
  done = false;
  try{
    for(let a=0;a<=(users.length-1);a++){

      if(users[a].score<user.at(-1).score){
        if (!done) {
          userScore = [users[a]]
          done = true;
        }
      }


      if (users[a].score < user.at(-1).score){

        if(userScore[0].score < users[a].score)
        {
          userScore=[users[a]]
        }
        else if(userScore[0].score == users[a].score){
          if(userScore[0].name!==users[a].name){
          userScore=[userScore[0],users[a]]
          }
        }
      }
    }

    if(!done){
      break;
    }
    user =  [...user , ...userScore]

  }catch{
    break;
  }
}

for(let b=0;b<=(users.length-1);b++){
  try{
    if(user[b].score===user[b-1].score){
      user[b].number = user[b-1].number
    }
    else{
      user[b].number= b + 1;
    }
  }
  catch{
    user[b].number = b + 1;
  }

}

console.log(user)
