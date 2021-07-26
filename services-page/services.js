$(".btn-toggle").on("click", function() {
    $('.dropdown-menu').toggleClass('open');
  });
  $(".dropdown-menu li").on("click", function() {
    $('.btn-toggle').text($(this).text());
    var texttoSave = $('.btn-toggle').text($(this).text());
    $('.dropdown-menu').removeClass('open');
  });
var selectedValue = $(texttoSave);
if (selectedValue == "Computer Hardware") {
    document.getElementById("PChwd").style.display = '';
    } else {
    document.getElementById("PChwd").style.display = 'none';
    };