import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID be5d19b00cbd12a7415d774e049ceca74c993967c8d34c91f938eaa8a53ca700'
    }
})