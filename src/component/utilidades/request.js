import {client_id} from '../../env';
import axios from 'axios';

function searchCharacters(busqueda, page) {

    const fotopage = (`https://api.unsplash.com/search/photos?query=${busqueda}&page=${page}&client_id=${client_id}`);

    return axios.get(fotopage)    
      .then((response) => response.data)
      .catch((error) => {
        console.log('Ha ocurrido un error ', error);
        return [];
      });
}

export default searchCharacters;