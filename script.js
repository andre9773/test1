"use strict";


 let numberOfFilms;

 let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

     start: function() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "0" );

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "0" );
        }
    },
    detectYourLevel: function(){
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
    },
    
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat === false){
            personalMovieDB.privat = true;
        }else{
            personalMovieDB.privat = false;
        }
    },
    
    rememberMyFilms: function(){
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
    },
    
    showMyDB: function(){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    
    writeYourGenres: function(){
        for (let i = 1; i <= 3; i++){
            personalMovieDB.genres[i-1] = prompt("Ваш любимый жанр под номером " + i, "" );
            if (personalMovieDB.genres[i-1]  == '' || personalMovieDB.genres[i-1] == null){
                i--;
            }
        }
        let i = 1;
        personalMovieDB.genres.forEach( element => {
            
           console.log( `Любимый жанр #${i} - это ${element}`);
           i++;
        });

    }


};






personalMovieDB.writeYourGenres();
personalMovieDB.start();

personalMovieDB.rememberMyFilms();


personalMovieDB.detectYourLevel();

personalMovieDB.showMyDB();

