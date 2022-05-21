//PREP

//Write function adding two numbeer and return the sum in binary. 
//conversion can be done before or after converiton

//P: Whole numbers will be passed into function
//R: The returning value will be a string
//E: function(n1,n2){
// let converion = (n1 + n2) % 2
//}

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a,b) {
    let sum = a + b
    let converion = ''
    if (sum / 2 <= 0 || sum / 2 === 1) {
        converion.push(sum)
    } else {

    }
    return converion
}

//The solution 

function addBinary(a,b){
    return (a+b).toString(2)
  }