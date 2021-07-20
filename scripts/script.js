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
    // check sizes baased on the content ration per section and repeat for the rest
    if (scrollTop < 1000) { //toom OG img1 
      $(".img1").css('opacity', 100 / scrollTop)
      
    } else if (scrollTop > 1100 && scrollTop < 2000) { //toom OG img2
      $('.img2').css('opacity', 350 / (scrollTop - 1100))
      $(".img1").css('opacity', 0)
      midLineColour.style.backgroundColor = "#007cba";
      document.getElementById("product-title1").style.backgroundColor = "#007cba";
      document.getElementById("hero-icon").style.borderColor = "#007cba";
      
    } else if (scrollTop > 2000 && scrollTop < 3545) { //toom Cucumber img1
      $(".img3").css("opacity", 350 / (scrollTop - 2000));
      $(".img2").css("opacity", 0);
      midLineColour.style.backgroundColor = "#16858a";
      document.getElementById("product-title1").style.backgroundColor = "#16858a";
      document.getElementById("hero-icon1").style.borderColor = "#16858a";
      
    } else if (scrollTop > 3545 && scrollTop < 4450) { //toom Cucumber img2
      $(".img4").css("opacity", 350 / (scrollTop - 3545));
      $(".img3").css("opacity", 0);
      midLineColour.style.backgroundColor = "#16858a";
      document.getElementById("product-title1").style.backgroundColor = "#16858a";
      document.getElementById("hero-icon1").style.borderColor = "#16858a";

    }else if (scrollTop > 4450 && scrollTop < 6000) { //toom chili img1
      $(".img5").css("opacity", 350 / (scrollTop - 4450));
      $(".img4").css("opacity", 0);
      midLineColour.style.backgroundColor = "#cf6560";
      document.getElementById("product-title2").style.backgroundColor = "#cf6560";
      document.getElementById("hero-icon2").style.borderColor = "#cf6560";
      console.log(scrollTop);
    }else if (scrollTop > 6000 && scrollTop < 6800) { //toom chili img2
      $(".img6").css("opacity", 350 / (scrollTop - 6000));
      $(".img5").css("opacity", 0);
      midLineColour.style.backgroundColor = "#cf6560";
      document.getElementById("product-title2").style.backgroundColor = "#cf6560";
      document.getElementById("hero-icon2").style.borderColor = "#cf6560";
      
    }else if (scrollTop > 6800 && scrollTop < 8360) { //toom Avocado img1
      $(".img7").css("opacity", 350 / (scrollTop - 6800));
      $(".img6").css("opacity", 0);
      midLineColour.style.backgroundColor = "#28a68d";
      document.getElementById("product-title3").style.backgroundColor = "#28a68d";
      document.getElementById("hero-icon3").style.borderColor = "#28a68d";
      
    }else if (scrollTop > 8360 && scrollTop < 9270) { //toom Avocado img2
      $(".img8").css("opacity", 350 / (scrollTop - 8360));
      $(".img7").css("opacity", 0);
      midLineColour.style.backgroundColor = "#28a68d";
      document.getElementById("product-title3").style.backgroundColor = "#28a68d";
      document.getElementById("hero-icon3").style.borderColor = "#28a68d";
      
    }else if (scrollTop > 9270 && scrollTop < 10820) { //Hummus img1
      $(".img9").css("opacity", 350 / (scrollTop - 9270));
      $(".img8").css("opacity", 0);
      midLineColour.style.backgroundColor = "#f2b55e";
      document.getElementById("product-title4").style.backgroundColor = "#f2b55e";
      document.getElementById("hero-icon4").style.borderColor = "#f2b55e";
      
    }else if (scrollTop > 10820 && scrollTop < 11640) { //Hummus img2
      $(".img10").css("opacity", 350 / (scrollTop - 10820));
      $(".img9").css("opacity", 0);
      midLineColour.style.backgroundColor = "#f2b55e";
      document.getElementById("product-title4").style.backgroundColor = "#f2b55e";
      document.getElementById("hero-icon4").style.borderColor = "#f2b55e";
      
    }else if (scrollTop > 11640 && scrollTop < 13180) { //Baba img1
      $(".img11").css("opacity", 350 / (scrollTop - 11640));
      $(".img10").css("opacity", 0);
      midLineColour.style.backgroundColor = "#574767";
      document.getElementById("product-title5").style.backgroundColor = "#574767";
      document.getElementById("hero-icon5").style.borderColor = "#574767";
      
    }else if (scrollTop > 13180) { //Baba img2
      //$(".img12").css("opacity", 350 / (scrollTop - 11300));
      $(".img11").css("opacity", 0);
/*       midLineColour.style.backgroundColor = "#574767";
      document.getElementById("product-title5").style.backgroundColor = "#574767";
      document.getElementById("hero-icon5").style.borderColor = "#574767"; */
      
    }
    console.log(scrollTop);

  }) //End of scroll function
})