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
    
            console.log( response.data )
    
            return [];

        } catch( error ) {
            return [];
        }
      
    }

}

module.exports = Busquedas;