$(".btn-toggle").on("click", function() {
    $('.dropdown-menu').toggleClass('open');
  });
  $(".dropdown-menu li").on("click", function() {
    $('.btn-toggle').text($(this).text());
    $('.dropdown-menu').removeClass('open');
  });


function GetText() {
    var selectedValue = $('.btn-toggle').text($(this).text());
    if(selectedValue == "Computer Hardware") {
    document.getElementById("PChwd").style.display = '';
    }
    else {
    document.getElementById("PChwd").style.display = 'none';
    }
};