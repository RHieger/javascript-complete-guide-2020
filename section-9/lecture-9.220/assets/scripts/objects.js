const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const addMovieHandler = () => {
  
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
      title.trim() === '' ||
      extraName.trim() === '' ||
      extraValue.trim() === '' ||
    ) {
      return;
  }
  const newMovie = {};
};
