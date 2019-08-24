


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

             // handle links with @href started with '#' only
             $(document).on('click', 'a[href^="#"]', function(e) {
              // target element id
              var id = $(this).attr('href');
              
              // target element
              var $id = $(id);
              if ($id.length === 0) {
                  return;
              }
              
              // prevent standard hash navigation (avoid blinking in IE)
              e.preventDefault();
              
              // top position relative to the document
              var pos = $id.offset().top;
              
              // animated top scrolling
              $('body, html').animate({scrollTop: pos});
          });
                            

          $(document).ready(function(){ 
            $(window).scroll(function(){ 
                if ($(this).scrollTop() > 100) { 
                    $('#scroll').fadeIn(); 
                } else { 
                    $('#scroll').fadeOut(); 
                } 
            }); 
            $('#scroll').click(function(){ 
                $("html, body").animate({ scrollTop: 0 }, 600); 
                return false; 
            }); 
        });

        function myFunction(x) {
          x.classList.toggle("change");
        }