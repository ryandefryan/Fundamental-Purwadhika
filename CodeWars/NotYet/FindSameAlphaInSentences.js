// [FIND SAME ALPHABET IN SENTENCES]
// Mencari Huruf Yang Sama Diantara Kedua Kalimat
// Status : Done

function longest(s1, s2) {
    var str2 = s2
    var count = 0
    var output = ''

    for(var i = 0; i < s1.length; i++){
        for(var j = 0; j < str2.length; j++){
            if((s1[i].toLowerCase() == str2[j].toLowerCase()) && (count == 0)){
                output += s1[i]
                str2 = str2.replace(str2[j], '')
                count += 1
            }else if((s1[i].toLowerCase() == str2[j].toLowerCase()) && (count == 1)){
                str2 = str2.replace(str2[j], '')
            }

            
        }

        count = 0
        
    }

    return output
}

console.log(longest("aretheyhere", "yestheyarehere")) // Output: arethey (Karena Huruf Tersebut Terdapat Di Kedua Kalimat)