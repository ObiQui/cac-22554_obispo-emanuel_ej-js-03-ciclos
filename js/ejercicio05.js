function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #05\n————————————————————`);

    // Definir variables
    let _temp1 = 0;
    let _temp2 = "primera";
    let _edadA = 0;
    let _edadB = 0;
    let _edadC = 0;
    let _edadD = 0;
    let _edadE = 0;
    const _mayoriaEdad = 18;
    const _n0 = 0;
    const _n1 = 1;
    const _n2 = 2;

    // Mensaje
    alert("En este ejercicio, deberá ingresar la edad de 5 personas.")
    console.log("En este ejercicio, deberá ingresar la edad de 5 personas.")

    // Establecer el valor de la variable '_temp1'
    function edad() {
        do {
            do {
                do {
                    // Ingresar el valor de A
                    _temp1 = prompt(`Ingresar la edad de la ${_temp2} persona.\nSolo se admiten números naturales.`);

                    // Si se presiona "Cancelar" en el prompt
                    if (_temp1 == null) {
                        // Cancelar ejercicio
                        console.log(`Ejercicio cancelado.`);
                        _temp1 = "quit";
                        return;
                    }
        
                    // Verificar si el caracter ingresado es un número
                    if (isNaN(_temp1)) {
                        alert(`Ha ingresado: ${_temp1}.\nDebe ingresar un número.`);
                    }
                } while (isNaN(_temp1));
        
                // Verificar si el número ingresado es un entero
                if (_temp1 % _n1 != _n0) {
                    alert(`El número ingresado debe ser un entero.`);
                }
            } while (_temp1 % _n1 != _n0);
    
            if (_temp1 < _n1) {
                alert(`El número ingresado debe ser positivo.`);
            }
        } while (_temp1 < _n1);
    }


    function presentar() {

        // Presentar datos
        if (_temp1 > _mayoriaEdad) {
            // La persona es mayor de edad
            if (_temp1 % _n2 == _n0) {
                // Es número par
                console.log(`
                ————————————————————
                La ${_temp2} persona es mayor de edad.
                ${_temp1} es un número par.
                ————————————————————`);

            } else {
                // Es número par
                console.log(`
                ————————————————————
                La ${_temp2} persona es mayor de edad.
                ${_temp1} es un número impar.
                ————————————————————`);
            }

        } else {
            // La persona es menor de edad
            if (_temp1 % _n2 == _n0) {
                // Es número par
                console.log(`
                ————————————————————
                La ${_temp2} persona es menor de edad.
                ${_temp1} es un número par.
                ————————————————————`);

            } else {
                // Es número par
                console.log(`
                ————————————————————
                La ${_temp2} persona es menor de edad.
                ${_temp1} es un número impar.
                ————————————————————`);
            }
        }
    }

    // Aplicar la función parseInt al número ingresado
    _temp1 = parseInt(_temp1);

    // Verificar si todas las edades han sido ingresadas
    while ((_edadA == _n0) || (_edadB == _n0) || (_edadC == _n0) || (_edadD == _n0) || (_edadE == _n0)) {

        // Activar función
        edad();

        if (_edadE == 0 && _edadD != 0) {
            // Si _edadE es igual a 0, asignarle el valor de temp
            if (_temp1 == "quit") {
                return;
            }
            presentar();
            _edadE = _temp1;
        }

        if (_edadD == 0 && _edadC != 0) {
            // Si _edadD es igual a 0, asignarle el valor de temp
            if (_temp1 == "quit") {
                return;
            }
            presentar();
            _edadD = _temp1;
            _temp2 = "quinta";
        }

        if (_edadC == 0 && _edadB != 0) {
            // Si _edadC es igual a 0, asignarle el valor de temp
            if (_temp1 == "quit") {
                return;
            }
            presentar();
            _edadC = _temp1;
            _temp2 = "cuarta";
        }

        if (_edadB == 0 && _edadA != 0) {
            // Si _edadB es igual a 0, asignarle el valor de temp
            if (_temp1 == "quit") {
                return;
            }
            presentar();
            _edadB = _temp1;
            _temp2 = "tercera";
        }

        if (_edadA == 0) {
            // Si _edadA es igual a 0, asignarle el valor de temp
            if (_temp1 == "quit") {
                return;
            }
            presentar();
            _edadA = _temp1;
            _temp2 = "segunda";
        }
    }
}

document.getElementById("start05").onsubmit = iniciar;