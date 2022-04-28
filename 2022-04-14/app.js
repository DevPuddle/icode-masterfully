// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
//My attempt at this coding challenge
function find_average(array) {
    let average = array.reduce((a,c) => (a+c)) / array.length
    if (array.length > 0) {
        return average
    } else
    return 0;
  }