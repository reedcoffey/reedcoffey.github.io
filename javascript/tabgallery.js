let imagesData = [];
let currentIndex = 0;

const expandedImg = document.getElementById("expandedImg");
const imgTitle = document.getElementById("imgTitle");
const imgSize = document.getElementById("imgSize");
const imgYear = document.getElementById("imgYear");
const thumbnailRow = document.getElementById("thumbnailRow");

function showImage(index) {
  if (index < 0) index = imagesData.length - 1;
  if (index >= imagesData.length) index = 0;

  currentIndex = index;

  const imgData = imagesData[index];
  expandedImg.src = `images/${imgData.src}`;
  expandedImg.alt = imgData.alt || imgData.title || ''; // <-- Set alt text
  imgTitle.textContent = imgData.title;
  imgSize.textContent = imgData.size;
  imgYear.textContent = imgData.year;

  // Update selected thumbnail highlight
  Array.from(thumbnailRow.children).forEach((col, i) => {
    const img = col.querySelector('img'); 
    if (i === index) {
      img.classList.add('selected');
    } else {
      img.classList.remove('selected');
    }
  });
}

function loadImagesFromManifest() {
  // Get current page name without extension
  const pagePath = window.location.pathname;
  const pageName = pagePath.substring(pagePath.lastIndexOf('/') + 1).split('.')[0];
  
  const manifestFile = `image_manifests/${pageName}.json`;

  fetch(manifestFile)
    .then(response => response.json())
    .then(images => {
      imagesData = images;

      thumbnailRow.innerHTML = "";

      images.forEach((imgData, index) => {
        const column = document.createElement("div");
        column.classList.add("column");

        const img = document.createElement("img");
        img.src = `images/${imgData.src}`;
        img.alt = imgData.alt || imgData.title || ''; // <-- Use alt from JSON
        img.onclick = () => showImage(index);

        column.appendChild(img);
        thumbnailRow.appendChild(column);
      });

      // Show first image initially
      showImage(0);
    })
    .catch(error => {
      console.error(`Error loading ${manifestFile}:`, error);
    });
}

// Left and right click zones for navigation
document.addEventListener('DOMContentLoaded', () => {
  loadImagesFromManifest();

  const leftZone = document.querySelector('.left-zone');
  const rightZone = document.querySelector('.right-zone');

  leftZone.addEventListener('click', () => {
    showImage(currentIndex - 1);
  });

  rightZone.addEventListener('click', () => {
    showImage(currentIndex + 1);
  });
});

function swipeDetect(el, callback){
  var touchsurface = el,
  swipDir,
  startX,
  startY,
  distX,
  distY,
  threshold = 150,
  restraint = 100,
  allowedTime = 300,
  elapsedTime,
  startTime,
  handleswipe = callback || function(swipeDir){}

  touchsurface.addEventListener('touchstart', function(e){
    var touchobj = e.changedTouches[0]
    swipeDir = 'none'
    dist = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime()
    e.preventDefault()
  }, false)

  touchsurface.addEventListener('touchmove', function(e){
    e.preventDefault()
  }, false)

  touchsurface.addEventListener('touchend', function(e){
    var touchobj = e.changedTouches[0]
    distX = touchobj.pageX - startX
    distY = touchobj.pageY - startY
    elapsedTime = new Date().getTime() - startTime
    if (elapsedTime <= allowedTime){
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
        swipDir = (distX < 0)? 'left' : 'right'
      }
      else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){
        swipDir = (distY < 0)? 'up' : 'down'
      }
    }
    handleswipe(swipDir)
    e.preventDefault()
  }, false)
}

function mobileConSOFF(){
  if (isMobile){
    let bunny = document.querySelector('#board')
    swipeDetect(bunny, function(swipDir){
      DataTransferItemList.forEach(tile => {
        tile.classList.remove("smushed")
      })
      if(swipeDir == 'left'){
        showImage(currentIndex - 1)
      } else if(swipeDetect == 'right'){
        showImage(currentIndex + 1)
      }
    })
  }
}