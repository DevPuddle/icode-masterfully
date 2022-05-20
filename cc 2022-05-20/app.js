// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//PREP
//P: Giving a string 
//R: Returning a string sorted
//E: function(str){
// turn string to array then use sort method then rejoin into string.
//}
//P: function(arr){
//arr.split('').sort().join('')
//}

function fakeBin(x){
    x.split('').map(x => x < 5 ? 0 : 5)
    return x
}