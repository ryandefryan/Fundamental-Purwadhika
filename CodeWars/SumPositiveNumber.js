// [SUM POSITIVE NUMBER]
// Status : Done
// Ketentuan : Menjumlahkan Bilangan Yang Bernilai Positif Saja

function positiveSum(arr) {
  var nilaiOutput = 0
  for(var i = 0; i < arr.length; i++){
      if(arr[i] >= 0){
          nilaiOutput += arr[i]
      }
  }

  return nilaiOutput
}

console.log(positiveSum([1,2,3,4,5]))
console.log(positiveSum([1,-2,3,4,5]))
console.log(positiveSum([]))