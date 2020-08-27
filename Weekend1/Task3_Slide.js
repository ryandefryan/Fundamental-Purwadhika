var z = ''
var i, j

for(i=5; i>=1; i--){
    for(j=0; j<i; j++){
        z += ' * '
    }
    z += '\n'
}
for (i=2; i<=5; i++){ // Looping 1
	for (j=0; j<i ;j++){ // Looping 2
            z = z + ' * '
        }
        z += '\n'
    }

console.log(z)