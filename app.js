const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/Busquedas");

console.log(process.env)

const main = async() => {

    const busquedas = new Busquedas();

    let opt;

    do {
        opt = await inquirerMenu();
        
        switch( opt ) {
            case 1:

                //Mostrar mensaje
                const lugar_buscado = await leerInput( 'Nombre de la ciudad:' );

                await busquedas.buscarCiudad( lugar_buscado )

                // Buscar lugares

                //Seleccionar lugar

                //Clima

                //Mostar resultados

                console.log('\nInformacion de la ciudad\n'.yellow);
                console.log('Ciudad: ', );
                console.log('Latitud: ', );
                console.log('Longitud: ', );
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