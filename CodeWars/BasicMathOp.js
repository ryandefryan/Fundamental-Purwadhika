// [BASIC MATHEMATIC OPERATIONS]
// Melakukan Operasi Mathematic
// Status : Done

function basicOp(operation, value1, value2){
    var result = 0

    if(operation == '+'){
        result = value1 + value2
    }else if(operation == '-'){
        result = value1 - value2
    }else if(operation == '*'){
        result = value1 * value2
    }else if(operation == '/'){
        result = value1 / value2
    }

    return result
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 15, 18))
console.log(basicOp('*', 5, 5))
console.log(basicOp('/', 49, 7))