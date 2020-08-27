// [VOWELS COUNT]
// Menghitung Jumlah Huruf Vokal Pada Sebuah Kalimat
// Status : Done

function getCount(str) {
    
    var vowelsCount = 0
    var vowels = ['a', 'i', 'u', 'e', 'o']

    for(i = 0; i < vowels.length; i++){
      for(j = 0; j < str.length; j++){
          if(vowels[i] == str[j].toLowerCase()){
              vowelsCount += 1
          }
      }
    }
    
    return vowelsCount;
  }

  console.log(getCount('defryan')) // a = 1; e = 1; Total = 2
  console.log(getCount('abracadabra')) // a = 5; Total = 5
  console.log(getCount('Bagoes Maulana'))
  console.log(getCount('Ananda'))