var a = [] //Creación. El tipo de a se convierte en any[] (any acepta cualquier tipo)
var typedA: number[] = [] // Creación con tipos explícitos

// El tipo de b es number[]
var b = [1, 2, 3, 4, 5] // Creación e inicialización


a[0] = 5 // Acceso y modificación

// Esto está bien, ya que la variable a tiene el tipo any[]
a[1] = 'foo'

// Esto arroja un error al compilar
typedA[1] = 'foo'