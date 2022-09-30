function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #02\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;

    let _nA = 0;
    let _nB = 0;
    let _conteo;

    let _lista1 = [];
    let _lista2 = [];

    const _n0 = 0;
    const _n1 = 1;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // MENSAJE

    console.log(`Ingrese el valor numérico para los elementos *A* y *B*.\nEl valor de *B* deberá ser mayor o igual a *A*.\nSolo se admitirán números enteros.\n————————————————————`);

    alert(`Ingrese el valor numérico para los elementos *A* y *B*.\nEl valor de *B* deberá ser mayor o igual a *A*.\nSolo se admitirán números enteros.`);



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
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número entero entre 1 y 10 (inclusive).`);
            }

        } while (isNaN(_temp) || (_temp < _n1) || (_temp % _n1 != _n0));

        // Regresar valor de '_temp'
        return _temp;
    }



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    _nA = ingresarNumero(`Ingresar un número entero positivo para el elemento *A*.`);

    // Aplicar la función parseInt para '_nA'
    _nA = parseInt(_nA);

    while (_nA > _nB) {
        _nB = ingresarNumero(`Ingresar un número entero positivo para el elemento *B*.`);

        // Aplicar la función parseInt para '_nB'
        _nB = parseInt(_nB);

        // Mostrar un mensaje si el número de B es menor al de A
        if (_nA > _nB) {
            alert(`El valor del elemento *B* debe ser mayor al del elemento *A*.`);
        }
    }

    // Presentar los números ingresados
    console.log(`Los números ingresados son:\nA: ${_nA}\nB: ${_nB}\n————————————————————`);

    alert(`Los números ingresados son:\nA: ${_nA}\nB: ${_nB}`);

    // Conteo de números entre *A* y *B*
    for (_conteo = _nA; _conteo <= _nB; _conteo++) {

        // Secuencia incluyendo los números ingresados
        _lista1.push(_conteo);

        // Secuencia sin incluir los números ingresados
        if (_nA == _nB - _n1) {

            // Si no hay números posibles entre *A* y *B*
            _lista2 = `(No hay números entre ${_nA} y ${_nB})`;

        } else if (_conteo != _nA && _conteo != _nB){

            // Asignar una nueva entrada a 'lista2'
            _lista2.push(_conteo);
        }
    }

    // Presentar secuencias
    console.log(`Secuencia incluyendo los números ingresados:\n${_lista1}\n————————————————————`);

    console.log(`Secuencia sin incluir los números ingresados:\n${_lista2}\n————————————————————`);
}

document.getElementById("start02").onsubmit = iniciar;