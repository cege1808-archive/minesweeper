# Minesweeper

_Javascript Game on Console_

## Build the Project
Run build to generate ES5 `npm run build`

## Play Minesweeper
Create instances of MineSweeperGame in command line.

In the command line, navigate to the lib directory and run `node`

Run `.load game.js` to load the contents of this file.

Then create a Game instance and run commands like so:

``` javascript
let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);
```
To reset game `game.restart()`

To exit game `.exit`
