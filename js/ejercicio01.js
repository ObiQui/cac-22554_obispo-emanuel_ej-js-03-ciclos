function iniciar(e) {
    e.preventDefault();

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // INICIO

    console.log(`\n————————————————————\nEjercicio #01\n————————————————————`);



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // VARIABLES

    let _conteo;
    const _n1 =1;
    const _n10 = 10;



    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // CÓDIGO PRINCIPAL

    // Mensaje
    console.log("A continuación se realizará un conteo de 1 a 10.");

    alert("A continuación se realizará un conteo de 1 a 10.");

    // Contar de 1 a 100
    for (_conteo = _n1; _conteo < _n10; _conteo++) {
        console.log(_conteo);
    };

    // Mensaje
    console.log("Ahora el conteo regresará de 10 a 1.");

    alert("Ahora el conteo regresará de 10 a 1.");

    // Contar de 100 a 1
    for (_conteo; _conteo >= _n1; _conteo--) {
        console.log(_conteo);
    };
}

document.getElementById("start01").onsubmit = iniciar;