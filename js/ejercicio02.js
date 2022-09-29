function iniciar(e) {
    e.preventDefault();

    // Inicio
    console.log(`\n————————————————————\nEjercicio #02\n————————————————————`);

    // Definir variables
    let _nA;
    let _nB;
    let _conteo;
    const _n0 = 0;
    const _n1 = 1;

    // Mensaje
    console.log("A continuación deberá ingresar el valor\nnumérico para los elementos A y B.\nEl valor de B deberá ser mayor o igual a A.\nSolo se admitirán números enteros.");
    
    alert("A continuación deberá ingresar el valor\nnumérico para los elementos A y B.\nEl valor de B deberá ser mayor o igual a A.\nSolo se admitirán números enteros.");

    // Establecer el valor de las variables '_nA' y '_nB'
    do {
        do {
            // Ingresar el valor de A
            _nA = prompt(`Ingrese el valor del elemento A.`);
            if (_nA == null) {
                console.log(`Ejercicio cancelado.`);
                return;
            }

            // Verificar si el caracter ingresado es un número
            if (isNaN(_nA)) {
                alert(`No se ha ingresado no un número.`);
            }
        } while (isNaN(_nA));

        // Verificar si el número ingresado es un entero
        if (_nA % _n1 != _n0) {
            alert(`El número ingresado no es un entero.\n`);
        }
    } while (_nA % _n1 != _n0);

    do {
        do {
            do {
                // Ingresar el valor de B
                _nB = prompt(`Ingrese el valor del elemento B.\nRecuerde que debe escribir un número mayor o igual que el ingresado para el elementos A.`);
                if (_nB == null) {
                    console.log(`Ejercicio cancelado.`);
                    return;
                }
    
                // Verificar si el caracter ingresado es un número
                if (isNaN(_nB)) {
                    alert(`No se ha ingresado no un número.`);
                }
            } while (isNaN(_nB));
    
            // Verificar si el número ingresado es un entero
            if (_nB % _n1 != _n0) {
                alert(`El número ingresado no es un entero.\n`);
            }
        } while (_nB % _n1 != _n0);

    } while (_nA > _nB);

    // Aplicar la función parseInt a los números ingresados
    _nA = parseInt(_nA);
    _nB = parseInt(_nB);

    // Presentar los números ingresados
    console.log(`
    ————————————————————
    Los números ingresados son:
    A: ${_nA}
    B: ${_nB}
    ————————————————————`);

    // Si A es menor a (B - 1), presentar los números existentes entre A y B
    if (_nA < _nB - 1) {

        // Mensaje
        console.log(`Ahora se presentará una secuencia con los números existentes entre los elementos A(${_nA}) y B(${_nB}).`);
        alert(`Ahora se presentará una secuencia con los números existentes entre los elementos A(${_nA}) y B(${_nB}).`);

        for (_conteo = (_nA + 1); _conteo < _nB; _conteo++) {
            console.log(_conteo);
        }

    } else {
        console.log(`Si la diferencia entre los elementos A y B fuese mayor a 1, a continuación se habría presentado una secuencia con los números existentes entre los elementos A(${_nA}) y B(${_nB}). Pero no es posible ya que no hay números posibles entre ambos.`);
    }
}

document.getElementById("start02").onsubmit = iniciar;