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
  img5 = "url(https://toomsauce.com/wp-content/uploads/2020/08/original-1496-600x600.png)",
  img6 = "url(https://toomsauce.com/wp-content/uploads/2020/08/square_ChiliCayenne-600x600.png)",
  img7 = "url(https://toomsauce.com/wp-content/uploads/2020/08/original-1495.png)",
  img8 = "url(https://toomsauce.com/wp-content/uploads/2020/08/square_Avocado.png)",
  img9 = "url(https://toomsauce.com/wp-content/uploads/2020/08/original-1499-600x600.png)",
  img10 = "url(https://toomsauce.com/wp-content/uploads/2020/08/square_Hummus.png)",
  img11 = "url(https://toomsauce.com/wp-content/uploads/2020/08/original-1498-600x600.png)",
  img12 = "url(https://toomsauce.com/wp-content/uploads/2020/08/square_Baba-600x600.png)";


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
    //cucumber=#16858a , Chili= #cf6560 Og=#007cba avocado=28a68d baba=574767
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
    } else if (scrollTop > 1300 && scrollTop < 2100) { //toom Cucumber img1
      $(".img3").css("opacity", 350 / (scrollTop - 1300));
      $(".img2").css("opacity", 0);
      midLineColour.style.backgroundColor = "#16858a";
      document.getElementById("product-title1").style.backgroundColor = "#16858a";
      document.getElementById("hero-icon1").style.borderColor = "#16858a";
      //console.log(scrollTop);
    } else if (scrollTop > 2100 && scrollTop < 2900) { //toom Cucumber img2
      $(".img4").css("opacity", 350 / (scrollTop - 2100));
      $(".img3").css("opacity", 0);
      midLineColour.style.backgroundColor = "#16858a";
      document.getElementById("product-title1").style.backgroundColor = "#16858a";
      document.getElementById("hero-icon1").style.borderColor = "#16858a";
      //console.log(scrollTop);
    }else if (scrollTop > 2900 && scrollTop < 3800) { //toom chili img1
      $(".img5").css("opacity", 350 / (scrollTop - 2900));
      $(".img4").css("opacity", 0);
      midLineColour.style.backgroundColor = "#cf6560";
      document.getElementById("product-title2").style.backgroundColor = "#cf6560";
      document.getElementById("hero-icon2").style.borderColor = "#cf6560";
      console.log(scrollTop);
    }else if (scrollTop > 3800 && scrollTop < 4600) { //toom chili img2
      $(".img6").css("opacity", 350 / (scrollTop - 3800));
      $(".img5").css("opacity", 0);
      midLineColour.style.backgroundColor = "#cf6560";
      document.getElementById("product-title2").style.backgroundColor = "#cf6560";
      document.getElementById("hero-icon2").style.borderColor = "#cf6560";
      //console.log(scrollTop);
    }else if (scrollTop > 4600 && scrollTop < 5400) { //toom Avocado img1
      $(".img7").css("opacity", 350 / (scrollTop - 4600));
      $(".img6").css("opacity", 0);
      midLineColour.style.backgroundColor = "#28a68d";
      document.getElementById("product-title3").style.backgroundColor = "#28a68d";
      document.getElementById("hero-icon3").style.borderColor = "#28a68d";
      console.log(scrollTop);
    }else if (scrollTop > 5400 && scrollTop < 6200) { //toom Avocado img2
      $(".img8").css("opacity", 350 / (scrollTop - 5400));
      $(".img7").css("opacity", 0);
      midLineColour.style.backgroundColor = "#28a68d";
      document.getElementById("product-title3").style.backgroundColor = "#28a68d";
      document.getElementById("hero-icon3").style.borderColor = "#28a68d";
      console.log(scrollTop);
    }else if (scrollTop > 6200 && scrollTop < 7000) { //Hummus img1
      $(".img9").css("opacity", 350 / (scrollTop - 6200));
      $(".img8").css("opacity", 0);
      midLineColour.style.backgroundColor = "#f2b55e";
      document.getElementById("product-title4").style.backgroundColor = "#f2b55e";
      document.getElementById("hero-icon4").style.borderColor = "#f2b55e";
      console.log(scrollTop);
    }else if (scrollTop > 7000 && scrollTop < 7800) { //Hummus img2
      $(".img10").css("opacity", 350 / (scrollTop - 7000));
      $(".img9").css("opacity", 0);
      midLineColour.style.backgroundColor = "#f2b55e";
      document.getElementById("product-title4").style.backgroundColor = "#f2b55e";
      document.getElementById("hero-icon4").style.borderColor = "#f2b55e";
      console.log(scrollTop);
    }else if (scrollTop > 7800 && scrollTop < 8600) { //Baba img1
      $(".img11").css("opacity", 350 / (scrollTop - 7800));
      $(".img10").css("opacity", 0);
      midLineColour.style.backgroundColor = "#574767";
      document.getElementById("product-title5").style.backgroundColor = "#574767";
      document.getElementById("hero-icon5").style.borderColor = "#574767";
      console.log(scrollTop);
    }else if (scrollTop > 8600 && scrollTop < 9400) { //Baba img2
      $(".img12").css("opacity", 350 / (scrollTop - 8600));
      $(".img11").css("opacity", 0);
      midLineColour.style.backgroundColor = "#574767";
      document.getElementById("product-title5").style.backgroundColor = "#574767";
      document.getElementById("hero-icon5").style.borderColor = "#574767";
      console.log(scrollTop);
    }

  }) //End of scroll function
})