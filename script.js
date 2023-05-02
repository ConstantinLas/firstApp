'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films did you see?","");

    while (numberOfFilms =="" ||  isNaN(numberOfFilms) || numberOfFilms == null ) {
        numberOfFilms = +prompt("How many films did you see?","");
    }
} 

// start();



let personalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    };

    function testForStart () {
        personalMovieDB.count = 2;
        // const a = "bla bla bla", b = "hei hei hei";
        // personalMovieDB.movies[a] =  5;
        // personalMovieDB.movies[b] =  3;
    }
    
    testForStart ();


function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        const   a = prompt("Один из последних просмотренных фильмов?", "").trim(),
                b = prompt("На сколько оцените его оцениваете?", "").trim();
    
        
        if (a != null && a != "" && b != null && b != "" && a.length > 5){
            personalMovieDB.movies[a] =  b;
        } else {
            console.log("Error, please try again");
            i--;
        }
    
    }
    
}

rememberMyFilms();


function detectPersonalLavel() {

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }

}

detectPersonalLavel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(`значение приватности : ${personalMovieDB.privat} и зачение проверки: ` +  !hidden);
        console.log(personalMovieDB);
    } else {
        console.log(`значение приватности : ${personalMovieDB.privat} и зачение проверки: ` +  !hidden);
    }
}

showMyDB(personalMovieDB.privat);



/*---------------------------------Задание на урок 004: -----------------------------------*/
/*---------------------------------Задание на урок 003: -----------------------------------*/
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/




/*---------------------------------Задание на урок 002: -----------------------------------*/
/*
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами
*/



/*---------------------------------Задание на урок 001: -----------------------------------*/
/* 
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