/*
 Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol and = symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

  function SimpleSymbols(str) { 

    var trueCounter = 0;
    var letterCounter = 0;

    for (var i = 0; i < str.length; i++) {

        if ((str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) || (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90)) {

            letterCounter += 1;

            if ((str[i - 1] === "+" && str[i + 1] === "+")) {
                trueCounter += 1;
            }
        }

    }

    if (letterCounter == trueCounter) {
        return true;
    } else {
        return false;
    }

         
}

*/

function SimpleSymbols(str) { 

    let indexes = [];
    let counter = 0;
    let plusCount = 0;
    let equalCount = 0
  
    for(let i = 0; i < str.length; i++) {
      if (str[i].search(/[^A-Za-z0-9]+/g)) {
        counter++;
        indexes.push(i)
      }
    }
  
    for(let j = 0; j < indexes.length; j++) {
      if (str[indexes[j] - 1] === '+' && str[indexes[j] + 1] === '+') {
       plusCount++;
      } else if (str[indexes[j] - 1] === '=' && str[indexes[j] + 1] === '=') {
        equalCount++
      }
  
    }
    
    if ( (plusCount + equalCount) === counter) {
      return true;
    } else {
      return false;
    }

}



module.exports = SimpleSymbols;


