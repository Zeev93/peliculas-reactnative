import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '4cd7045987975af6eb6a0227e43c2c44',
        languaje: 'es-ES'
    }
})

export default movieDB