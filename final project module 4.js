const movieListel = document.querySelector(".movie-list");
const title = localStorage.getItem("title");


async function renderMovies(filter){
    movieListel.classList += ' movies__loading'

    let movies;
    if(!movies){
    movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=15fbf71a&s=${title}`)}
    const moviesData = await movies.json()
    
    movieListel.classList.remove('movies__loading')
    
    if(filter === 'YEAR'){
       moviesData.Search.sort((a,b) => a.Year - b.Year)
          }
    else if(filter === 'A_TO_Z'){
        moviesData.Search.sort((a,b) => a.Title.localeCompare(b.Title))}
            else if(filter === 'Z_TO_A'){
                moviesData.Search.sort((a,b) => b.Title.localeCompare(a.Title))}

    movieListel.innerHTML = moviesData.Search.map((movie) => movieHtml(movie)).join("");
}

function movieHtml(movie)  { 
    return `<div class="movie__wrapper">
                    <a href="https://www.imdb.com/title/${movie.imdbID}/" target="_blank">
                    <img src="${movie.Poster}" alt="Movie Poster" class="movie__img"/>
                    <div class="movie-card">
                        <div class="movie-card__container">
                            <h3>${movie.Title}</h3>
                            <p><b>Year: </b> ${movie.Year}</p>
                        </div>
                    </div></a>
                </div>`
}

function searchMovies(event){
    const title = event.target.value;

    title.classList += ' movies__loading'
    localStorage.setItem("title", title);
    window.location.href = `${window.location.origin}/index.html`;
    title.classList.remove('movie__loading')}

function sortMovies(event){
    renderMovies(event.target.value);
}



setTimeout(() => {renderMovies()}, 1000);
