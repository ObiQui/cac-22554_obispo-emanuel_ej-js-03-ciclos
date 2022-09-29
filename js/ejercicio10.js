function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #10\n————————————————————`);

    // Definir variables
    let _numero = 0;
    const _n0 = 0;
    const _n1 = 1;

    // Mensaje
    console.log("Ingresa un número entero positivo para el elemento *A*.\n————————————————————")

    alert("Ingresa un número entero positivo para el elemento *A*.")

    do {
        // Ingresar un número '_numero'
        _numero = prompt(`Ingrese un valor para el elemento *A*.\nSolo se admiten números enteros positivos.`);

        // Si se presiona "Cancelar" en el prompt
        if (_numero == null) {
            // Cancelar el ejercicio
            console.log(`Ejercicio cancelado.`);
            _numero = "quit";
            return;
        }

        if (isNaN(_numero)) {
            // Verificar si el caracter ingresado es un número
            alert(`Ha ingresado: ${_numero}.\nDebe ingresar un número.`);

        } else if (_numero % _n1 != _n0) {
            // Verificar si el número ingresado es un entero
            alert(`Ha ingresado: ${_numero}.\nEl número ingresado debe ser un entero.`);

        } else if (_numero < _n1) {
            // Verificar si el número ingresado es mayor a cero
            alert(`Ha ingresado: ${_numero}.\nEl número ingresado debe ser positivo.`);
        }

    } while (isNaN(_numero) || (_numero % _n1 != _n0) || (_numero < _n1));

    // Aplicar la función parseInt al número ingresado
    _numero = parseInt(_numero);

    console.log(_numero)
}

document.getElementById("start10").onsubmit = iniciar;