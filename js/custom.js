// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#gallery').parallax("100%", 0.3);
    $('#menu').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
  }
  initParallax();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // NIVO LIGHTBOX
  $('#gallery a').nivoLightbox({
        effect: 'fadeScale',
    });

});

/* JotForm Order Auto Populate Code (Updated for All Pages / Index) */
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
      // Find the parent card (checking multiple common class names)
      let card = this.closest('.product-card') || this.closest('.item') || this.closest('.col-md-4') || this.closest('div');
      
      // Try to find product title from various tags (.product-title, h3, h4, h2)
      let titleElem = card.querySelector('.product-title') || card.querySelector('h3') || card.querySelector('h4') || card.querySelector('h2');
      let productName = titleElem ? titleElem.innerText.trim() : "Home Featured Product";
      
      // Try to find product price
      let priceElem = card.querySelector('.product-price') || card.querySelector('.price');
      let productPrice = priceElem ? priceElem.innerText.trim() : "Price Not Available";
      
      // Get Image Details
      let productImg = card.querySelector('img');
      let imgName = productImg ? (productImg.alt || productImg.title || "Product") : "Product";
      let imgFile = productImg ? productImg.getAttribute('src').split('/').pop() : "";
      
      // Merge Details
      let fullDetails = productName + " | Price: " + productPrice + " | Design/Image: " + imgName + " (" + imgFile + ")";
      
      // Prepare Jotform URL
      let jotformBaseUrl = "https://form.jotform.com/262253934595466";
      let finalUrl = jotformBaseUrl + "?typeA58=" + encodeURIComponent(fullDetails);
      
      // Update iframe source inside the Modal
      let iframe = document.querySelector('#orderModal iframe');
      if(iframe) {
        iframe.src = finalUrl;
      }
    });
  });
});