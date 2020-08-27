// [UNIQUE IN ORDER]
// Status : Done

var uniqueInOrder=function(iterable){
    var output = []

    for(var i = 0; i < iterable.length; i++){
        if(iterable[i] != iterable[i+1]){
            output.push(iterable[i])
        }
    }

    return output
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // Output: ['A', 'B', 'C', 'D', 'A', 'B']