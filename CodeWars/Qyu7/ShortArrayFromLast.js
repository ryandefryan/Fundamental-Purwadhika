// [SHORT ARRAY FROM LAST]
// Status : Done

function sortMe(arr){
    
    var arrResult = []

    for(var i = (arr.length-1); i >= 0; i--){
        arrResult.push(arr[i])
    }

    return arrResult
}

console.log(sortMe(['acvd','bcc']))
console.log(sortMe(["14", "13"]))
console.log(sortMe(["bsde", "asdf", 14, "13"]))
console.log(sortMe(["asdf", "asdf", "14", "13"]))
console.log(sortMe(["asdf", "bsde", 14, "13", "asdf", "bsde", 14, "13", "bsde", "asdf", 14, "13"]))