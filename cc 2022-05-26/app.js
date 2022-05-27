// Your task is to sum the differences between consecutive pairs in the array in descending order.
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).

//Add the differences 
//PREP
//P: Numbers
//R: Return the value to where it called
//E: 5 - 3 = 2, 10 - 5 = 5. 2 + 5 = 7
//P: let arr = [20, 50, 18] 
function sumOfDifferences(arr) {
    let arr = [10, 20, 25]
    arr.forEach(element, index => {
         element += element - index
         return element
        
    });
}