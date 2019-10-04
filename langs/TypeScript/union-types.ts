// TypeScript también admite tipos de unión. Mira el ejemplo a continuación
function numeroOCadena(n: number) {
  if (n % 2 == 0) {
    return n
  } else {
    return n.toString()
  }
}

// La función numberOrString puede devolver un número o una cadena:
var numberoDos = numberOrString(2)

// Se asume que el tipo de la variable numberoDos es number | string
// Sin embargo, TypeScript observa de manera inteligente la logica del codigo y como se ramifica
// e intentara reducir el tipo mas amplio que puede tener una variable a un tipo mas especifico
if (typeof numberoDos === 'number') {
  // dentro de este bloque, numberTwo se puede usar de forma segura como un número
  var tres = numberoDos + 1
} else {
  // Y aquí, como una cadena
  var letraT = numberoDos.substring(0, 1)
}