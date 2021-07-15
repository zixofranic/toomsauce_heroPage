let menu= document.getElementById("mainNav");

function toggleMenu() {
    menu.classList.toggle("open");
}
let x = document.getElementById("hambrgrBtn");
x.onclick = toggleMenu;

var img1 = "url(https://toomsauce.com/wp-content/uploads/2020/08/original-1494-600x600.png)"
  , img2 = "url(https://toomsauce.com/wp-content/uploads/2020/08/square_Toom.png)"
  , img3 = "url(https://toomsauce.com/wp-content/uploads/2020/08/original-1497-600x600.png)"

$(document).ready(function() {
  $(".img1").css("background-image", img1);
  $(".img2").css("background-image", img2);
  $(".img3").css("background-image", img3);

  let midLineColour = document.getElementById("centerLine");

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop()

    if (scrollTop < 500) {
      $(".img1").css('opacity', 100/scrollTop)
      console.log(scrollTop)
    }else if (scrollTop >500 && scrollTop < 1300) {
        $('.img2').css('opacity', 350/(scrollTop-500))
        $(".img1").css('opacity', 0)
        midLineColour.style.backgroundColor = "#007cba";
        document.getElementById("product-title1").style.backgroundColor="#007cba";
        document.getElementById("hero-icon").style.borderColor="#007cba";
    }else if (scrollTop >1300 && scrollTop < 2000) {
        $('.img3').css('opacity', 450/(scrollTop-1300));
        $(".img2").css('opacity', 0);
        midLineColour.style.backgroundColor = "#cf6560";
        document.getElementById("product-title1").style.backgroundColor="#cf6560";
        document.getElementById("hero-icon1").style.borderColor="#cf6560";
        
        
    } 
  }) //End of scroll function
})