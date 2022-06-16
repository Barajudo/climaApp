const axios = require('axios');

class Busquedas {

    hisotrial = [];

    constructor() {
        // TODO: leer DB
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async buscarCiudad( lugar = '' ) {

        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapBox
                
            })
            
            const response = await instance.get();
    
            return response.data.features.map( lugar => ({
                id:lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }) )

        } catch( error ) {
            return [];
        }
      
    }

}

module.exports = Busquedas;