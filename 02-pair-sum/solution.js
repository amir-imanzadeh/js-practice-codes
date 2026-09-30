/*
 * Exercise 02: Pair Sum
 *
 * Problem:
 * Given an array of numbers and a target value,
 * find all pairs of different elements whose sum
 * is equal to the target.
 *
 * Example:
 * numbers = [4, 7, 1, 9, 3, 6, 2]
 * target = 10
 *
 * Expected pairs:
 * 4 + 6 = 10
 * 1 + 9 = 10
 * 7 + 3 = 10
 *
 * Rules:
 * - Do not use sort().
 * - Do not use external libraries.
 * - The same pair should not appear twice in reverse order.
 */

let numbers = [4, 7, 1, 9, 3, 6, 2,5];
const target = 10;

let END = []
let n1,n2;

function numberCheck(n1,n2,numbers=numbers,END=END){
 
    for(let a=0;a<=(END.length-1);a++){
        if(END[a].second===n1&&END[a].first===n2)return false;
    }
    return true;
}

for(let a=0;a<=(numbers.length-1);a++){
    n1 = numbers[a]
    for(let b=0;b<=(numbers.length-1);b++){
        n2 = numbers[b]
        if(n1===n2){
            
        }
        else if (n2+n1===target){
            if(numberCheck(n1,n2,numbers,END))END = [...END,{first: n1,second:n2}];
        }
    }
}
console.log(END)
