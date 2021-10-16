$(function () {
  // For the Navbar
  const $links = $('.nav-bar .links ul li');
  
  $links.on('click', () => {
    $links.removeClass('active');
    $(this).addClass('active')
  });
});
