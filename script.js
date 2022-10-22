let password = '1234';

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let usuario = prompt('Ingrese su contraseña. Tiene ' + (i + 1) + ' oportunidades.');
        if (usuario == password) {
            alert('Login exitoso. Bienvenido a Dólar Argy');
            ingresar = true;
            break;
        } else {
            alert('Error. Te quedan ' + i + ' intentos.');
        }
    }

    return ingresar;

}


if (login()) {
    let dolaroficial = 155;
    let dolarmep = 292;
    let dolarblue = 300;
    



    let opcion = prompt('Qué querés hacer: \n1- Ver cotización dolar oficial. \n2 - Ver cotización dolar MEP. \n3 - Ver cotización dolar blue. \n4 - Convertir pesos a dolar blue \n Para salir presioná x.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {
            case '1':
                alert('El valor del dolar oficial hoy es $ ' + dolaroficial);
                break;
            case '2':
                alert('El valor del dolar Mep hoy es $ ' + dolarmep);
                break;
            case '3':
                alert('El valor del dolar Blue hoy es $ ' + dolarblue);
                break;
            case '4':
                let monto = parseInt(prompt('Ingresa el monto en pesos'));
                alert('Tus pesos te alcanzan para U$D ' + monto / dolarblue);
                break;
            default:
                alert('Opción no válida');
                break;
        }

        opcion = prompt('Qué querés hacer: \n1- Ver cotización dolar oficial. \n2 - Ver cotización dolar MEP. \n3 - Ver cotización dolar blue. \n4 - Convertir pesos a dolar blue \n Para salir presioná x.');

    }

} 


