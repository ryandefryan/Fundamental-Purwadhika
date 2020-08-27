// *************** DATA ***************

var numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]



function showData(){
    var enter = 0
    var output = ''

    for(var i = 0; i < numbers.length; i++){
        output += '<tr>'

        for(var j = 0; j < numbers.length; j++){
            output += '<td>' + numbers[i][j] + '</td>'
        }
        output += '<td> <input type="button" class="buttonSort" onclick="sortDataSamping1('+ i +')" value="Sort">'
        output += '</tr>'
    }

    output += '<tr>' +
              '<td> <input type="button" id="buttonSort5" onclick="sortDataBawah1('+ 5 +')" value="Sort"> </td>' +
              '<td> <input type="button" id="buttonSort6" onclick="sortDataBawah1('+ 6 +')" value="Sort"> </td>' +
              '<td> <input type="button" id="buttonSort7" onclick="sortDataBawah1('+ 7 +')" value="Sort"> </td>' +
              '<td> <input type="button" id="buttonSort8" onclick="sortDataBawah1('+ 8 +')" value="Sort"> </td>' +
              '</tr>'

    var table = document.getElementById('dataTable')
    table.innerHTML = output
}

    var buttonReset = document.getElementById('buttonReset')
    buttonReset.addEventListener('click', resetData)
    function resetData(){
        numbers = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ]
        showData()
    }

var buttonLeftRotate = document.getElementById('leftRotate')
buttonLeftRotate.addEventListener('click', leftRotate)
function leftRotate(){
    var totalRotate = document.getElementById('totalRotate').value
    var rotate = 0
    if(totalRotate > 0 && totalRotate <= 4){
        rotate = totalRotate
    }else{
        rotate = totalRotate % 4
    }

    var arrRotate = []
    if(rotate == 1){
        for(var i = numbers.length - 1; 0 <= i; i--){
            for(var j = 0; j < numbers.length; j++){
                arrRotate.push(numbers[j][i])
            }
        }
    
        var indexKe = 0
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                numbers[i][j] = arrRotate[indexKe]
                indexKe++
            }
        } 
    }else if(rotate == 2){
        for(var i = numbers.length - 1; 0 <= i; i--){
            for(var j = numbers.length - 1; 0 <= j; j--){
                arrRotate.push(numbers[i][j])
            }
        }
    
        var indexKe = 0
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                numbers[i][j] = arrRotate[indexKe]
                indexKe++
            }
        }
    }else if(rotate == 3){
        for(var i = 0; i < numbers.length; i++){
            for(var j = numbers.length - 1; 0 <= j; j--){
                arrRotate.push(numbers[j][i])
            }
        }
    
        var indexKe = 0
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                numbers[i][j] = arrRotate[indexKe]
                indexKe++
            }
        }
    }else if(rotate == 4){
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                arrRotate.push(numbers[i][j])
            }
        }
    
        var indexKe = 0
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                numbers[i][j] = arrRotate[indexKe]
                indexKe++
            }
        }
    }
    
    document.getElementById('totalRotate').value = ''
    showData()
}

var buttonLeftRotate = document.getElementById('rightRotate')
buttonLeftRotate.addEventListener('click', rightRotate)
function rightRotate(){
    var totalRotate = document.getElementById('totalRotate').value
    var rotate = 0
    if(totalRotate > 0 && totalRotate <= 4){
        rotate = totalRotate
    }else{
        rotate = totalRotate % 4
    }

    var arrRotate = []
    if(rotate == 1){
        for(var i = 0; i < numbers.length; i++){
            for(var j = numbers.length - 1; 0 <= j; j--){
                arrRotate.push(numbers[j][i])
            }
        }
    
        var indexKe = 0
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                numbers[i][j] = arrRotate[indexKe]
                indexKe++
            }
        }
    }else if(rotate == 2){
        for(var i = numbers.length - 1; 0 <= i; i--){
            for(var j = numbers.length - 1; 0 <= j; j--){
                arrRotate.push(numbers[i][j])
            }
        }
    
        var indexKe = 0
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                numbers[i][j] = arrRotate[indexKe]
                indexKe++
            }
        }
    }else if(rotate == 3){
        for(var i = numbers.length - 1; 0 <= i; i--){
            for(var j = 0; j < numbers.length; j++){
                arrRotate.push(numbers[j][i])
            }
        }
    
        var indexKe = 0
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                numbers[i][j] = arrRotate[indexKe]
                indexKe++
            }
        } 
    }else if(rotate == 4){
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                arrRotate.push(numbers[i][j])
            }
        }
    
        var indexKe = 0
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                numbers[i][j] = arrRotate[indexKe]
                indexKe++
            }
        }
    }
    
    document.getElementById('totalRotate').value = ''
    showData()
}


