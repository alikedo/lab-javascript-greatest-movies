// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (moviesArray) => moviesArray.map(arrayElement => arrayElement.director)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (moviesArray) => moviesArray.filter(drama => drama.director === 'Steven Spielberg' && drama.genre.includes('Drama')).length

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => {
    let sum = moviesArray.reduce((acc, val) => {
        return acc + val.score
    }, 0);
    let average = sum / moviesArray.length

    return Number(average.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies




function dramaMoviesScore(moviesArray) {
    var filter = moviesArray.filter(function (val) {
        return val.genre.includes("Drama")
    });

    if (filter.length === 0) {
        return undefined;
    }

    var avg = filter.reduce(function (acc, val) {
        var dramaNumber = parseFloat("0" + val.score) // The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.
        return acc + dramaNumber
    }, 0)


    avg = avg / filter.length;
    avg = avg.toFixed(2);
    return parseFloat(avg);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    moviesArray.sort(function (a, b) {
        if (a.year > b.year) return 1
        if (a.year < b.year) return -1
        if (a.title > b.title) return 1
        return -1
    })
    return moviesArray;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    var titleArray = [];
    moviesArray.forEach(function (movie) {
        titleArray.push(movie.title);
    });
    titleArray.sort();
    if (titleArray.length >= 20) {
        titleArray = titleArray.slice(0, 20);
    }
    return titleArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
