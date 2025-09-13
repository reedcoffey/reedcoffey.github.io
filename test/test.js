let imagesData = [];

function myFunction(imgData) {
  const expandImg = document.getElementById("expandedImg");
  const imgTitle = document.getElementById("imgTitle");
  const imgSize = document.getElementById("imgSize");
  const imgMedium = document.getElementById("imgMedium");

  expandImg.src = `images/${imgData.src}`;
  imgTitle.textContent = imgData.title;
  imgSize.textContent = imgData.size;
  imgMedium.textContent = imgData.medium;

  expandImg.parentElement.style.display = "block";
}

function loadImagesFromManifest() {
  fetch("image_manifests/recent_work.json")
    .then(response => response.json())
    .then(images => {
      imagesData = images;
      const thumbnailRow = document.getElementById("thumbnailRow");

      thumbnailRow.innerHTML = "";

      images.forEach((imgData, index) => {
        const column = document.createElement("div");
        column.classList.add("column");

        const img = document.createElement("img");
        img.src = `images/${imgData.src}`;
        img.alt = imgData.title;
        img.onclick = () => myFunction(imgData);

        column.appendChild(img);
        thumbnailRow.appendChild(column);

        if (index === 0) {
          myFunction(imgData);
        }
      });
    })
    .catch(error => {
      console.error("Error loading recent_work.json:", error);
    });
}

window.onload = loadImagesFromManifest;