function sortDataSamping1(index){
    var sortData = numbers[index]
    sortData = sortData.sort(function(a, b){return b-a})
    numbers[index] = sortData
    
    showData()
    var buttonSort = document.getElementsByClassName('buttonSort')
    buttonSort[index].value = 'Sort'
    buttonSort[index].addEventListener('click', function(){sortDataSamping2(index); this.removeEventListener('click', arguments.callee);})
}

function sortDataSamping2(index){
    var sortData = numbers[index]
    sortData = sortData.sort(function(a, b){return a-b})
    numbers[index] = sortData

    showData()
}

function sortDataBawah1(index){
    var tempArr = []

    if(index == 5){
        // Sort -> Ditampung di tempArr
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                if(j == 0){
                    tempArr.push(numbers[i][j])
                }
            }
        }
        tempArr = tempArr.sort(function(a, b){return b-a})

       
        for(var j = 0; j < numbers.length; j++){
            numbers[j][0] = tempArr[j]
        }
       
        showData()
        var buttonSort = document.getElementById('buttonSort'+ index +'')
        buttonSort.value = 'Sort'
        buttonSort.addEventListener('click', function(){sortDataBawah2(index); this.removeEventListener('click', arguments.callee);})
    
    }else if(index == 6){
        // Sort -> Ditampung di tempArr
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                if(j == 1){
                    tempArr.push(numbers[i][j])
                }
            }
        }
        tempArr = tempArr.sort(function(a, b){return b-a})

       
        for(var j = 0; j < numbers.length; j++){
            numbers[j][1] = tempArr[j]
        }
       
        showData()
        var buttonSort = document.getElementById('buttonSort'+ index +'')
        buttonSort.value = 'Sort'
        buttonSort.addEventListener('click', function(){sortDataBawah2(index); this.removeEventListener('click', arguments.callee);})

    }else if(index == 7){
        // Sort -> Ditampung di tempArr
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                if(j == 2){
                    tempArr.push(numbers[i][j])
                }
            }
        }
        tempArr = tempArr.sort(function(a, b){return b-a})

       
        for(var j = 0; j < numbers.length; j++){
            numbers[j][2] = tempArr[j]
        }

        showData()
        var buttonSort = document.getElementById('buttonSort'+ index +'')
        buttonSort.value = 'Sort'
        buttonSort.addEventListener('click', function(){sortDataBawah2(index); this.removeEventListener('click', arguments.callee);})

    }else if(index == 8){
        // Sort -> Ditampung di tempArr
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                if(j == 3){
                    tempArr.push(numbers[i][j])
                }
            }
        }
        tempArr = tempArr.sort(function(a, b){return b-a})

       
        for(var j = 0; j < numbers.length; j++){
            numbers[j][3] = tempArr[j]
        }

        showData()
        var buttonSort = document.getElementById('buttonSort'+ index +'')
        buttonSort.value = 'Sort'
        buttonSort.addEventListener('click', function(){sortDataBawah2(index); this.removeEventListener('click', arguments.callee);})

    }
}

function sortDataBawah2(index){
    var tempArr = []

    if(index == 5){
        // Sort -> Ditampung di tempArr
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                if(j == 0){
                    tempArr.push(numbers[i][j])
                }
            }
        }
        tempArr = tempArr.sort(function(a, b){return a-b})

       
        for(var j = 0; j < numbers.length; j++){
            numbers[j][0] = tempArr[j]
        }
       
        showData()

    }else if(index == 6){
        // Sort -> Ditampung di tempArr
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                if(j == 1){
                    tempArr.push(numbers[i][j])
                }
            }
        }
        tempArr = tempArr.sort(function(a, b){return a-b})

       
        for(var j = 0; j < numbers.length; j++){
            numbers[j][1] = tempArr[j]
        }

        showData()

    }else if(index == 7){
        // Sort -> Ditampung di tempArr
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                if(j == 2){
                    tempArr.push(numbers[i][j])
                }
            }
        }
        tempArr = tempArr.sort(function(a, b){return a-b})

       
        for(var j = 0; j < numbers.length; j++){
            numbers[j][2] = tempArr[j]
        }

        showData()

    }else if(index == 8){
        // Sort -> Ditampung di tempArr
        for(var i = 0; i < numbers.length; i++){
            for(var j = 0; j < numbers.length; j++){
                if(j == 3){
                    tempArr.push(numbers[i][j])
                }
            }
        }
        tempArr = tempArr.sort(function(a, b){return a-b})

       
        for(var j = 0; j < numbers.length; j++){
            numbers[j][3] = tempArr[j]
        }

        showData()

    }
}

showData()

