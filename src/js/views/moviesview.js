import { elements } from './elementview';
import * as hiddenview from './hiddenview';



/* Rendering and displaying movies to the UI*/
export const renderMovies = movieData => {
  /* Calling The DisplayGRID function*/
  hiddenview.displayGRID();

  /* Dispaly Home Button */
  hiddenview.displayHomeButton();

  movieData.forEach(el => {
    const movie = `
          <div class="movie">
            <img class="movie__image" src="${el.Poster}" alt="image">
            <h1 class="movie__title">${el.Title}</h1>
            <button class="btn btn--small movie__details" id="${el.imdbID}">Movie Details</button>
          </div>
        `;
    elements.grid.insertAdjacentHTML('beforeend', movie);
  });
};






/* Rendering And Displaying Movie Infos to The UI*/
export const movieInfos = (info) => {
  const movie = `<div class="details-container">
  <img class="details__image" src="${info.Poster}" alt="image">
  <div class="details-small-container">
    <h1 class="details__title">${info.Title}</h1>
    <p class="details"><span>Released</span>:&nbsp; ${info.Year}</p>
    <p class="details"><span>Genre</span>:&nbsp; ${info.Genre}</p>
    <p class="details"><span>Rated</span>:&nbsp; ${info.Rated}</p>
    <p class="details"><span>Rating</span>:&nbsp; ${info.imdbRating}</p>
    <p class="details"><span>Awards</span>:&nbsp; ${info.Awards}</p>
    <p class="details"><span>Writer</span>:&nbsp; ${info.Writer}</p>
    <p class="details"><span>Director</span>:&nbsp; ${info.Director}</p>
    <p class="details"><span>Actors</span>:&nbsp; ${info.Actors}</p>
    <p class="details"><span>country</span>:&nbsp; ${info.Country}</p>
    <p class="details"><span>Boxoffice</span>:&nbsp; ${info.BoxOffice}</p>
    <p class="details"><span>Production</span>:&nbsp; ${info.Production}</p>
  </div>
</div>
<div class="plot-box">
  <h1 class="plot-font">Plot</h1>
  <p class="plot-paragraph">${info.Plot}</p>
  <a class="btn btn__home btn--small" target="_blanc" href="http://imdb.com/title/${info.imdbID}">View IMDB</a>
</div>`;

  elements.movieDetailsContainer.insertAdjacentHTML('afterbegin', movie);
}




/* Clear Movie Details Container */
export const clearDetailsContainer = () => {
  elements.movieDetailsContainer.innerHTML = "";
}