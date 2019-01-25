/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    let movies = array.map((movie)=>{
        let movieDuration = movie.duration;
        let minutes = 0;
        if(Number.isInteger(movieDuration)==true){
            minutes = movieDuration;
            return movie;
        }
        if(movieDuration.includes("min")){
            if(movieDuration.includes("h")){
                movieDuration = movieDuration.replace("h", "");
                movieDuration = movieDuration.replace("min","");
                movieDuration = movieDuration.split(" ");
                minutes = parseInt(movieDuration[0])*60 + parseInt(movieDuration[1]);
            }
            else {
                movieDuration = movieDuration.replace("min","");
                minutes = parseInt(movieDuration);
            }
        }
        else if (movieDuration.includes("h")){
            movieDuration = movieDuration.replace("h", "");
            minutes = parseInt(movieDuration)*60;
        }
        else {
            minutes = movieDuration;   
        }
        movie.duration = minutes;
        return movie;
    });
    return movies;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    let totalRatings = 0;
    let movies = array.map((movie) => {
        let movieRating = parseFloat(movie.rate);
        totalRatings += movieRating;
        //console.log(movieRating);
    });
    let averageRating = totalRatings/movies.length;
    averageRating = averageRating.toFixed(2);
    return parseFloat(averageRating);
};
ratesAverage(movies);

// Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = [];
    let movies = array.map((movie) => {
        if(movie.genre.includes("Drama") && movie.rate != ""){
            dramaMovies.push(movie);
        }
    });
    console.log(dramaMovies);
    let dramaAverage = ratesAverage(dramaMovies);
    return dramaAverage;
};

// Order by time duration, in growing order
function orderByDuration(array) {
    let minutesArray = turnHoursToMinutes(array);

    let sortedArray = [];

    let orderByMinutes = minutesArray.map((movie) => {
        sortedArray.push([movie, movie.duration]);
    });

    sortedArray.sort(function(a, b){
        return a[1] - b[1];
    });

    console.log(sortedArray);
};

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
