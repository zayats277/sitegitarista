window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    humburger = document.querySelector('.humburger');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            humburger.classList.toggle('humburger_active');
            menu.classList.toggle('nav-menu_active');
        })
    })
})


$(document).ready(function(){
    $("a[href*='#']").on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault();
      return false;
    });
  });