var countDownDate = new Date("sep 9, 2019 12:00:00");
countDownDate.setTime( countDownDate.getTime() + countDownDate.getTimezoneOffset()*60*1000 );
countDownDate = countDownDate.getTime();
                    
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("clock").innerHTML = "<div class='days'>" +  days + "<span>Days</span></div>" + "<div class='hours'>" +  hours + "<span>Hours</span></div> "
  + "<div class='minutes'>" + minutes + "<span>Minutes</span></div> " + "<div class='seconds'>" + seconds + "<span>Seconds</span></div> ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }
}, 1000);


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


        $(document).ready(function(){
          $('[data-toggle="tooltip"]').tooltip();   
        });