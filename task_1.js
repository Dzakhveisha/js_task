'use strict';

/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    let startDate = new Date(2020, 6, 1)
    let resultDate = new Date(startDate.valueOf() + seconds * 1000)
    return resultDate
}

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    if (decimal >= 1024 || decimal < 0) {
        throw new RangeError()
    }
    let binary = decimal.toString(2); // обратно двоичную строку из числа
    return binary
}

/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
    substring = substring.toLowerCase()
    text = text.toLowerCase()

    let count = 0
    let position = -1
    while ((position = text.indexOf(substring, position + 1)) !== -1) {
        count++
    }
    return count
}

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
    let result = ""
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i - 1) !== string.charAt(i)) {
            result += string.charAt(i) + string.charAt(i)
        }
    }
    return result
}

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {
    return function () {
        return str
    }
}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {
    let count = 0
    return stepToSolveHanoiTower(disks, "A", "B", "C", count)
}

function stepToSolveHanoiTower(height, srcP, desP, bufferP, count) {
    if (height >= 1) {

        // Move a tower of height-1 to the buffer peg, using the destination peg.
        count = stepToSolveHanoiTower(height - 1, srcP, bufferP, desP, count);

        // Move the remaining disk to the destination peg.
        //console.log('Move disk from Tower ', srcP, ' to Tower ', desP);
        count++

        // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.
        count = stepToSolveHanoiTower(height - 1, bufferP, desP, srcP, count);
    }
    return count;
}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(a) {
    let str = a;
    const g = (c) => {
        str += c;
        return g;
    }

    g.order = (i) => {
        let res = str[i];
        const o = function(ii) {
            res += str[ii];
            return o;
        }

        o.get = () => {
            return res;
        }

        return o;
    }

    return g;
}


module.exports = {
    secondsToDate,
    toBase2Converter,
    substringOccurrencesCounter,
    repeatingLitters,
    redundant,
    matrixMultiplication,
    towerHanoi,
    gather
}