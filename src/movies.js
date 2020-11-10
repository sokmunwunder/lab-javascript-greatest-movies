


// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
const directors = array.map(function(value, index, originalArray){
    return value.director;});
return directors;}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    const numbers = array.filter(function(value, index, originalArray){
    return value.director === "Steven Spielberg" &&& value.genre.includes("Drama");})
    .reduce(function(total, value, list){
        if (list.length === null){return null;}
        else{
    return total + list.length-1;}
     }, 0);
    return numbers;}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    const average = array.reduce(function(total, value, index, list){
    let sumOfRates=0;
    sumOfRates += value.rate;
    let averageRate = sumOfRates/list.length; 
    let averageRateTwoDecimalPlaces =  (averageRate,2) => Math.round(averageRate*10**2)/10**2;
    return total + averageRateTwoDecimalPlaces; 
    },0);}
    return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMovieRates(array){
    const dramaOnly= array.filter(function(value, index, list){
        return value.genre === "Drama";
    })
    .reduce(function(total, value, index, list){
        let sumOfDramaRates = 0;
        sumOfDramaRates += value.rate;
        let averageDramaRate = sumOfDramaRates/list.length;
        let averageDramaRateTwoDecimals = (averageDramaRate, 2) => Math.round(averageDramaRate*10**2)/10**2;
        return total + averageDramaRateTwoDecimals;
    }, 0);}
   return dramaOnly; 
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    const newAscendingOrder = array.year.sort(function(a,b){
        if (a >b){return 1;}
        else {return -1}
    });
    return newAscendingOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    const newAlphabeticalOrder = array.title.sort(a, b) =>{return a.localeCompare(b); }
    return newAlphabeticalOrder;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
