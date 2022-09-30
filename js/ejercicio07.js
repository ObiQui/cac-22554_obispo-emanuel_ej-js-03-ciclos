function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #07\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;

    let _cant = 0;
    let _estatura;
    let _totalEstaturas = 0;
    const _alturaMinima = 0.5;
    const _alturaMaxima = 3;
    let _promedio;
    let _conteo = 1;

    const _n0 = 0;
    const _n1 = 1;
    const _n100 = 100;

    let _quit = false;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // MENSAJE

    console.log("Unos jugadores de basket quieren determinar cual es la altura promedio entre ellos.\nIngresa la cantidad de participaran en el sondeo y la altura de cada uno.\n————————————————————")

    alert("Unos jugadores de basket quieren determinar cual es la altura promedio entre ellos.\nIngresa la cantidad de participaran en el sondeo y la altura de cada uno.")



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
            if (isNaN(_temp) || _temp < _n1) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número positivo.\n————————————————————`);
            }

        } while (isNaN(_temp) || (_temp < _n1));

        // Regresar valor de '_temp'
        return _temp;
    }



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Asignar un valor a la variable '_cant'
    while (_cant < _n1) {

        // Asignar el valor de '_temp' a la variable '_cant'
        _cant = ingresarNumero(`¿Cuantos jugadores se medirán?.\nSolo se admiten números enteros.`);

        // Si se ha presionado el botón "Cancelar" en el prompt
        if (_quit == true) {
            // Cerrar el ejercicio
            console.log(`Ejercicio cancelado.\n————————————————————`);
            return;
        }

        // Verificar si el número ingresado es un entero
        if (_cant % _n1 != _n0) {

            // Aplicar la función parseInt al valor ingresado
            _cant = parseInt(_cant);

            //Mensaje
            console.log(`Jugadores que participarán del sondeo: ${_cant}.\n————————————————————`);

            alert(`El número no es un entero, por tanto, los decimales serán truncados.\nJugadores que participarán del sondeo: ${_cant}.`);

        } else {

            // Aplicar la función parseInt al valor ingresado
            _cant = parseInt(_cant);

            //Mensaje
            console.log(`Jugadores que participarán del sondeo: ${_cant}.\n————————————————————`);
        }
    }

    // Acumular el valor total de las Alturas
    for (_conteo = 1; _conteo <= _cant; _conteo++) {

        // Obtener la altura de un jugador
        _estatura = ingresarNumero(`Ingresar altura del jugador #${_conteo}.\nSe admiten números positivos entre ${_alturaMinima} y 3 metros.`);

        // Aplicar la función parseFloat al valor ingresado
        _estatura = parseFloat(_estatura);

        // Si se ha presionado el botón "Cancelar" en el prompt
        if (_quit == true) {
            // Cerrar el ejercicio
            console.log(`Ejercicio cancelado.\n————————————————————`);
            return;
        }

        if (_estatura < _alturaMinima) {
            // Verificar si el número ingresado es un entero
            alert(`Ha ingresado: ${_estatura}.\nLa altura en metros debe ser mayor a ${_alturaMinima}.`);

            // Retroceder el conteo una vez debido al error
            _conteo--

        } else if (_estatura > _alturaMaxima) {
            // Verificar si el número ingresado es un entero
            alert(`Ha ingresado: ${_estatura}.\nLa altura en metros debe ser menor a ${_alturaMaxima}.`);

            // Retroceder el conteo una vez debido al error
            _conteo--

        } else {
            // Presentar nueva entrada
            console.log(`Altura del jugador #${_conteo}: ${_estatura} mts.\n————————————————————`);

            // Sumar '_estatura' a la variable 'totalEstaturas'
            _totalEstaturas = (_totalEstaturas + _estatura);

            // Aplicar la función parseFloat al valor asignado
            _totalEstaturas = parseFloat(_totalEstaturas);
        }
    }

    // Averiguar el promedio
    _promedio = _totalEstaturas/_cant;

    // Redondeo
    _promedio = Math.round(_promedio * _n100)/_n100;

    // Presentar datos
    console.log(`El promedio de altura entre los jugadores es de ${_promedio} mts.\n————————————————————`);
}

document.getElementById("start07").onsubmit = iniciar;