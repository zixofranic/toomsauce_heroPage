let menu = document.getElementById("mainNav");

function toggleMenu() {
  menu.classList.toggle("open");
}
let x = document.getElementById("hambrgrBtn");
x.onclick = toggleMenu;


/*    ---------------------Scroll Background Images------------------*/

var img1 = "url(https://toomsauce.com/wp-content/uploads/2020/08/original-1494-600x600.png)",
  img2 = "url(https://toomsauce.com/wp-content/uploads/2020/08/square_Toom.png)",
  img3 = "url(https://toomsauce.com/wp-content/uploads/2020/08/original-1497-600x600.png)",
  img4 = "url(https://toomsauce.com/wp-content/uploads/2020/08/square_Cucumber-600x600.png)",
  img5 = "url()",
  img6 = "url()",
  img7 = "url()",
  img8 = "url()",
  img9 = "url()",
  img10 = "url()",
  img11 = "url()",
  img12 = "url()";


$(document).ready(function () {
  $(".img1").css("background-image", img1);
  $(".img2").css("background-image", img2);
  $(".img3").css("background-image", img3);
  $(".img4").css("background-image", img4);
  $(".img5").css("background-image", img5);
  $(".img6").css("background-image", img6);
  $(".img7").css("background-image", img7);
  $(".img8").css("background-image", img8);
  $(".img9").css("background-image", img9);
  $(".img10").css("background-image", img10);
  $(".img11").css("background-image", img11);
  $(".img12").css("background-image", img12);


  let midLineColour = document.getElementById("centerLine");

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop()
    //cucumber=#16858a , Chili= #cf6560 Og=#007cba
    if (scrollTop < 500) { //toom OG img1 
      $(".img1").css('opacity', 100 / scrollTop)
      //console.log(scrollTop)
    } else if (scrollTop > 500 && scrollTop < 1300) { //toom OG img2
      $('.img2').css('opacity', 350 / (scrollTop - 500))
      $(".img1").css('opacity', 0)
      midLineColour.style.backgroundColor = "#007cba";
      document.getElementById("product-title1").style.backgroundColor = "#007cba";
      document.getElementById("hero-icon").style.borderColor = "#007cba";
      //console.log(scrollTop);
    } else if (scrollTop > 1300 && scrollTop < 2000) { //toom Cucumber img1
      $(".img3").css("opacity", 350 / (scrollTop - 1300));
      $(".img2").css("opacity", 0);
      midLineColour.style.backgroundColor = "#16858a";
      document.getElementById("product-title1").style.backgroundColor = "#16858a";
      document.getElementById("hero-icon1").style.borderColor = "#16858a";
      //console.log(scrollTop);
    } else if (scrollTop > 2000 && scrollTop < 2700) { //toom Cucumber img2
      $(".img4").css("opacity", 350 / (scrollTop - 2000));
      $(".img3").css("opacity", 0);
      midLineColour.style.backgroundColor = "#16858a";
      document.getElementById("product-title1").style.backgroundColor = "#16858a";
      document.getElementById("hero-icon1").style.borderColor = "#16858a";
      //console.log(scrollTop);
    }

  }) //End of scroll function
})