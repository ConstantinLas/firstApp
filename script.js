/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = +prompt("How many films did you see?","");

let personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    };

let aswFilm1 =  prompt("Один из последних просмотренных фильмов?", ""),
    answNone1 = prompt("На сколько оцените его?", ""),
    aswFilm2 =  prompt("Один из последних просмотренных фильмов?", ""),
    answNone2 = prompt("На сколько оцените его?", "");

//personalMovieDB.movies = {
//    aswFilm1 : answNone1,
//    aswFilm2 : answNone2
//    };

personalMovieDB.movies[aswFilm1] = answNone1;
personalMovieDB.movies[aswFilm2] = answNone2;

console.log(personalMovieDB);
