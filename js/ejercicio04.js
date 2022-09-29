function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #04\n————————————————————`);

    // Definir variables
    let _numero;                // Cantidad de veces por que la operación se va a realizar
    let _producto;              // Resultado de la multiplicación
    let _multiplicador = 1;     // Número por el cual se va a multiplicar
    let _conteo = 0;            // Cantidad de veces que la operación se ha repetido
    const _multiplicando = 3;   // Número que se va a multiplicar
    const _nInvalido = 5;       // Número inválido para el multiplicador
    const _num0 = 0;
    const _num1 = 1;

    // Establecer el valor de la variable '_numero'
    do {
        do {
            do {
                // Ingresar el valor de A
                _numero = prompt(`Ingresar un número natural.\n(Número entero positivo.)`);

                // Si se presiona "Cancelar" en el prompt
                if (_numero == null) {
                    // Cancelar ejercicio
                    console.log(`Ejercicio cancelado.`);
                    return;
                }
    
                // Verificar si el caracter ingresado es un número
                if (isNaN(_numero)) {
                    alert(`Ha ingresado: ${_numero}.\nDebe ingresar un número.`);
                }
            } while (isNaN(_numero));
    
            // Verificar si el número ingresado es un entero
            if (_numero % _num1 != _num0) {
                alert(`Ha ingresado: ${_numero}.\nEl número ingresado no es un entero.`);
            }
        } while (_numero % _num1 != _num0);

        // Verificar si el número ingresado es positivo
        if (_numero < _num1) {
            alert(`Ha ingresado: ${_numero}.\nEl número ingresado debe ser positivo.`);
        }
    } while (_numero < _num1);

    // Aplicar la función parseInt a los números ingresados
    _numero = parseInt(_numero);

    // Mesaje
    console.log(`El número ingresado es: ${_numero}\nA continuación se presentará una secuencia con la tabla de multiplicación del ${_multiplicando}, la cual se prolongará tantas veces como el número que ha ingresado; omitiendo las ocaciones donde el resultado sea múltiplo de ${_nInvalido}.`);

    alert(`El número ingresado es: ${_numero}\nA continuación se presentará una secuencia con la tabla de multiplicación del ${_multiplicando}, la cual se prolongará tantas veces como el número que ha ingresado; omitiendo las ocaciones donde el resultado sea múltiplo de ${_nInvalido}.`);

    // Procesar datos
    for ( _multiplicador = _num1; _conteo < _numero; _multiplicador++) {

        // Calcular producto
        _producto = _multiplicando * _multiplicador;

        // Presentar datos en la consola
        if (_producto % _nInvalido != _num0) {
            // El producto no inválido
            console.log(`${_multiplicando} x ${_multiplicador} = ${_producto}`)
            _conteo++
        }
    }
}

document.getElementById("start04").onsubmit = iniciar;