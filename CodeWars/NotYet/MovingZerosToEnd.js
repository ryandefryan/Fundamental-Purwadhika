// [MOVING ZEROES TO THE END]
// Memindahkan Angka 0 Ke Akhir
// Status : Done

var moveZeros = function (arr) {

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 0){{
            arr.push(arr[i])
            arr.splice(i, 1)
        }}
    }

    return arr
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))