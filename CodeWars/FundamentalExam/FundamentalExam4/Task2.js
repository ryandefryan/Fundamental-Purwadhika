
var buttonsss = document.getElementById('button')


function searchPersegi(){
    var total = document.getElementById('total').value
    var output = ''

    for(var i = 0; i < total; i++){
        output += '*'.repeat(total)
        output += "<br>"
    }

    document.getElementById('result').innerHTML = output
}

function searchSegitiga1(){
    var total = document.getElementById('total').value
    var output = ''

    for(var i = 0; i < total; i++){
        output += '*'.repeat(i+1)
        output += "<br>"
    }

    document.getElementById('result').innerHTML = output
}

//   *
//  **
// ***
function searchSegitiga2(){
    var total = document.getElementById('total').value
    bintang = 1
    var output = ''

    for(var i = 0; i < total; i++){
        output += '&nbsp&nbsp'.repeat((total-1)-i)
        output += '*'.repeat(i+1)
        output += "<br>"
    }
    
    document.getElementById('result').innerHTML = output
}

function menu(){
    var menu = document.getElementById('menu').value

    if(menu == 1){
        searchPersegi()
    }else if(menu == 2){
        searchSegitiga1()
    }else if(menu == 3){
        searchSegitiga2()
    }else{
        alert('( ! ) Menu Tidak Sesuai')
    }
}

buttonsss.addEventListener('click', function (){return menu()})