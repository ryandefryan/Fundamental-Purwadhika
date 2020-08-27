function sumPositive(arr) {
    var result = 0

    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            result += arr[i]
        }
    }

    return result
}

console.log(sumPositive([1,2,3,4,5]))
console.log(sumPositive([]))
console.log(sumPositive([-1,-2,-3,-4,-5]))