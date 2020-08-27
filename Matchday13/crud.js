// *************** DATA ***************

class Kucing{
    constructor(nama, bulu, berat, umur, jenis, foto){
        this.nama = nama
        this.warnaBulu = bulu
        this.berat = berat
        this.umur = umur
        this.jenis = jenis
        this.foto = foto          
    }
}

var dataKucing = [
    new Kucing('Emoy', 'Oren', '5', '2', 'Lokal', 'https://lh3.googleusercontent.com/Yyoqp2XhqcCRXsNYhifZU2F3nmPx0_J9Om8Bytf3FeESaimVb0GdrI9tL77RBj-K_5q3n4TBBTZkVv1098oGLCXYCcNzm-U93sbIlaMJPz2NmJMQ0Z0jcLayI0tg7VnbEOsjhub8FldR43qoxlIJSHtTUPwQ0Ct82563SF0JIeNRjV1bcIH1ief0ac6oI6yOb7BvrcJIIfW-y14PLriiu9uBvJ0PIgu8XNmtwuQJ2ub-dHWYrMk2AJ3bU8pMX-kHSS0vSEaN2a-8CFlB_aqFmtoojhzQxclTmcwU9B1QdgSUXWTS8ugCFswgYDHe_-NoMrPqM59hGlg_io9S4M3nZsV7I8PruzAN_0HSv-gQjpHUKLzo6Zt7YrLeq-nwqFhMq2LdDPA5qznukQTf6qTYJcNfOTvmrHpYP_u9WY2jfPk2jm85TnCFKRwAkaFlXsdl1SP8fzRdKTTDxYYCY_26yUsVKcGemEDvVVsPYP0JAL0yggNJnnU8PwJCNBMZ4ogXCAdyeC0BBv8dQVz3-KSXDKpLvpt7lsfcCXJCVCJFo2Q7SITE4DiauXBSne3Uc66KwpE5sl0_yg5Gz6e4gtHxHQR2b36HXmC1bw_dRUc6Mh2axq7_xXW_7Amy30YjE_GdYLY7noUQ14U0PJjydyddRE1wNjaKnxI5HWhp-6ijCsYMpcjfTNj6pV_RY4rYfg=w1112-h625-no?authuser=0'),
    new Kucing('Emoy', 'Oren', '5', '2', 'Angora', 'https://lh3.googleusercontent.com/Yyoqp2XhqcCRXsNYhifZU2F3nmPx0_J9Om8Bytf3FeESaimVb0GdrI9tL77RBj-K_5q3n4TBBTZkVv1098oGLCXYCcNzm-U93sbIlaMJPz2NmJMQ0Z0jcLayI0tg7VnbEOsjhub8FldR43qoxlIJSHtTUPwQ0Ct82563SF0JIeNRjV1bcIH1ief0ac6oI6yOb7BvrcJIIfW-y14PLriiu9uBvJ0PIgu8XNmtwuQJ2ub-dHWYrMk2AJ3bU8pMX-kHSS0vSEaN2a-8CFlB_aqFmtoojhzQxclTmcwU9B1QdgSUXWTS8ugCFswgYDHe_-NoMrPqM59hGlg_io9S4M3nZsV7I8PruzAN_0HSv-gQjpHUKLzo6Zt7YrLeq-nwqFhMq2LdDPA5qznukQTf6qTYJcNfOTvmrHpYP_u9WY2jfPk2jm85TnCFKRwAkaFlXsdl1SP8fzRdKTTDxYYCY_26yUsVKcGemEDvVVsPYP0JAL0yggNJnnU8PwJCNBMZ4ogXCAdyeC0BBv8dQVz3-KSXDKpLvpt7lsfcCXJCVCJFo2Q7SITE4DiauXBSne3Uc66KwpE5sl0_yg5Gz6e4gtHxHQR2b36HXmC1bw_dRUc6Mh2axq7_xXW_7Amy30YjE_GdYLY7noUQ14U0PJjydyddRE1wNjaKnxI5HWhp-6ijCsYMpcjfTNj6pV_RY4rYfg=w1112-h625-no?authuser=0')
]

