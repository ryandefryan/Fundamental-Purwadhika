function arrayPlusArray(arr1, arr2) {
    var result = 0

    for(var i = 0; i < arr1.length; i++){
        result += arr1[i] + arr2[i]
    }

    return result
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))