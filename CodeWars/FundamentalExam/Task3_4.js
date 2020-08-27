// [FIND EVEN]

function findEven(numbers, max){
    var output = []

    for(var i = numbers.length; 0 < i; i--){
        if(Number(numbers[i]) % 2 == 0 && output.length != max){
            output.push(numbers[i])
        }
    }

    return output.reverse()
}

console.log(findEven([1, 2, 3, 4, 5, 6, 7, 8, 9],  3))
console.log(findEven([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26],  2))