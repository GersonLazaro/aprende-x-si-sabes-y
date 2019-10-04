// TypeScript tiene tipos estáticos, pero infiere tipos cuando puede
// De esta manera, no siempre es necesario escribir anotaciones de tipo

var a = 10; // Tipo numérico
var b = true; // Booleano (verdadero o falso)
var c = "Texto"; // Cadena

// Estos dos no se pueden inferir directamente
// Cualquier tipo anulable puede coincidir con estos, por lo que ambas variables obtienen 'any' como su tipo
var d = null; // Nulo
var e = undefined; // Indefinido

// Variable numérica que puede tener un valor nulo en algún momento
var numeroAnulable: number | null = null