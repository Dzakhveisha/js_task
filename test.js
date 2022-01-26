const operations = require('./task_1.js')
const assert = require('assert')

it('returns date that comes in 86400 seconds after 01.06.2020 00:00:00', () => {
    assert.equal(operations.secondsToDate(86400).valueOf(), new Date(2020, 6, 2).valueOf())
})
it('returns date that comes in 90 seconds before 01.06.2020 00:00:00', () => {
    assert.equal(operations.secondsToDate(-90).valueOf(), new Date(2020, 5, 30, 23, 58, 30).valueOf())
})
it('returns date that comes in 0 seconds after 01.06.2020 00:00:00', () => {
    assert.equal(operations.secondsToDate(0).valueOf(), new Date(2020, 6, 1).valueOf())
})
it('returns date that comes in 63072000(2 years) seconds after 01.06.2020 00:00:00', () => {
    assert.equal(operations.secondsToDate(63072000).valueOf(), new Date(2022, 6, 1).valueOf())
})


it('convert decimal 4 to binary view', () => {
    assert.equal(operations.toBase2Converter(4), "100")
})
it('convert decimal number >= 1024 to binary view', () => {
    assert.throws(function () {
        operations.toBase2Converter(-1025);
    }, RangeError);
})

it('returns the number of times the string "abc" is found in the text "abcdABC"', () => {
    assert.equal(operations.substringOccurrencesCounter("abc", "abcdabc"), 2)
})
it('returns the number of times (0) the string "abc" is found in the text "lol"', () => {
    assert.equal(operations.substringOccurrencesCounter("abc", "lol"), 0)
})
it('returns the number of times the string "t" is found in the text "This is text for searching"', () => {
    assert.equal(operations.substringOccurrencesCounter("t", "This is text for searching"), 3)
})

it('returns string in which each character is repeated once', () => {
    assert.equal(operations.repeatingLitters("all"), "aall")
})
it('returns string in which each character is repeated once', () => {
    assert.equal(operations.repeatingLitters("ok"), "ookk")
})
it('returns string in which each character is repeated once', () => {
    assert.equal(operations.repeatingLitters("oops"), "ooppss")
})

it('returns redundant function', () => {
    const f = operations.redundant("apple")
    assert.equal(f(), "apple")
})
it('returns redundant function', () => {
    const f = operations.redundant("")
    assert.equal(f(), "")
})

it('multiple matrix', () => {
    const m1 = [[1, 2], [3, 4]]
    const m2 = [[5, 6], [7, 8]]
    const assertResult = [[19, 22], [43, 50]]
    assert.deepEqual(operations.matrixMultiplication(m1, m2), assertResult)
})
it('multiple matrix', () => {
    const m1 = [[1, 2, 3], [1, 2, 3], [5, 5, 5]]
    const m2 = [[1, 1, 1], [5, 5, 5], [7, 7, 7]]
    const assertResult = [[32, 32, 32], [32, 32, 32], [65, 65, 65]]
    assert.deepEqual(operations.matrixMultiplication(m1, m2), assertResult)
})

it('return count of steps for resolving tower hanoi problem', () => {
    assert.equal(operations.towerHanoi(4), 15)
})
it('return count of steps for resolving tower hanoi problem', () => {
    assert.equal(operations.towerHanoi(1), 1)
})
it('return count of steps for resolving tower hanoi problem', () => {
    assert.equal(operations.towerHanoi(0), 0)
})

it('gather method test', () => {
    assert.equal(operations.gather("b")("j").order(0)(0)(1).get(), "bbj")
})