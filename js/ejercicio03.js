function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #03\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;

    let _numero = 0;
    let _multiplicador;

    const _limite = 10;
    const _n0 = 0;
    const _n1 = 1;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // MENSAJE

    console.log(`Al ingresar un número entre 1 y 10 (inclusive) se le presentará la tabla de multiplicación de dicho número.`);

    alert(`Al ingresar un número entre 1 y 10 (inclusive) se le presentará la tabla de multiplicación de dicho número.`);



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
            if (isNaN(_temp) || (_temp < _n1) || (_temp > _limite) || (_temp % _n1 != _n0)) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número entero entre 1 y 10 (inclusive).`);
            }

        } while (isNaN(_temp) || (_temp < _n1) || (_temp > _limite) || (_temp % _n1 != _n0));

        // Regresar valor de '_temp'
        return _temp;
    }



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Asignar un valor a la variable '_numero'
    while ((_numero < _n1)) {
        _numero = ingresarNumero(`Ingresar un número entero entre 1 y 10 (inclusive).\n————————————————————`);
    }

    // Aplicar la función parseInt al número ingresado
    _numero = parseInt(_numero);

    // Presentar tabla de multiplicación del número escojido
    for (_multiplicador = _n0; _multiplicador <= _limite; _multiplicador++) {
        console.log(`${_numero} x ${_multiplicador} = ${_numero*_multiplicador}`);
    }
}

document.getElementById("start03").onsubmit = iniciar;