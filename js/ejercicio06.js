function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #06\n————————————————————`);

    // Definir variables
    let _cant = 0;
    let _totalVentas = 0;
    let _conteo;
    let _temp;
    const _n0 = 0;
    const _n1 = 1;
    const _n100 = 100;

    // Mensaje
    console.log("El dueño de un negocio va a cerrar la caja, primero debe ingresar la cantidad de ventas del día, y a continuación el valor de cada producto vendido.")

    alert("El dueño de un negocio va a cerrar la caja, primero debe ingresar la cantidad de ventas del día, y a continuación el valor de cada producto vendido.")

    // Establecer el valor de las variables '_cant' y '_totalVentas'
    function cantidad() {
        do {
            do {
                do {
                    // Ingresar un número '_cant'
                    if (_cant == 0) {
                        _temp = prompt(`Ingresá la cantidad de ventas del día.\nSolo se admiten números enteros.`);
                        if (_temp == null) {
                            console.log(`Ejercicio cancelado.`);
                            _temp = "quit";
                            return;
                        }
                    }

                    // Verificar si el caracter ingresado es un número
                    if (isNaN(_temp)) {
                        alert(`Ha ingresado: ${_temp}.\nDebe ingresar un número.`);
                    }
                } while (isNaN(_temp));

                // Verificar si el número ingresado es un entero
                if (_temp % _n1 != _n0) {
                    alert(`El número ingresado debe ser un entero.`);
                }
            } while (_temp % _n1 != _n0);

            // Aplicar la función parseInt al número ingresado
            _temp = parseInt(_temp);

            // Verificar si el número ingresado es mayor a cero
            if (_temp < _n1) {
                alert(`El número ingresado debe ser positivo.`);
            }
        } while (_temp < _n1);
    }

    function ventas() {
        do {
            do {
                // Ingrear el valor de '_temp'
                _temp = parseFloat(prompt(`Ingresá el precio de los productos vendidos.\nSe admiten números reales positivos.`));
                if (_temp == null) {
                    console.log(`Ejercicio cancelado.`);
                    _temp = "quit";
                    return;
                }
    
                // Verificar si el caracter ingresado es un número
                if (isNaN(_temp)) {
                    alert(`Ha ingresado: ${_temp}.\nDebe ingresar un número.`);
                }
            } while (isNaN(_temp));

            // Aplicar la función parseFloat al número ingresado
            _temp = parseFloat(_temp);

            // Verificar si el número ingresado es mayor a cero
            if (_temp < _n0) {
                alert(`Ha ingresado: ${_temp}.\nDebe ingresar un número positivo.`);
            }
        } while (_temp < _n0);
    }

    // Asignar un valor a la variable '_cant'
    while (_cant < _n1) {
        cantidad();
        _cant = _temp;
    }

    // Acumular el valor total de las ventas
    for (_conteo = 0; _conteo < _cant; _conteo++) {

        if (_temp == "quit") {
            return;
        }

        ventas();
        _temp = parseFloat(_temp);
        console.log(`Nueva venta: ${_temp}\n————————————————————`);
        _totalVentas = _totalVentas + _temp;
        _totalVentas = Math.round(_totalVentas * _n100)/_n100;
    }

    // Presentar datos
    console.log(`El total de las ventas es: ${_totalVentas}\n————————————————————`);
}

document.getElementById("start06").onsubmit = iniciar;