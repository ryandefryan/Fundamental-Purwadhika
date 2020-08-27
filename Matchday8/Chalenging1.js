// [CHECK EXAM]

function checkExam(kunci, jawaban){

    var nilai = 0
    for(var i = 0; i < kunci.length; i++){
        if(kunci[i] == jawaban[i]){
            nilai += 3
        }
    }
    return nilai
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "b"])) // Nilai : Jika Benar 1 Nilainya 3
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])) // Nilai : Jika Benar 1 Nilainya 3
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "a",  "a"])) // Nilai : Jika Benar 1 Nilainya 3



// [FIND SHORTEST SENTENCES]

function findShortest(arr){

    var shortSentenc = arr[0]

    for(var i = 1; i < arr.length; i++){
        if(arr[i].length < shortSentenc.length){
            shortSentenc = arr[i]
        }
    }

    return shortSentenc
}

console.log(findShortest(['Aku', 'asli', 'Sidoarjo'])) // Aku
console.log(findShortest(['Purwadhika', 'Digital', 'School'])) // School