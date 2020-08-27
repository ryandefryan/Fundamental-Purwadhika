// [COUNTRY LANGUAGE]
// Status : -

function greet(language) {
	var dataCountry = [
    'english', 'czech', 'danish', 'dutch', 'estonian', 'finnish', 'flemish',
    'french', 'german', 'trish', 'italian', 'latvian', 'lithuanian', 'polish',
    'spanish', 'swedish', 'welsh'
  ]
  
  var dataLanguage = [
    'Welcome', 'Vitejte', 'Velkomst', 'Welkom', 'Tere tulemast', 'Tervetuloa', 'Welgekomen',
    'Bienvenue', 'Willkommen', 'Failte', 'Benvenuto', 'Gaidits', 'Laukiamas', 'Witamy',
    'Bienvenido', 'Valkommen', 'Croeso'
  ]
  
  var output = ''
  for(var i = 0; i < dataCountry.length; i++){
    if(dataCountry[i] == language){
        output += dataLanguage[i]
    }
  }

  return output
}

console.log(greet('english'))