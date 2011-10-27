
/**
 * Module dependencies.
 */

var Canvas = require('../')
  , tty = require('tty')
  , size = tty.getWindowSize();

process.on('SIGINT', function(){
  ctx.restore();
  process.nextTick(function(){
    process.exit();
  });
});

process.on('SIGWINCH', function(){
  size = tty.getWindowSize();
  canvas.width = size[1];
  canvas.height = size[0];
});

var canvas = new Canvas(size[1], size[0])
  , ctx = canvas.getContext('2d')
  , x = 0
  , y = 0
  , x2 = 0
  , y2 = 0;

ctx.hideCursor();
setInterval(function(){
  ctx.clear();
  ctx.strokeStyle = 'gray';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'green';
  ctx.strokeRect(x++, 2, 30, 5);
  ctx.strokeStyle = 'yellow';
  ctx.strokeRect(x2 += .5, 5, 20, 5);
  ctx.moveTo(0, 10);
}, 1000 / 20);