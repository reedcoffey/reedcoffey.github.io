// altgallery.js

async function loadGallery() {
  // Get current page name, e.g., "altgallery" from "altgallery.html"
  const pageName = window.location.pathname.split("/").pop().replace(".html", "");
  
  try {
    // Fetch JSON manifest from image_manifests folder
    const response = await fetch(`image_manifests/${pageName}.json`);
    if (!response.ok) throw new Error(`Failed to fetch manifest: ${response.status}`);
    
    const images = await response.json();

    // Select container elements
    const ul = document.querySelector(".top ul");
    const container = document.querySelector(".top");

    // Clear existing thumbnails and lightboxes
    ul.innerHTML = "";
    Array.from(container.querySelectorAll(".lightbox")).forEach(el => el.remove());

    // Create gallery thumbnails and lightbox anchors with info
    images.forEach((img, index) => {
      const imgNum = index + 1;

      // Create thumbnail <li> with linked image
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="#img_${imgNum}">
          <img src="images/${img.src}" alt="${img.title}">
        </a>`;
      ul.appendChild(li);

      // Create lightbox anchor
      const lightboxAnchor = document.createElement("a");
      lightboxAnchor.href = `#_${imgNum}`;
      lightboxAnchor.className = "lightbox trans";
      lightboxAnchor.id = `img_${imgNum}`;
      lightboxAnchor.innerHTML = `
        <img src="images/${img.src}" alt="${img.title}">
        <div class="info">
          <h2>${img.title}</h2>
          <p> ${img.size}</p>
          <p> ${img.medium}</p>
          <p> ${img.year}</p>
        </div>`;
      container.appendChild(lightboxAnchor);
    });

  } catch (error) {
    console.error("Error loading gallery:", error);
  }
}

// Run on page load
loadGallery();