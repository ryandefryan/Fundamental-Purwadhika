// [ARRAY MASH]
// Menggabungkan 2 Buah Array Secara Berurutan dan Bergantian
// Status : Done

function arrayMash (array1, array2) {
    var result = []

    for(var i = 0; i < array1.length; i++){
        result.push(array1[i])
        result.push(array2[i])
    }

    return result
}

console.log(arrayMash([1, 8, 'hello', 'dog'], ['fish', '2', 9, 10])) // Output ---> [1, 'fish', 8, '2', 'hello', 9, 'dog', 10]