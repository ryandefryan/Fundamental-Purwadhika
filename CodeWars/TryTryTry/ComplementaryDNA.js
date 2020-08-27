function DNAStrand(dna){
    var output = ''
    for(var i = 0; i < dna.length; i++){
        if(dna[i] == 'A'){
            output += 'T'
        }else if(dna[i] == 'C'){
            output += 'G'
        }else if(dna[i] == 'G'){
            output += 'C'
        }else if(dna[i] == 'T'){
            output += 'A'
        }
    }

    return output
}

//console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
//console.log(DNAStrand("GTAT"));