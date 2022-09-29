function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #07\n————————————————————`);

    // Definir variables
    let _cant = 0;
    let _totalAlturas = 0;
    let _conteo;
    let _temp;
    const _n0 = 0;
    const _n1 = 1;
    const _n100 = 100;

    // Mensaje
    console.log("Unos jugadores de basket quieren determinar cual es la altura promedio entre ellos.\nIngresa la cantidad de participaran en el sondeo y la altura de cada uno.\n————————————————————")

    alert("Unos jugadores de basket quieren determinar cual es la altura promedio entre ellos.\nIngresa la cantidad de participaran en el sondeo y la altura de cada uno.")

    // Establecer el valor de '_temp'
    function ingresarCantidad() {
        do {
            // Ingresar el número que se asignará a '_cant'
            _temp = prompt(`¿Cuantos jugadores se medirán?.\nSolo se admiten números enteros.`);

            // Si se presiona "Cancelar" en el prompt
            if (_temp == null) {
                // Cancelar el ejercicio
                console.log(`Ejercicio cancelado.`);
                _temp = "quit";
                return;
            }

            if (_temp == "" ) {
                // Verificar si se ha ingresado un valor
                alert(`No se ha ingresado ningún valor.`);

            } else if (isNaN(_temp)) {
                // Verificar si el caracter ingresado es un número
                alert(`Ha ingresado: ${_temp}.\nDebe ingresar un número.`);

            } else if (_temp < _n1) {
                // Verificar si el número ingresado es mayor a cero
                alert(`Ha ingresado: ${_temp}.\nEl número ingresado debe ser positivo.`);

            } else if (_temp % _n1 != _n0) {
                // Verificar si el número ingresado es un entero
                alert(`Ha ingresado: ${_temp}.\nEl número ingresado debe ser un entero.`);
            }

        } while (isNaN(_temp) || (_temp % _n1 != _n0) || (_temp < _n1));
    }

    function ingresarAltura() {
        do {
            // Ingrear el valor que se sumará a '_totalAlturas'
            _temp = prompt(`Ingresar altura del jugador #${_conteo + _n1}.\nSe admiten números positivos entre 0.5 metros y 3 metros.`);

            // Si se presiona "Cancelar" en el prompt
            if (_temp == null) {
                // Cancelar el ejercicio
                console.log(`Ejercicio cancelado.`);
                _temp = "quit";
                return;
            }

            if (_temp == "" ) {
                // Verificar si se ha ingresado un valor
                alert(`No se ha ingresado ningún valor.`);

            } else if (isNaN(_temp)) {
                // Verificar si el caracter ingresado es un número
                alert(`Ha ingresado: ${_temp}.\nDebe ingresar un número.`);

            } else if (_temp < _n1) {
                // Verificar si el número ingresado es mayor a cero
                alert(`Ha ingresado: ${_temp}.\nEl número ingresado debe ser positivo.`);

            } else if (_temp % _n1 != _n0) {
                // Verificar si el número ingresado es un entero
                alert(`Ha ingresado: ${_temp}.\nEl número ingresado debe ser un entero.`);
            }

        } while (isNaN(_temp) || (_temp < _n1) || (_temp < 0.5) || (_temp > 3));
    }

    // Asignar un valor a la variable '_cant'
    while (_cant < _n1) {

        // Obtener un valor para '_temp'
        ingresarCantidad();

        // Aplicar la función parseInt al valor ingresado
        _temp = parseInt(_temp);

        // Asignar el valor de '_temp' a la variable '_cant'
        _cant = _temp;
    }

    // Acumular el valor total de las Alturas
    for (_conteo = 0; _conteo < _cant; _conteo++) {

        // Si se presiona "Cancelar" en el prompt
        if (_temp == "quit") {
            return;
        }

        // Obtener la altura de un jugador
        ingresarAltura();

        // Aplicar la función parseFloat al valor ingresado
        _temp = parseFloat(_temp);

        // Presentar nueva entrada
        console.log(`Altura del jugador #${_conteo + 1}: ${_temp} mts.\n————————————————————`);

        // Sumar '_temp' a la variable '_totalAlturas'
        _totalAlturas = _totalAlturas + _temp;
    }

    // Averiguar el promedio
    _temp = _totalAlturas/_cant;

    // Redondeo
    _temp = Math.round(_temp * _n100)/_n100;

    // Presentar datos
    console.log(`El promedio de altura entre los jugadores es de ${_temp} mts.\n————————————————————`);
}

document.getElementById("start07").onsubmit = iniciar;