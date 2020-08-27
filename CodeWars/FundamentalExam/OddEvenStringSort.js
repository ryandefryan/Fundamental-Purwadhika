// [ODD EVEN STRING SORT]
// Mengelompokan Huruf Sesuai Urutan Nomor Ganjil / Genap
// Status : Done

function sortMyString(S) {
    var oddS = ''
    var evenS = ''

    for(var i=0; i < S.length; i++){
        if(i % 2 == 0){
            evenS += S[i]
        }else{
            oddS += S[i]
        }
    }

    return evenS + ' ' + oddS;
}

console.log(sortMyString("CodeWars")) // Output: CdWr oeas