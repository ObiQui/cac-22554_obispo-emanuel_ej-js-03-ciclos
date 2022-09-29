function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #03\n————————————————————`);

        // Definir variables
        let _numero;
        let _multiplicador;
        const _limite = 11;
        const _n0 = 0;
        const _n1 = 1;

        // Establecer el valor de la variable '_numero'
        do {
            do {
                // Ingresar el valor de A
                _numero = prompt(`A continuación deberá ingresar un número entero entre 1 y 10 (inclusive).`);
                if (_numero == null) {
                    console.log(`Ejercicio cancelado.`);
                    return;
                }
    
                // Verificar si el caracter ingresado es un número
                if (isNaN(_numero)) {
                    alert(`No se ha ingresado no un número.`);
                }
            } while (isNaN(_numero));
    
            // Verificar si el número ingresado es un entero
            if (_numero % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\n`);
            }
        } while (_numero % _n1 != _n0);

        // Aplicar la función parseInt a los números ingresados
        _numero = parseInt(_numero);

        // Presentar número
        console.log(`A continuación se presentará\nla tabla de multiplicación del número ${_numero}.`);
        
        alert(`A continuación se presentará\nla tabla de multiplicación del número ${_numero}.`);

        // Presentar tabla de multiplicación del número escojido
        for (_multiplicador = _n0; _multiplicador < _limite; _multiplicador++) {
            console.log(`${_numero} x ${_multiplicador} = ${_numero*_multiplicador}`);
        }
}

document.getElementById("start03").onsubmit = iniciar;