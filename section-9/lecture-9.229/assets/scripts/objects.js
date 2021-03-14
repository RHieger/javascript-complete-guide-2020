const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

// Array of movie objects populated by addMovieHandler()
const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  
  if (movieList.length === 0) {
    movieList.classList.remove('visible');
    return;
  }  else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter
   ? movies
   : movies.filter(
      movie => movie.info.title.includes(filter)
  );

  filteredMovies.forEach( (movie) => {
   const movieElement = document.createElement('li');
   const { info } = movie;
   let text = info.title + '—';
   for (const key in info) {
     if (key !== 'title') {
      text += `${key}: ${info[key]}`;
     }
   }
   movieElement.textContent = text;
   movieList.append(movieElement);
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
    id: parseInt(Math.random() * 10_000),
    getFormattedTitle: function() {
      // Format user input
      return this.info.title.toUpperCase();
    }
  };

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const userFilter = document.getElementById('filter-title').value;

  // Render filtered movie list
  renderMovies(userFilter);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchButton.addEventListener('click', searchMovieHandler);
