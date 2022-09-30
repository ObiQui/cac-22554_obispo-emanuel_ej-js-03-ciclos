function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #04\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;

    let _numero = 0;                // Cantidad de veces por que la operación se va a realizar
    let _producto;              // Resultado de la multiplicación
    let _multiplicador = 1;     // Número por el cual se va a multiplicar
    let _conteo = 0;            // Cantidad de veces que la operación se ha repetido

    const _multiplicando = 3;   // Número que se va a multiplicar
    const _nInvalido = 5;       // Número inválido para el multiplicador
    const _n0 = 0;
    const _n1 = 1;

    let _quit = false;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // MENSAJE

    console.log(`En este ejercicio deberá ingresar la longitud de una secuencia que estará constituida por la tabla de multiplicación del ${_multiplicando}, omitiendo las ocaciones donde el resultado sea múltiplo de ${_nInvalido}.`);

    alert(`En este ejercicio deberá ingresar la longitud de una secuencia que estará constituida por la tabla de multiplicación del ${_multiplicando}, omitiendo las ocaciones donde el resultado sea múltiplo de ${_nInvalido}.`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // FUNCIONES

    function ingresarNumero(_mensaje) {
        do {
            // Ingresar el número que se asignará a '_temp'
            _temp = prompt(`${_mensaje}`, 0);

            // Si se presiona "Cancelar" en el prompt
            if (_temp == null) {
                // Cancelar el ejercicio
                _quit = true;
                return;
            }

            if (_temp == "") {
                // Si no se ingreso ningún valor, el predeterminado es 0 (cero)
                _temp = _n0;
            }

            // Verificar si el número es correcto
            if (isNaN(_temp) || (_temp < _n1) || (_temp % _n1 != _n0)) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número entero positivo.`);
            }

        } while (isNaN(_temp) || (_temp < _n1) || (_temp % _n1 != _n0));

        // Regresar valor de '_temp'
        return _temp;
    }



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Asignar un valor a la variable '_numero'
    while ((_numero < _n1)) {
        _numero = ingresarNumero(`Ingresar un número entero positivo.\n————————————————————`);
    }

    // Aplicar parseInt a la variable '_numero'
    _numero = parseInt(_numero);

    // Presentar el valor de la variable '_numero'
    console.log(`Número ingresado: ${_numero}.\n————————————————————`);

    // Procesar datos
    for ( _multiplicador = _n0; _conteo < _numero; _multiplicador++) {

        // Calcular producto
        _producto = _multiplicando * _multiplicador;

        // Presentar datos en la consola
        if (_producto % _nInvalido != _n0) {
            // El producto no inválido
            console.log(`${_multiplicando} x ${_multiplicador} = ${_producto}`)
            _conteo++
        }
    }
}

document.getElementById("start04").onsubmit = iniciar;