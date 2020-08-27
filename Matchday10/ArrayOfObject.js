var data = [
    {username : 'ryandefryan', password : '2i2020'},
    {username : 'dimasalfarizi', password : 'dimas26'},
    {username : 'baghost16', password : '161616'},
]

// ***************
// READ

// Hardcode :
//              console.log(data[0].username + ' dengan password ' + data[0].password)
//              console.log(data[1].username + ' dengan password ' + data[1].password)
//              console.log(data[2].username + ' dengan password ' + data[2].password)

for(var i = 0; i < data.length; i++){
    console.log(data[i].username + ' dengan password ' + data[i].password)
}



// ***************
// UPDATE

data[0].username = 'masdef'

for(var i = 0; i < data.length; i++){
    console.log(data[i].username + ' dengan password ' + data[i].password)
}



// ***************
// DELETE

data.splice(0,1) // Menghapus data ke-0 

for(var i = 0; i < data.length; i++){
    console.log(data[i].username + ' dengan password ' + data[i].password)
}
