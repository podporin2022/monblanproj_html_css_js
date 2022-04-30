$(function () {
  $('.rows').click(function () {
    $('.rows').addClass('active');
    $('.tiles').removeClass('active');
    $('.tile').addClass('row');
    $('.row').removeClass('tile');
    $('.images-list').addClass('column');
    $('.images-list').removeClass('grid');
  })
});
$(function () {
  $('.tiles').click(function () {
    $('.tiles').addClass('active');
    $('.rows').removeClass('active');
    $('.row').addClass('tile');
    $('.tile').removeClass('row');
    $('.images-list').addClass('grid');
    $('.images-list').removeClass('column');
  })
});
