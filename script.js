"use strict";


 let numberOfFilms;

 let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "0" );

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "0" );
    }
}



function detectYourLevel(){
    if(personalMovieDB.count < 10 ){
        console.log("Посмотрено довольно мало фильмов");
    }  
    else if(personalMovieDB.count > 10 && personalMovieDB.count < 30 ){
        console.log("Вы класический зритель");
    }
    else if(personalMovieDB.count > 30 ){
        console.log("Вы киноман");
    } else{
        console.log("Erorrr");
    }
}



function rememberMyFilms(){
    for (let i = 0; i < numberOfFilms; i++){
        let a = prompt("Last film your watch?", "nan");
        let b = prompt("your grade this film", "8.1");
    
        if (a != null && b != null && a.length < 50 && b.length < 50 && a.length != 0 && b.length != 0){
            console.log('ok');
            personalMovieDB.movies[a] = b;
        }else{
            console.log('error');
            i--;
        } 
    }
}

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt("Ваш любимый жанр под номером " + i, "" );
    }
}
writeYourGenres();
start();

rememberMyFilms();


detectYourLevel();

showMyDB();

/*
if (4 == 4) {
    console.log('Ok!');
}else{
    console.log('error');
}

const nim = 50;

if (nim < 49){
    console.log('March');

}else if (nim > 100){
     
}
(num === 50) ? console.log('Ok!') : console.log("error");

switch (num) {
    case 49:
        console.log('not correct');
        break;
    case 50:
        console.log('Ok');
        break;
    default:
        console.log('not now(');
}
while (num < 55) {
    console.log(num);
    num++;

}


let num = 50;



for (let i = 1; i < 8; i++){
    console.log(num);
    num++;
}




const str = "test";

console.log(str.toUpperCase());

*/