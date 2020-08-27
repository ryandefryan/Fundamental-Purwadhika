// [DELETE ARRAY]
// Status : Done

function arrayDiff(a, b) {
    for(var i=0; i<b.length; i++){
        for(var j=0; j<a.length; j++){
            if(b[i] == a[j]){
                a.splice([i], 1)
            }
        }
    }

    return a
}

console.log(arrayDiff([], [4,5])) // Output: []
console.log(arrayDiff([3,4], [3])) // Output: [4]
console.log(arrayDiff([1,8,2], [])) // Output: [1,8,2]