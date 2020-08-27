// [FIND MISSING NUMBERS]
// Mencari Angka yang Hilang
// Status : Done

const findMissingNumbers = (arr) => {
    var indexKe = 0
    var result = []

    for(var i = arr[0]; i <= arr[arr.length-1]; i++){
        if(i != arr[indexKe]){ // Jika i Tidak Ada di Dalam Array -> Push ke Result
            result.push(i)
        }else{ // Jika i Terdapat di Dalam Array -> indexKe++
            indexKe++
        }
    }

    return result
}

console.log(findMissingNumbers([-1,0,1,3,4]))
console.log(findMissingNumbers([-1,0,1,2,3,4]))
console.log(findMissingNumbers([-3,-2,1,4]))