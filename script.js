let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "0" );



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let a = prompt("LAst film your watch?", "nan");
let b = prompt("your grade this film", "8.1");
let c = prompt("LAst film your watch?", "nan");
let d = prompt("your grade this film", "8.1");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); 