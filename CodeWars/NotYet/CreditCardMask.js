// [CREDIT CARD MASK]
// Status : Done

function maskify(cc){
    var countSharp = cc.length - 4
    var output = ''
    for(var i = 0; i < cc.length; i++){
        if(i >= countSharp){
            output += cc[i]
        }else{
            output += '#'
        }
    }

    return output
}

console.log(maskify("4556364607935616")) // Output: ############5616
console.log(maskify("64607935616")) // Output: #######5616
console.log(maskify("1")) // 1
console.log(maskify("")) // ""