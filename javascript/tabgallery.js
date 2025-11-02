let imagesData = [];
let currentIndex = 0;

const expandedImg = document.getElementById("expandedImg");
const imgTitle = document.getElementById("imgTitle");
const imgSize = document.getElementById("imgSize");
const imgYear = document.getElementById("imgYear");
const thumbnailRow = document.getElementById("thumbnailRow");

function showImage(index) {
  if (imagesData.length === 0) return;

  if (index < 0) index = imagesData.length - 1;
  if (index >= imagesData.length) index = 0;

  currentIndex = index;

  const imgData = imagesData[index];
  expandedImg.src = `images/${imgData.src}`;
  expandedImg.alt = imgData.alt || imgData.title || '';
  imgTitle.textContent = imgData.title || '';
  imgSize.textContent = imgData.size || '';
  imgYear.textContent = imgData.year || '';

  // Highlight the selected thumbnail
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
  const pagePath = window.location.pathname;
  const pageName = pagePath.substring(pagePath.lastIndexOf('/') + 1).split('.')[0];
  const manifestFile = `image_manifests/${pageName}.json`;

  fetch(manifestFile)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then(images => {
      imagesData = images;
      thumbnailRow.innerHTML = "";

      images.forEach((imgData, index) => {
        const column = document.createElement("div");
        column.classList.add("column");

        const img = document.createElement("img");
        img.src = `images/${imgData.src}`;
        img.alt = imgData.alt || imgData.title || '';
        img.onclick = () => showImage(index);

        column.appendChild(img);
        thumbnailRow.appendChild(column);
      });

      showImage(0);
    })
    .catch(error => console.error(`Error loading ${manifestFile}:`, error));
}

// Swipe detection helper
function swipeDetect(el, callback) {
  let touchsurface = el,
      swipDir,
      startX,
      startY,
      distX,
      distY,
      threshold = 100,
      restraint = 100,
      allowedTime = 400,
      elapsedTime,
      startTime,
      handleswipe = callback || function(swipeDir){};

  touchsurface.addEventListener('touchstart', function(e) {
    const touchobj = e.changedTouches[0];
    swipDir = 'none';
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime();
  }, false);

  touchsurface.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, false);

  touchsurface.addEventListener('touchend', function(e) {
    const touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;
    distY = touchobj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        swipDir = (distX < 0) ? 'left' : 'right';
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
        swipDir = (distY < 0) ? 'up' : 'down';
      }
    }
    handleswipe(swipDir);
  }, false);
}

// Enable mobile swipe gestures
function mobileConSOFF() {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    const container = document.querySelector('#expandedImageContainer');
    if (!container) {
      console.warn("Element with id 'expandedImageContainer' not found.");
      return;
    }

    swipeDetect(container, function(swipDir) {
      document.querySelectorAll('.smushed').forEach(tile => {
        tile.classList.remove("smushed");
      });

      if (swipDir === 'left') {
        showImage(currentIndex + 1);
      } else if (swipDir === 'right') {
        showImage(currentIndex - 1);
      }
    });
  }
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
  loadImagesFromManifest();

  const leftZone = document.querySelector('.left-zone');
  const rightZone = document.querySelector('.right-zone');

  if (leftZone) leftZone.addEventListener('click', () => showImage(currentIndex - 1));
  if (rightZone) rightZone.addEventListener('click', () => showImage(currentIndex + 1));

  mobileConSOFF();
});
