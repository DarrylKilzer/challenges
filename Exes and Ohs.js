// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be 
// case insensitive. The string can contains any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    var dictionary = {}
    var tempArr = str.split('')

    for (var i = 0; i < tempArr.length; i++) {
        var char = tempArr[i].toLowerCase()
            if(!dictionary[char]){
            dictionary[char] = 0
            }
            dictionary[char]++
    }
    return (dictionary.o == dictionary.x)
  }