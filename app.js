require('dotenv').config();

const { inquirerMenu, pausa, leerInput, listadoLugaresBuscados } = require("./helpers/inquirer");
const Busquedas = require("./models/Busquedas");

const main = async() => {

    const busquedas = new Busquedas();

    let opt;

    do {
        opt = await inquirerMenu();
        
        switch( opt ) {
            case 1:

                //Mostrar mensaje
                const lugar_buscado = await leerInput( 'Nombre de la ciudad:' );

                // Buscar lugares
                const lugares_encontrados = await busquedas.buscarCiudad( lugar_buscado )
                
                //Seleccionar lugar
                const id = await listadoLugaresBuscados( lugares_encontrados );

                const lugar_seleccionado = lugares_encontrados.find( lugar => lugar.id === id)

                //Clima

                //Mostar resultados
                
                const { nombre, lng, lat } = lugar_seleccionado;

                console.log('\nInformacion de la ciudad'.yellow);
                console.log('Ciudad: ', nombre);
                console.log('Latitud: ', lng);
                console.log('Longitud: ', lat);
                console.log('Temperatura: ', );
                console.log('Minima: ', );
                console.log('Maxima: ', );
                
                break;
        
            default:
                break;
        }

        if( opt !==  0) await pausa();

    } while( opt !== 0 );

}

main()