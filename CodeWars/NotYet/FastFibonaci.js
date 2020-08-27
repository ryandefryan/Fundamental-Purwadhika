// [FAST FIBONACI]
// Status : Done

function reverseFibo(n){
    var a = 0
    var b = 1
    var c = 0
    var output = [0, 1]

    for(var i = 0; i < n-2; i++){
        c = a + b
        output.push(c)
        a = b
        b = c
    }

    return output.reverse()
}

console.log(reverseFibo(10))