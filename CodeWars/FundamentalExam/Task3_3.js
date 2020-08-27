// [ARRAY TWO DIMENSION]

function arrTwoDimension(arr){
    var tempArr = []

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            tempArr.push(arr[i][j])
        }
    }

    return tempArr.sort(function(a, b){return a-b})
}

console.log(arrTwoDimension([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
console.log(arrTwoDimension([[3,4,2,1] , [1,2,3] , [5,4,3,1]]))