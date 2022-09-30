function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #08\n————————————————————`);

    // Definir variables
    let _cant = 0;
    let _lista = [0];
    let _nMayor = 0;
    let _conteo;
    let _temp;
    const _n0 = 0;
    const _n1 = 1;

    // Mensaje
    console.log("Ingresa un número entero para el elemento *A*.\nA continuación deberá ingresar una cantidad *A* de números enteros.\n————————————————————")

    alert("Ingresa un número entero para el elemento *A*.\nA continuación deberá ingresar una cantidad *A* de números enteros.")

    // Establecer el valor de la variable '_temp'
    function ingresarNumero() {
        do {
            if (_cant == _n0) {
                _temp = prompt(`Ingrese un valor para el elemento *A*.\nSolo se admiten números enteros positivos.`);
            } else {
                _temp = prompt(`Ingresá un número entero positivo.`);
            }

            // Si se presiona "Cancelar" en el prompt
            if (_numero == null) {
                // Cancelar el ejercicio
                console.log(`Ejercicio cancelado.`);
                _numero = "quit";
                return;
            }

            if (isNaN(_temp)) {
                // Verificar si el caracter ingresado es un número
                alert(`Ha ingresado: ${_temp}.\nDebe ingresar un número.`);
    
            } else if (_temp % _n1 != _n0) {
                // Verificar si el número ingresado es un entero
                alert(`Ha ingresado: ${_temp}.\nEl número ingresado debe ser un entero.`);
    
            } else if (_temp < _n1) {
                // Verificar si el número ingresado es mayor a cero
                alert(`Ha ingresado: ${_temp}.\nEl número ingresado debe ser positivo.`);
            }
        } while (isNaN(_temp) || (_temp % _n1 != _n0) || (_temp < _n1));
    }

    // Asignar un valor a la variable '_cant'
    while (_cant < _n1) {

        // Obtener un valor para '_temp'
        ingresarNumero();

        // Aplicar la función parseInt al número ingresado
        _temp = parseInt(_temp);

        // Asignar el valor de '_temp' a la variable '_cant'
        _cant = _temp;
    }

    // Acumular números en 'listItems'
    for (_conteo = 0; _conteo < _cant; _conteo++) {

        // Cancelar ejercicio
        if (_temp == "quit") {
            return;
        }

        // Obtener un nuevo valor para '_temp'
        ingresarNumero();

        // Aplicar la función parseFloat al número ingresado
        _temp = parseInt(_temp);

        // Presentar el nuevo valor de '_temp'
        console.log(`Nueva entrada: ${_temp}\n————————————————————`);

        // Ingresar el valor de '_temp' en la lista
        _lista.push(_temp);

        // Establecer el número más grande
        if (_temp > _nMayor) {
            _nMayor = _temp;
        }
    }

    // Presentar datos finales
    console.log(`El número más grade fue ${_nMayor}.\n${_nMayor} fue ingresado en la posición #${_lista.indexOf(_nMayor)}.\n————————————————————`);
}

document.getElementById("start08").onsubmit = iniciar;