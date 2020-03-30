/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movieArray) {
  const movieList = movieArray.filter(
    movie =>
      movie.genre.includes('Drama') && movie.director == 'Steven Spielberg'
  );
  return movieList.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (array.length == 0) {
    return 0;
  }
  const hasRate = array.filter(elm => elm.rate);
  const ratesSummation = hasRate.reduce((acc, movie) => {
    return acc + movie.rate;
  }, 0);
  const average = ratesSummation / array.length;
  return parseFloat(average.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
