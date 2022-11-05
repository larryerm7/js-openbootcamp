let i= 1;
let resultado = 1;
while (i < 15) {
    if (i === 11) {
        break;
    }
    resultado*= i;
    i++;
}
console.log(resultado);
