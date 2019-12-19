This is the repository for my professional portfolio website! 

I made this site with HTML, CSS, JavaScript, and some employment of BootStrap. I've included all the files for this project as well as some screenshots below of how the website looks. 

* JavaScript
This project showcases strides I made in developing JavaScript functions. One of the things I'm most proud of on this site, is the slideshow I created. Below is the JavaScript I wrote for this slideshow: 

   var slideIndex = 1;
      showSlides(slideIndex);
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }


* Contact
In this particular project, I created a contact form that pops out and closes for the user. I had no idea how to do this during the creation process, so I personally learned alot about researching JavaScript during the process of building this assignment. 
