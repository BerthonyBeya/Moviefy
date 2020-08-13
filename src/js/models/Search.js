const axios = require('axios');
const myKey = '82a62b5c';

export default class Search {
    constructor(search) {
        this.search = search;
    }

    async getData() {
        try {
            /* Sending The First Request To Return The First Array -> Page 1 */
            const results = await axios(`http://www.omdbapi.com/?apikey=${myKey}&s=${this.search}`);

            /* Sending The Second Request To Return The Second Array -> Page 2 */
            const resultsPage2 = await axios(`http://www.omdbapi.com/?apikey=${myKey}&s=${this.search}&page=2`);

            /* Adding The First Array Into The data variable */
            const data = results.data.Search;

            /* Adding The Second Array Into The dataPage2 Variable */
            const dataPage2 = resultsPage2.data.Search;

            /* Defining an Empty Variable That Will Contain Both Arrays Combine*/
            let allMovies;

            /* Combining Both Array together into a single Array */
            allMovies = [...data, ...dataPage2];

            /* Adding The Combined Array into the Object */
            this.allMovies = allMovies;

            /* Returning The Whole Object */
            return this;


        } catch (error) {
            alert(error);
        }
    }
};

