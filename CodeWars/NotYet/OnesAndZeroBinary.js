// [ONES AND ZERO BINARY]
// Menjumlahkan Bilangan Biner
// Status : Done

const binaryArrayToNumber = arr => {
    var binaryCode = [8, 4, 2, 1]
    var binaryResult = 0

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < binaryCode.length; j++){
            if(arr[i] == 1 && i == j){
                binaryResult += binaryCode[j]
            }
        }
    }

    return binaryResult
  };

  console.log(binaryArrayToNumber([0,0,1,1])) // Output: 3 (0 + 0 + 2^1 + 2^0 = 2 + 1 = 3)
  console.log(binaryArrayToNumber([1,0,1,1])) // Output: 3 (2^3 + 0 + 2^1 + 2^0 = 8 + 2 + 1 = 11)