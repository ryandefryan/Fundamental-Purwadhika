// [FIND LONGEST WORD]
// Mencari Kata Terpanjang Dari Sebuah Kalimat
// Status : Done

function findLongestWord(str) {
    var lengthWord = 0
    var totalString = str.split(' ') // [ 'Hey', 'there!', 'Iam', 'using', 'Whatsapp!' ]

    for(var i = 0; i < totalString.length; i++){
        if(totalString[i].length > lengthWord){
            lengthWord = totalString[i].length;
            str = totalString[i]; // Whatsapp
        }
    }
    
    return str
    }

    console.log(findLongestWord('Hey there! Iam using Whatsapp!'))