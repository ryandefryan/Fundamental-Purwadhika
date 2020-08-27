// [ARRAY PLUS ARRAY]
// Status : Done

function arrayPlusArray(arr1, arr2) {
  
    var arrayResult = 0
    for(var i = 0; i < arr1.length; i++){
        arrayResult += arr1[i] + arr2[i]
    }

    return arrayResult
  }

  console.log(arrayPlusArray([1,2,3], [4,5,6])) // (1+4) + (2+5) + (3+6) = 5 + 7 + 9 = 21
  console.log(arrayPlusArray([-1,-2,-3], [-4,-5,-6])) // (-1+-4) + (-2+-5) + (-3+-6) = -5 + -7 + -9 = -21