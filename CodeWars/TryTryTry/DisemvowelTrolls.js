function disemvowel(str) {
    var vowels = 'aiueo'

    for(var i = 0; i < vowels.length; i++){
        for(var j = 0; j < str.length; j++){
            if(vowels[i] == str[j].toLowerCase()){
                str = str.replace(str[j], '')
            }
        }
    }
    
    return str;
}

console.log(disemvowel('Hai!'))