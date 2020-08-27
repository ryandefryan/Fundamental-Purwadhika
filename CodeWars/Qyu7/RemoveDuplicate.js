// [REMOVE DUPLICATE NUMBER]
// Status : DONE
// Ketentuan :
//              1. Apabila Terdapat Nomor Yang Sama, Maka Diambil Nomor Yang Terakhir
//              2. Nomor Yang Tidak Memiliki Nomor Yang Sama, Tetap Diambil

function solve(arr){
    var newArr = []
    var temp = 0

    for(var i = arr.length-1 ; i >=0 ; i --){

      if(!(newArr.includes(arr[i]))){
        newArr.push(arr[i])
      }
    }

  return newArr.reverse()
}

console.log(solve([3,4,4,3,6,3])) // Hasil ---> [4, 6, 3]
console.log(solve([1,2,1,2,1,2,3])) // Hasil ---> [1, 2, 3]
console.log(solve([1,2,3,4])) // Hasil ---> [1, 2, 3, 4]
console.log(solve([1,1,4,5,1,2,1])) // Hasil ---> [4, 5, 2, 1]
console.log(solve([1,2,1,2,1,1,3])) // Hasil ---> [2, 1, 3]