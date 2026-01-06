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
                    <img src="${movie.Poster}" alt="Movie Poster" class="movie__img"/>
                    <div class="movie-card">
                        <div class="movie-card__container">
                            <h3>${movie.Title}</h3>
                            <p><b>Year: </b> ${movie.Year}</p>
                        </div>
                    </div>
                </div>`
}

function searchMovies(event){
    const title = event.target.value;

    title.classList += ' movies__loading'
    localStorage.setItem("title", title);
    window.location.href = `${window.location.origin}/final project module 4.html`;
    title.classList.remove('movie__loading')}

function sortMovies(event){
    renderMovies(event.target.value);
}

setTimeout(() => {renderMovies()}, 1000);
// async function renderBooks(filter){
//     const booksWrapper = document.querySelector(".books")

//     booksWrapper.classList += ' books__loading'
// if(!books){
//     books = await getBooks();}

//     booksWrapper.classList.remove('books__loading')
    
//     if(filter === 'LOW_TO_HIGH'){
//        books.sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
//           }
//     else if(filter === 'HIGH_TO_LOW'){
//         books.sort((a,b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
//           }
//           else if(filter === 'RATING'){
//             books.sort((a,b) => b.rating - a.rating)
//           }
    
// const userListEl = document.querySelector(".user-list");

// async function main(){
//     const users =  await fetch("https://jsonplaceholder.typicode.com/users")
//     const usersData = await users.json()
//     userListEl.innerHTML = usersData.map((user) => userHtml(user)).join("");
// }
// main();

// function userHtml(user)  { 
//     return `<div class="user-card" onclick="showUserPosts(${user.id})">
//                         <div class="user-card__container">
//                             <h3>${user.name}</h3>
//                             <p><b>Email:</b> ${user.email}</p>
//                             <p><b>Phone:</b> ${user.phone}</p>
//                             <p><b>Website: </b><a href="https://${user.website}" target="_blank">${user.website}</a>
//                         </div>
//                     </div>`
//  }

// async function showUserPosts(id) {
//     localStorage.setItem("id", id);
//     window.location.href = `${window.location.origin}/user.html`;
//     }
  