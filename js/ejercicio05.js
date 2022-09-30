function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #05\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _temp;

    let _edad = 0;
    let _conteo = 1;

    const _personas = 5;
    const _edadMínima = 0;
    const _mayoriaDeEdad = 18;
    const _edadMaxima = 120;
    const _n0 = 0;
    const _n1 = 1;
    const _n2 = 2;

    let _yearsEdad = "año";         // Singular "año" o plural "años" para la edad recolectada
    let _yearsMinima = "años";      // Singular "año" o plural "años" para la edad mínima

    let _quit = false;


    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // MENSAJE

    console.log(`En este ejercicio, deberá ingresar la edad de ${_personas} personas.`)

    alert(`En este ejercicio, deberá ingresar la edad de ${_personas} personas.`)



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
            if (isNaN(_temp) || _temp < _edadMínima) {
                alert(`Ha ingresado: ${_temp}.\nDebes ingresar un número positivo.\n————————————————————`);
            }

        } while (isNaN(_temp) || (_temp < _edadMínima));

        // Regresar valor de '_temp'
        return _temp;
    }

    function asignarEdad() {

        // Presentar datos
        if (_edad > _mayoriaDeEdad) {
            // La persona es mayor de edad

            if (_edad % _n2 == _n0) {
                // Es número par
                console.log(`
                ————————————————————
                La persona #${_conteo} es mayor de edad.
                ${_edad} es un número par.
                ————————————————————`);

            } else {
                // Es número par
                console.log(`
                ————————————————————
                La persona #${_conteo} es mayor de edad.
                ${_edad} es un número impar.
                ————————————————————`);
            }

        } else {
            // La persona es menor de edad

            if (_edad % _n2 == _n0) {
                // Es número par
                console.log(`
                ————————————————————
                La persona #${_conteo} es menor de edad.
                ${_edad} es un número par.
                ————————————————————`);

            } else {
                // Es número par
                console.log(`
                ————————————————————
                La persona #${_conteo} es menor de edad.
                ${_edad} es un número impar.
                ————————————————————`);
            }
        }
    }



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Verificar singular o plural de la edad mínima
    if (_edadMínima == _n1) {
        _yearYears = "año";
    } else {
        _yearYears = "años";
    }

    // Acumular el valor total de las Alturas
    for (_conteo = 1; _conteo <= _personas; _conteo++) {

        // Obtener la altura de un jugador
        _edad = ingresarNumero(`Ingrese la edad de la persona #${_conteo}.\nSolo se admiten edades entre 0 y 120 (inclusive).`);

        // Verificar singular o plural de la edad registrada
        if (_edad == _n1) {
            _yearsEdad = "año";
        } else {
            _yearsEdad = "años";
        }


        // Si se ha presionado el botón "Cancelar" en el prompt
        if (_quit == true) {
            // Cerrar el ejercicio
            console.log(`Ejercicio cancelado.\n————————————————————`);
            return;
        }

        if (_edad < _edadMínima) {

            // Verificar si el número ingresado es un entero
            alert(`Ha ingresado: ${_edad} ${_yearsEdad}.\nIngrese una edad mayor a ${_edadMínima} ${_yearsMinima}.`);

            // Retroceder el conteo una vez debido al error
            _conteo--

        } else if (_edad > _edadMaxima) {

            // Verificar si el número ingresado es mayor a la edad máxima
            alert(`Ha ingresado: ${_edad} ${_yearsEdad}.\nIngrese una edad menor a ${_edadMaxima} años.`);

            // Retroceder el conteo una vez debido al error
            _conteo--

        } else if (_edad % _n1 != _n0) {

            // Aplicar la función parseInt al valor ingresado
            _edad = parseInt(_edad);

            alert(`El número ingresado no es un entero, por tanto, los decimales serán truncados.`);

            // Asignar edad a la persona correspondiente
            asignarEdad();

        } else {

            // Asignar edad a la persona correspondiente
            asignarEdad();
        }
    }
}

document.getElementById("start05").onsubmit = iniciar;