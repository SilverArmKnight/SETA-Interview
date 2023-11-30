// Given a list of strings, return a list containing strings of longest length.
const findArrLongStr = (strArr) => {
  // A map that tracks the list of strings of the same size.
  const strMap = {}
  const strCountMap = {}
  var count = -1

  if (strArr.length === 0) {
    return []

  } else {
    // Loop through the input array.
    for (let i = 0; i < strArr.length; i++) {
      curr_str_length = strArr[i].length

      // Check if key-value pair (string's length - list of those strings) exists.
      // Then we push strings of similar length to that value. 
      if (!strCountMap[curr_str_length]) {
        strMap[curr_str_length] = [strArr[i]]
        strCountMap[curr_str_length] = 1

      } else {
        strMap[curr_str_length].push(strArr[i])
        strCountMap[curr_str_length] += 1
      }

      // Check if count is bigger than the number of strings in an array.
      if (strCountMap[curr_str_length] > count) {
        count = strCountMap[curr_str_length]
      }
    }

    // For debugging purposes.
    //console.log('strMap:', strMap)
    //console.log('strCountMap:', strCountMap)
    //console.log('Number to return:', strCountMap[count])
    //console.log('Array to return:', strMap[strCountMap[count]])

    return strMap[strCountMap[count]]
  }
}

// Given an array of integers, return the sum of two highest number in said array.
const sumTwoBiggestElement = (intArr) => {
  // Keep track of two highest numbers of the input array. Make sure that
  // second_high_num is higher or equal to first_high_num.
  var first_high_num = null
  var second_high_num = null

  // If input array is of size 0.
  if (intArr.length === 0) {
    return null
  
  // If input array is of size 1.
  } else if (intArr.length === 1) {
    return intArr[0] * 2
  
  // If input array is of size 2 or more.
  } else {
    for (let i = 0; i < intArr.length; i++) {
      const curr_int = intArr[i]
  
      // If there is no value for the highest number, make the first numer the highest.
      if (first_high_num === null) {
        first_high_num = curr_int
      
      // If there is only one highest number.
      } else if (second_high_num === null) {
        // If it's higher than the first highest number, make it second highest number.
        if (curr_int > first_high_num) {
          second_high_num = curr_int
  
        // Else make the second highest the first highest, and 
        // the first highest the current number you are checking.
        } else {
          second_high_num = first_high_num
          first_high_num = curr_int
        }
  
      // In case we have identified the initial two highest numbers.  
      } else {
        // If current number is higher than second highest number, make the first
        // highest the second highest, and the second highest the current number.
        if (curr_int > second_high_num) {
          first_high_num = second_high_num
          second_high_num = curr_int
  
        // If current number is only higher than the first highest number, first
        // highest number is that current number.
        } else if (curr_int > first_high_num) {
          first_high_num = curr_int
        }
      }
  
      // For debugging purposes.
      //console.log('first_high_num:', first_high_num)
      //console.log('second_high_num:', second_high_num)
    }

    return first_high_num + second_high_num
  }
}

module.exports = {
  findArrLongStr,
  sumTwoBiggestElement
}