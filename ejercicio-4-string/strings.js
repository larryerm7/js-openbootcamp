// Ejercicio numero 4 Strings

nombre = "Larry Eduardo"
console.log(nombre)
apellido = "Reyes Martinez"
console.log(apellido)

estudiante = `Hola me llamo ${nombre} ${apellido} tengo 26 años y 
soy estudiante de desarrollo Front-end       `

console.log(estudiante)

estudianteMayus = estudiante.toUpperCase()

console.log(estudianteMayus)

estudianteMinus = estudiante.toLowerCase()

console.log(estudianteMinus)

cantidadLetras = estudiante.length

console.log(cantidadLetras)

letraNombrePrincipio = nombre.charAt()

console.log(letraNombrePrincipio)

letraApellidoFin = apellido.slice(-1)

console.log(letraApellidoFin)

eliminarEspacios = estudiante.trim()

console.log(eliminarEspacios)

console.log(eliminarEspacios.length)

incluidoNombre = estudiante.includes(nombre)

console.log(incluidoNombre)
