// En TypeScript (y JavaScript también), no hay una estructura explícita de datos vectoriales
// Pero las Array APIs ofrecen una funcionalidad similar

var a = new Array<number>();
// Insertar
a.push(32);
// Obten valor en un índice
a[1];
// Modifica el elemento dado (0) con el valor dado (25)
a[0] = 25;
// Elimina valor en un índice dado
a.splice(3, 1); // Elimina un elemento, comenzando en el índice 3
// Elimina todos
a.splice(0, a.length);
// Obten tamaño
a.length;