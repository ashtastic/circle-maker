var $body = $('html');

$body.on('keydown', function () {
  var $ball = $('<div>');
  $ball.addClass('ball');
  $body.append($ball);
  $ball.css('left', Math.random()*1000);
  $ball.css('top', Math.random()*1000);
  $ball.css('background-color', '#' + Math.random());
});
