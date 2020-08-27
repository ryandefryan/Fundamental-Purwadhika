// ********** ROTATE 1

// function rotate(numbers){
//     var arrRotate = []
    
//     for(var i = numbers.length - 1; 0 <= i; i--){
//         for(var j = 0; j < numbers.length; j++){
//             arrRotate.push(numbers[j][i])
//         }
//     }

//     var indexKe = 0
//     for(var i = 0; i < numbers.length; i++){
//         for(var j = 0; j < numbers.length; j++){
//             numbers[i][j] = arrRotate[indexKe]
//             indexKe++
//         }
//     }

//     return numbers
// }

// console.log(rotate(numbers = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]
// ))



// ********** ROTATE 2

// function rotate(numbers){
//     var arrRotate = []

//     for(var i = numbers.length - 1; 0 <= i; i--){
//         for(var j = numbers.length - 1; 0 <= j; j--){
//             arrRotate.push(numbers[i][j])
//         }
//     }

//     var indexKe = 0
//     for(var i = 0; i < numbers.length; i++){
//         for(var j = 0; j < numbers.length; j++){
//             numbers[i][j] = arrRotate[indexKe]
//             indexKe++
//         }
//     }

//     return numbers
// }

// console.log(rotate(numbers = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]
// ))

// // ********** ROTATE 3

// function rotate(numbers){
//     var arrRotate = []
    
//     for(var i = 0; i < numbers.length; i++){
//         for(var j = numbers.length - 1; 0 <= j; j--){
//             arrRotate.push(numbers[j][i])
//         }
//     }

//     var indexKe = 0
//     for(var i = 0; i < numbers.length; i++){
//         for(var j = 0; j < numbers.length; j++){
//             numbers[i][j] = arrRotate[indexKe]
//             indexKe++
//         }
//     }

//     return numbers
// }

// console.log(rotate(numbers = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]
// ))

// ********** ROTATE 4

function rotate(numbers){
    var arrRotate = []
    
    for(var i = 0; i < numbers.length; i++){
        for(var j = 0; j < numbers.length; j++){
            arrRotate.push(numbers[i][j])
        }
    }

    var indexKe = 0
    for(var i = 0; i < numbers.length; i++){
        for(var j = 0; j < numbers.length; j++){
            numbers[i][j] = arrRotate[indexKe]
            indexKe++
        }
    }

    return numbers
}

console.log(rotate(numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
))