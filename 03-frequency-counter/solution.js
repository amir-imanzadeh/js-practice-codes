/*
 * Exercise 03: Most Frequent Elements
 *
 * Problem:
 * Given an array of numbers, find the number or numbers
 * that appear most frequently.
 *
 * Example:
 * [4, 7, 2, 4, 9, 7, 4, 3, 7, 7, 2, 9, 4]
 *
 * Expected result:
 * [
 *   { number: 4, count: 4 },
 *   { number: 7, count: 4 }
 * ]
 *
 * Rules:
 * - Do not use sort().
 * - Do not use external libraries.
 * - If multiple numbers have the highest frequency,
 *   return all of them.
 */

const numbers = [1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 9];

const frequencyResults = [];

let currentNumber;

for (let index = 0; index <= numbers.length - 1; index++) {
    currentNumber = 1;

    if (
        frequencyResults.some(
            result => result.number === numbers[index]
        )
    ) {
        console.log(frequencyResults);
    } else {
        for (
            let compareIndex = index + 1;
            compareIndex <= numbers.length - 1;
            compareIndex++
        ) {
            if (numbers[index] === numbers[compareIndex]) {
                currentNumber += 1;
            }
        }

        frequencyResults.push({
            number: numbers[index],
            count: currentNumber
        });
    }

    console.log(frequencyResults);
}
