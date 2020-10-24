# Square Game
Simple game created with React, Redux and Redux Toolkit

## Live Demo
https://piotrwrzodak.github.io/square-game/

## Project Description
The game consists of array 5x5 filled with squares. Every square is represented by random number from 1-6 which defines it's colour. If a player clicks for example a red square the selected square, the rest of the red squares that are next to selected square and the squares next to the previous ones will be deleted. If a selected square has no 'neighbours' it won't change the state. After deletion all the squares above the deleted ones will fall down and take their place and later the new ones randomly generated will fill the space that was created at the top. Whenever the deletion is successful to the player's score is added a number of deleted squares. Player can play this game until he won't be able to make a move (no square will have a 'neighbour'). 

## Technologies
Project is created with:
* react: ^17.0.1
* react-dom: ^17.0.1
* react-redux: ^7.2.1
* react-scripts: 3.4.4
* @reduxjs/toolkit: ^1.4.0

## Setup
To run this project, install it locally using npm:
```
$ cd ../square-game
$ npm install
$ npm start
```
