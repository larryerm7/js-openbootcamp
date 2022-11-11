const listaCompra = ["harina", "pollo", "arroz", "verduras", "carne"];
listaCompra.push("aceite de girasol");

console.log(listaCompra);

listaCompra.shift();

console.log(listaCompra);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listaPelis = [{titulo : "Interestlar", Director: "Christopher Nolan", Fecha: 2014},
                    {titulo : "Braveheart", Director: "Mel Gibson", Fecha: 1995},
                    {titulo : "Sherlock Holmes", Director : "Guy Ritchie", Fecha : 2009}
                ]
                
const pelis2010 = listaPelis.filter (obj => obj.Fecha > 2010);
console.log(pelis2010);

const pelisDirector = listaPelis.map( obj => obj.Director);
console.log(pelisDirector);

const titulosPelis = listaPelis.map (obj => obj.titulo);
console.log(titulosPelis);

const titulos_Directores = titulosPelis.concat(pelisDirector);
console.log(titulos_Directores);

const ti_Di = [...titulosPelis, ...pelisDirector];
console.log(ti_Di);
