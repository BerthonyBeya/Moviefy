const axios = require('axios');

export default class MovieInfo {
    constructor(id) {
        this.id = id;
    }

    async getMovieInfo() {
        /* Sending a Request For The Movie's Info Using An ID */
        const movieInfo = await axios(`http://www.omdbapi.com/?apikey=82a62b5c&i=${this.id}&plot=full`);

        /* Returning Data */
        return movieInfo.data;
    }
}