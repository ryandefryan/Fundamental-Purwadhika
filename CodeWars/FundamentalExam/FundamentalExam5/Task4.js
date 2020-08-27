function hollowTriangle(height){
    var output = ''
    bintang = 1

    for(var i = 0; i < height; i++){
        for (var j = 0; j < height-(i+1); j++){
            output += '-'
        }
    
        for(var k = 0; k < 1; k++){
            output += '#'
        }

        if(i > 0 && i < height-1){
            for (var l = 0; l < bintang; l++){
                output += '-'
            }
            bintang += 2

            for(var k = 0; k < 1; k++){
                output += '#'
            }
        }else if(i > 0 && i < height){
            for (var l = 0; l <= bintang; l++){
                output += '#'
            }
            bintang += 2
        }

        for (var l = 0; l < height-(i+1); l++){
            output += '-'
        }

        output += '\n'
    }

    return output
}

// ----#----
// ---#-#---
// --#---#--
// -#-----#-
// #########
console.log(hollowTriangle(5))