// ***************

// *************** FUNCTION ***************
function showData(){
    var output = `<tr>
                  <td><b>Nama</b></td>
                  <td><b>Warna Bulu</b></td>
                  <td><b>Berat</b></td>
                  <td><b>Umur</b></td>
                  <td><b>Jenis</b></td>
                  <td><b><center>Foto</b></td>
                  <td><b><center>Action</b></td>
                  </tr>`
    for(var i = 0; i < dataKucing.length; i++){
        output += '<tr>' +
                  '<td>' + dataKucing[i].nama + '</td>' + 
                  '<td>' + dataKucing[i].warnaBulu + '</td>' +
                  '<td>' + dataKucing[i].berat + '</td>' +
                  '<td>' + dataKucing[i].umur + '</td>' +
                  '<td>' + dataKucing[i].jenis + '</td>' +
                  '<td> <img src="' + dataKucing[i].foto + '" width="100px"> </td>' +
                  '<td> <input type="button" onclick="updateData('+ i +')" value="Edit" /> <input type="button" onclick="deleteData('+ i +')" value="Delete"> </td>'
    }
    var table = document.getElementById('dataTable')
    table.innerHTML = output
}

function addData(){
    alert('( ! ) Data Added Succesfull')
    var inputs = document.getElementsByClassName('inputBox')
    var namaKucing = inputs[0].value
    var warnaBulu = inputs[1].value
    var berat = inputs[2].value
    var umur = inputs[3].value
    var jenis = inputs[4].value
    var foto = inputs[5].value

    var obj = new Kucing(namaKucing,warnaBulu,berat,umur,jenis,foto)
    dataKucing.push(obj)
    showData()
}

function updateData(index){
    var dataToEdit = dataKucing[index]
    var inputs = document.getElementsByClassName('inputBox')
    inputs[0].value = dataToEdit.nama
    inputs[1].value = dataToEdit.warnaBulu
    inputs[2].value = dataToEdit.berat
    inputs[3].value = dataToEdit.umur
    inputs[4].value = dataToEdit.jenis
    inputs[5].value = dataToEdit.foto

    var buttonSubmit = document.getElementById('buttonSubmit')
    buttonSubmit.value = 'Save'

    buttonSubmit.removeEventListener('click', addData)
    buttonSubmit.addEventListener('click', function(){onSaveClick(index); this.removeEventListener('click', arguments.callee);})

    var buttonCancel = document.getElementById('buttonCancel')
    buttonCancel.style = 'display: inline'

    buttonCancel.addEventListener('click', onCancelClick)
}

function onCancelClick(){
    var inputs = document.getElementsByClassName('inputBox')

    inputs[0].value = '' 
    inputs[1].value = '' 
    inputs[2].value = '' 
    inputs[3].value = '' 
    inputs[4].value = '' 
    inputs[5].value = '' 

    var buttonCancel = document.getElementById('buttonCancel')
    buttonCancel.style = 'display: none'

    var buttonSubmit = document.getElementById('buttonSubmit')
    buttonSubmit.value = 'Submit'

    buttonSubmit.addEventListener('click', addData)
}

function onSaveClick(index){
    alert('( ! ) Data Updated Succesfully')
    var inputs = document.getElementsByClassName('inputBox')
    var namaKucing = inputs[0].value
    var warnaBulu = inputs[1].value
    var berat = inputs[2].value
    var umur = inputs[3].value
    var jenis = inputs[4].value
    var foto = inputs[5].value

    dataKucing[index].nama = namaKucing
    dataKucing[index].warnaBulu = warnaBulu
    dataKucing[index].berat = berat
    dataKucing[index].umur = umur
    dataKucing[index].jenis = jenis
    dataKucing[index].foto = foto

    showData()
    onCancelClick()
}

function deleteData(index){
    var confirmBox = confirm('Are You Sure Want to Delete This Data?')
    if(confirmBox == true){
        dataKucing.splice(index, 1)
        alert('( ! ) Data Deleted Succesfully')
    }else{

    }

    showData()
}

// ***************

showData()
document.getElementById('buttonSubmit').addEventListener('click', addData)