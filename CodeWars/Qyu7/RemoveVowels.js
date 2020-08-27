// [REMOVE VOWELS]
// Menghapus Huruf Vokal Pada Sebuah Kalimat
// Status : Done

function disemvowel(str) {

    var vowels = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O']
    var result = str
    
      for(var i = 0; i < str.length; i++){
        for(var j = 0; j < vowels.length; j++){
          if(str[i] == vowels[j]){
            result = result.replace(str[i], '')
          }
        }
      }

    return result
  }

  console.log(disemvowel('Ryan Tridya')) // Output: Ryn Trdy
  console.log(disemvowel('Fikri')) // Output: Fkr
  console.log(disemvowel('This website is for losers LOL!')) // Output: Ths wbst s fr lsrs LL!