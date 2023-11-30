const arrayHelper = require('../utils/array_helper')

const strArr = ['a', 'ab', 'abc', 'cd', 'def', 'gh']
const strArr2 = ['a', 'ab', 'abc', 'cd', 'def']

const intArr = [1, 4, 2, 3, 5]
const intArr2 = [2]

// For the first function.
describe('return subarray of same-length strings with highest count', () => {
	test('of a normal array', () => {
		const result = arrayHelper.findArrLongStr(strArr)
		expect(result).toEqual([ 'ab', 'cd', 'gh' ])
	})

	// In this case we return the subarray of the smaller length.
	test('of an array where two different size has the same count', () => {
		const result = arrayHelper.findArrLongStr(strArr2)
		expect(result).toEqual([ 'ab', 'cd' ])
	})

  test('of an empty array', () => {
		const result = arrayHelper.findArrLongStr([])
		expect(result).toEqual([])
	})
})

// For the second function.
describe('return sum of two highest numbers in an integer array', () => {
	test('of an array of size 2 or more', () => {
		const result = arrayHelper.sumTwoBiggestElement(intArr)
		expect(result).toBe(9)
	})

	test('of an array of size 1', () => {
		const result = arrayHelper.sumTwoBiggestElement(intArr2)
		expect(result).toBe(4)
	})

	test('of an empty array', () => {
		const result = arrayHelper.sumTwoBiggestElement([])
		expect(result).toBe(null)
	})
})