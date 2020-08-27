// [FIND MIDDLE CHAR]

function findMiddle(words){
    return words.length % 2 == 0 ? words[(words.length/2) -1] + words[(words.length/2)] :  words[Math.floor(words.length/2)]
}

console.log(findMiddle('Purwadhika'))
console.log(findMiddle('Testing'))