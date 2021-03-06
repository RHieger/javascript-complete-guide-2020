const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

// Array of movie objects populated by addMovieHandler()
const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');
  
  if (movieList.length === 0) {
    movieList.classList.remove('visible');
    return;
  }  else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  movies.forEach( () => {
    
  });

};

const addMovieHandler = () => {
  
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
      title.trim() === '' ||
      extraName.trim() === '' ||
      extraValue.trim() === ''
    ) {
      return;
  }
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: parseInt(Math.random() * 1_000)
  };

  movies.push(newMovie);
  console.log(newMovie);

};

addMovieButton.addEventListener('click', addMovieHandler);
