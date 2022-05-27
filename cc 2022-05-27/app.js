// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
//recieve a number greater then zero as the number increases the phrese would change
//PREP
//P: a number
//R: return a string 
//E:  
function howMuchILoveYou(nbPetals) {
    // your code
}


function howMuchILoveYou(nbPetals){
    let phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all', ]
   phrase.map()
}

//properties and values are a way to go about this task.

function howMuchILoveYou(nbPetals) {
    var petalMap = {
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    };
    return petalMap[nbPetals % 6];
}

//A switch case is another way to go about this problem

function howMuchILoveYou(nbPetals) {
    switch ((nbPetals - 1) % 6) {
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
        default:
            return "I love you";
    }
}