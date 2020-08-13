import {elements} from './elementview';

/* Removing Home Screen */
export const removeHomeScreen = () => {
    elements.container.style.display = "none";
};


/* Display Home Screen */
export const DisplayHomeScreen = () => {
    elements.container.style.display = "";
};


/*Hide The GRID container*/
export const hideGRID = () => {
    elements.grid.style.display = "none";
};


/* Display The GRID Container */
export const displayGRID = () => {
    elements.grid.style.display = "";
    elements.grid.innerHTML = "";
};


/* Hide Home Button */
export const hideHomeButton = () => {
   elements.homeButton.style.display = "none";
};


/* Hide Home Button */
export const displayHomeButton = () => {
   elements.homeButton.style.display = "";
};



/* Hide Movie Details Container */
export const hideMovieDetailsContainer = () => {
    elements.movieDetailsContainer.style.display = "none";
};



/* Display Movie Details Container */
export const DisplayMovieDetailsContainer = () => {
    elements.movieDetailsContainer.style.display = "";
};




/* Hide Spinner */
export const hideSpinner = () => {
   elements.spinner.style.display = 'none';
}




/* Display Spinner */
export const displaySpinner = () => {
    elements.spinner.style.display = '';
}