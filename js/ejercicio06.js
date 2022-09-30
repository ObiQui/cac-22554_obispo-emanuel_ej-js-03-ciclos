function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #06\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;

    let _cant = 0;
    let _precio = 0;
    let _totalVentas = 0;
    let _conteo = 1;

    const _n0 = 0;
    const _n1 = 1;
    const _n100 = 100;

    let _quit = false;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // MENSAJE
    console.log("El dueño de un negocio va a cerrar la caja, primero debe registrar la cantidad de ventas del día, y a continuación el valor de cada producto vendido.")

    alert("El dueño de un negocio va a cerrar la caja, primero debe registrar la cantidad de ventas del día, y a continuación el valor de cada producto vendido.")



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

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
        _cant = ingresarNumero(`¿Cuantos productos se vendieron en el día?.\nSolo se admiten números enteros.`);

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
            console.log(`Productos vendidos: ${_cant}.\n————————————————————`);

            alert(`El número no es un entero, por tanto, los decimales serán truncados.\nProductos vendidos: ${_cant}.`);

        } else {

            // Aplicar la función parseInt al valor ingresado
            _cant = parseInt(_cant);

            //Mensaje
            console.log(`Productos vendidos: ${_cant}.\n————————————————————`);
        }
    }

    // Acumular el valor total de las ventas
    for (_conteo = 1; _conteo <= _cant; _conteo++) {

        // Obtener la altura de un jugador
        _precio = ingresarNumero(`Registrar el precio del producto #${_conteo}.\nSe admiten números positivos.`);

        // Aplicar la función parseFloat al valor ingresado
        _precio = parseFloat(_precio);

        // Si se ha presionado el botón "Cancelar" en el prompt
        if (_quit == true) {
            // Cerrar el ejercicio
            console.log(`Ejercicio cancelado.\n————————————————————`);
            return;
        }

        // Presentar nueva entrada
        console.log(`Producto #${_conteo}: $${_precio}.\n————————————————————`);

        // Sumar '_precio' a la variable 'totalEstaturas'
        _totalVentas = (_totalVentas + _precio);

        // Aplicar la función parseFloat al valor asignado
        _totalVentas = parseFloat(_totalVentas);
    }

    // Redondear ingresos
    _totalVentas = Math.round(_totalVentas * _n100)/_n100;
    
    // Presentar datos
    console.log(`El total de ingresos por ventas es: ${_totalVentas}\n————————————————————`);
}

document.getElementById("start06").onsubmit = iniciar;