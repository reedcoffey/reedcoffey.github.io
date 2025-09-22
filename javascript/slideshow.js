// IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
var imageSlides = document.getElementsByClassName('imageSlides');
var circles = document.getElementsByClassName('circle');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');
var counter = 0;

// HIDE ALL IMAGES FUNCTION
function hideImages() {
  for (var i = 0; i < imageSlides.length; i++) {
    imageSlides[i].classList.remove('visible');
  }
}

// REMOVE ALL DOTS FUNCTION
function removeDots() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].classList.remove('dot');
  }
}

// SINGLE IMAGE LOOP/CIRCLES FUNCTION
function imageLoop() {
  var currentImage = imageSlides[counter];
  var currentDot = circles[counter];
  currentImage.classList.add('visible');  // Fade in the current image
  removeDots();
  currentDot.classList.add('dot');
}

// LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
function arrowClick(e) {
  var target = e.target;
  clearInterval(imageSlideshowInterval);  // Stop the automatic slideshow when an arrow is clicked
  hideImages();  // Hide the current image
  removeDots();  // Remove the current dot

  if (target == leftArrow) {
    counter = (counter === 0) ? imageSlides.length - 1 : counter - 1;  // Move to the previous image
  } 
  else if (target == rightArrow) {
    counter = (counter === imageSlides.length - 1) ? 0 : counter + 1;  // Move to the next image
  }

  imageLoop();  // Show the image based on the updated counter
  imageSlideshowInterval = setInterval(slideshow, 5000);  // Restart the slideshow interval
}

leftArrow.addEventListener('click', arrowClick);
rightArrow.addEventListener('click', arrowClick);

// IMAGE SLIDE FUNCTION
function slideshow() {
  if (counter < imageSlides.length) {
    hideImages();  // Fade out the current image
    imageLoop();   // Fade in the next image
    counter++;     // Increment counter
  } else {
    counter = 0;  // Reset counter to start from the beginning
    hideImages();
    imageLoop();
  }
}

// SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
setTimeout(slideshow, 1000);  // Wait 1 second before starting the slideshow
var imageSlideshowInterval = setInterval(slideshow, 5000);  // Set the interval for the slideshow
