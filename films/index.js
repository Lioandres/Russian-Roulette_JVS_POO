import { films } from './films.js'
console.log(films)
// show all films titles
function showTitleFilms () {
    films.forEach(element => {
        console.log(element.Title)
        
    });
}
showTitleFilms()

// create new array with imdbRating to number 
function changeRatingToNumber () {
    films.forEach(element => {
        console.log(element.imdbRating)
        
    });
}
changeRatingToNumber()

// order films by year
function orderFilmsByYear () {
    let YearList=[]
    films.forEach(element => { YearList.push(element.Year)
        
    });
    yearListOrdened=YearList.sort()
    filmsOrderedByYear=[]
    for (const iterator of yearListOrdened) {
        films.forEach(element => {
            if(element.Year===iterator) filmsOrderedByYear.push(element)           
        });   
    }
    
}
orderFilmsByYear()

// show comming soon films
function showCommingSoonFilms () {
}
showCommingSoonFilms()

// find some serie with genere Action
function findSomeSerie () {
}
findSomeSerie()

// reduce imdbRating and calculate average
function averageRating () {
}
averageRating()