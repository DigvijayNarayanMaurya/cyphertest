

// Write a JavaScript function that takes two numbers as input and returns their sum.
function calcSum(num1, num2) {
  return num1 + num2;
}

// Write a JavaScript function that takes a string as input and returns the length of that string.

function StringLength(inpStr) {
  return inpStr.length;
}

    // Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

    function Average(inpArr) { 
        let sum = 0;
        for (let i = 0; i < inpArr.length; i++) {
            sum += inpArr[i];
        }
        return sum / inpArr.length;
    }

    // Write a JavaScript function that takes a string as input and returns the reverse of that string.
     
    function reverseString(inpStr) {
        return inpStr.split('').reverse().join('');
    }

    //Write a JavaScript function that takes a number as input and checks if it is even or odd. Return "Even" if the number is even, and "Odd" if the number is odd.

    function evenOrOdd(inpNum) {
        if (inpNum % 2 === 0) {
            return 'Even';
        } else {
            return 'Odd';
        }
    }

    //Write a JavaScript function that takes a year as input and checks if it is a leap year. Return true if it is a leap year, and false otherwise. (A leap year is divisible by 4 but not by 100, unless it is also divisible by 400.)

    function isLeapYear(Year) {
        if (Year % 4 === 0 && Year % 100 !== 0 || Year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }

    //Write a JavaScript function that takes an array of strings as input and returns the concatenated string of all the elements.

    function concatenateStrings(inpArray) {
        return inpArray.join('');
    }

    //Write a JavaScript function that takes a number as input and returns the factorial of that number.

    function Factorial(inNumber) {
        let factorial = 1;
        for (let i = 1; i <= inNumber; i++) {
            factorial *= i;
        }
        return factorial;
    }

    //Write a JavaScript function that takes a string as input and checks if it is a palindrome. Return true if it is a palindrome, and false otherwise. (A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward.)

    function isPalindrome(inputString) {
        if (inputString === inputString.split('').reverse().join('')) {
            return true;
        } else {
            return false;
        }
    }

    //Write a JavaScript function that takes an array of numbers as input and returns the largest number in the array.

    function LargestNum(inputArray) {
        let largestNumber = inputArray[0];
        for (let i = 1; i < inputArray.length; i++) {
            if (inputArray[i] > largestNumber) {
                largestNumber = inputArray[i];
            }
        }
        return largestNumber;
    }

    //Write a JavaScript function that takes an array of objects representing students and returns an array of their names.

    function StudentNames(inputArray) {
        let studentNames = [];
        for (let i = 0; i < inputArray.length; i++) {
            studentNames.push(inputArray[i].name);
        }
        return studentNames;
    }

    // Write a JavaScript function that takes a sentence as input and returns an object containing the count of each word in the sentence.

    function countWords(inputString) {
        let wordCount = {};
        let words = inputString.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (wordCount[words[i]]) {
                wordCount[words[i]]++;
            } else {
                wordCount[words[i]] = 1;
            }
        }
        return wordCount;
    }

    //Write a JavaScript function that takes an array of numbers as input and returns a new array with only the even numbers.

    function EvenNumbers(inputArray) {
        let evenNumbers = [];
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] % 2 === 0) {
                evenNumbers.push(inputArray[i]);
            }
        }
        return evenNumbers;
    }

    //Write a JavaScript function that takes a string as input and capitalizes the first letter of each word.

    function capital(inputString) {
        let words = inputString.split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    }

    //Write a JavaScript function that takes an array of strings as input and sorts them in alphabetical order.

    function sortWords(inputArray) {
        return inputArray.sort();
    }

    //Write a JavaScript function that takes a number as input and returns the Fibonacci sequence up to that number.

    function fibonacci(inputNumber) {
        let fibonacci = [0, 1];
        for (let i = 2; i < inputNumber; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        return fibonacci;
    }


//Write a JavaScript function that takes a sentence as input and checks if it is a pangram (contains every letter of the alphabet).

function isPangram(inputString) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
        if (inputString.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }
    return true;
}

//Write a JavaScript function that takes an array of numbers as input and returns the sum of the squares of those numbers.
 
function sumSquares(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i] * inputArray[i];
    }
    return sum;
}
