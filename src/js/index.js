import '../../src/sass/main.scss';
import Search from './models/Search';
import MovieInfo from './models/MovieInfo';
import { elements } from './views/elementview';
import * as searchview from './views/searchview';
import * as moviesview from './views/moviesview';
import * as hiddenview from './views/hiddenview';



//State
let state = {};


/* hide spinner */
hiddenview.hideSpinner();


/* Hide GRID and Home button */
const hideElements = () => {
    /* Hiding The GRID Container */
    hiddenview.hideGRID();

    /* Hide Home Button */
    hiddenview.hideHomeButton();
}

hideElements();


/* Hide Movie Details Container */
hiddenview.hideMovieDetailsContainer();

const controlSearch = async () => {

    /* Taking the input value*/
    const inputValue = searchview.getInput();

    /* clear inputField*/
    searchview.clearInput();


    if (inputValue) {
        try {
            /* Removing Home creen */
            hiddenview.removeHomeScreen();

            /* Display the spinner */
            hiddenview.displaySpinner();

            /*Adding the movie data inside the state Object for further use*/
            state.data = await new Search(inputValue).getData();

            /* Hide spinner */
            hiddenview.hideSpinner();

            /*Rendering and displaying movie to the UI*/
            moviesview.renderMovies(state.data.allMovies);

        } catch (err) {
            alert("There's Something Wrong with Search... Try Again!");

            /* Display Home After an Error*/
            hiddenview.DisplayHomeScreen();

            /* Hide GRID and Home button */
            hideElements();
        }

    } else {
        alert('The Input Field is empty!');
    }

}


/* Movie Details function */
const movieDetails = async (ID) => {

    if (ID) {
        /* Hiding The GRID Container */
        hiddenview.hideGRID();

        /* Hide spinner */
        hiddenview.hideSpinner();

        /* Display Movie Detail Container */
        hiddenview.DisplayMovieDetailsContainer();

        /* Display Home Button */
        hiddenview.displayHomeButton();

        /* Adding Movie Details into The State Object */
        state.movieDetails = await new MovieInfo(ID).getMovieInfo();

        /* Rendering The Movie Details to The UI by Calling The MovieInfo Method */
        moviesview.movieInfos(state.movieDetails);
    }
}




/* Search Input */
elements.formInput.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


/* Home Button*/
elements.homeButton.addEventListener('click', () => {

    /* Display Home Page */
    hiddenview.DisplayHomeScreen();

    // Hide GRID and Home button
    hideElements();


    /* Hide Movie Details Container*/
    hiddenview.hideMovieDetailsContainer();


    /* clear Movie Details Container */
    moviesview.clearDetailsContainer();

});



/* Movie Details Button */
elements.grid.addEventListener('click', (e) => {
    /* Taking The Movie ID */
    const ID = e.target.id;
    movieDetails(ID);
});

