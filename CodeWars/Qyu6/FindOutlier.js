// [FIND OUTLIER]
// Mencari 1 Bilangan Yang Berbeda 
// Status : Done

function findOutlier(integers){

    var ganjil = [] 
    var genap = [] 
    
    for(var i = 0 ; i < integers.length ; i++){
      if((integers[i] % 2) == 0){
        genap.push(integers[i])
      }else{
        ganjil.push(integers[i])
      }
    }
    
    if(ganjil.length == 1) {
      return ganjil[0]
    }
    else if(genap.length == 1){
      return genap[0]
    }
}

console.log(findOutlier([0, 1, 2])) // Hasil ---> 1 (Karena bilangan ganjil sendiri)
console.log(findOutlier([1, 2, 3])) // Hasil ---> 2 (Karena bilangan genap sendiri)
console.log(findOutlier([2,6,8,10,3])) // Hasil ---> 3 (Karena bilangan ganjil sendiri)
console.log(findOutlier([0,0,3,0,0]))
console.log(findOutlier([1,1,0,1,1]))