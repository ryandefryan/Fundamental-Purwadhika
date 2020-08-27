// [SONG DECORDER]
// Menghilangkan "WUB"
// Status : Done

function songDecoder(song){
    var tempOutput = []
    var output = ''

    for(var i = 0; i < song.length; i++){
        if((!(song [i] == 'W' || song [i] == 'U' || song [i] == 'B') || (song[i] == song[i+1]))){
            tempOutput.push(song[i])
        }
    }

    output = tempOutput.toString().replace(/,/g, ' ')

    return output
}

console.log(songDecoder("AWUBBWUBC")) // Output: "A B C"
console.log(songDecoder("AWUBWUBBWUBC")) // Output : "A B C"
console.log(songDecoder("AWUBWUBWUBWUBWUBCDAWUBWUBB")) // Output : "A C D A B"