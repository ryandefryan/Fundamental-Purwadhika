// [CHECK EXAM]
// Status : Done
// Ketentuan :
//              1. Apabila Score Kurang Dari 0, Maka Score Diubah Menjadi Tetap Sama Dengan 0
//              2. Apabila : Benar (Score +4), Salah (Score -1), Tidak Diisi (Score 0)

function checkExam(array1, array2) {
    var score = 0

    for(var i = 0 ; i < array1.length ; i ++){
      var kunci = array1[i]
      var jawaban = array2[i]

      if(jawaban == ''){
        score += 0
      }else if(jawaban != kunci){
        score -= 1
      }else{
        score += 4
      }
    }
   
    if(score < 0){
        return 0
    }else{
        return score
    }

 }

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) // Score ---> 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])) // Score ---> 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) // Score ---> 16
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])) // Score ---> 0