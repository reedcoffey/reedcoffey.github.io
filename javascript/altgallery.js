async function loadGallery() {
  const pageName = window.location.pathname.split("/").pop().replace(".html", "");

  try {
    const response = await fetch(`image_manifests/${pageName}.json`);
    if (!response.ok) throw new Error(`Failed to fetch manifest: ${response.status}`);
    
    const images = await response.json();
    const ul = document.querySelector(".top ul");

    ul.innerHTML = "";

    // Remove old lightbox if exists
    const oldLightbox = document.querySelector(".lightbox-container");
    if (oldLightbox) oldLightbox.remove();

    // Create a single lightbox container appended to body
    const lightboxContainer = document.createElement("div");
    lightboxContainer.className = "lightbox-container hidden";
    document.body.appendChild(lightboxContainer); // <-- append to body

    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      renderLightbox();
      lightboxContainer.classList.remove("hidden");
    }

    function closeLightbox() {
      lightboxContainer.classList.add("hidden");
    }

function renderLightbox() {
  const img = images[currentIndex];
  lightboxContainer.innerHTML = `
    <div class="lightbox-content">
      <button class="close">&times;</button>
      <img src="images/${img.src}" alt="${img.title}">
      <div class="info">
        <h2>${img.title}</h2>
        <p>${img.size}</p>
        <p>${img.medium}</p>
        <p>${img.year}</p>
      </div>
    </div>
  `;

  // Close button
  lightboxContainer.querySelector(".close").addEventListener("click", closeLightbox);

  const imgEl = lightboxContainer.querySelector("img");

  // Click navigation: left/right halves
  imgEl.addEventListener("click", e => {
    const rect = imgEl.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // click position relative to image
    if (clickX < rect.width / 2) {
      // Clicked left side: previous image
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      // Clicked right side: next image
      currentIndex = (currentIndex + 1) % images.length;
    }
    renderLightbox();
  });

  // Swipe support on full overlay (optional for mobile)
  let startX = 0;
  lightboxContainer.addEventListener("touchstart", e => startX = e.touches[0].clientX);
  lightboxContainer.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      currentIndex = (currentIndex + 1) % images.length;
      renderLightbox();
    } else if (endX - startX > 50) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      renderLightbox();
    }
  });
}

    // Build gallery thumbnails
    images.forEach((img, index) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      const thumbnail = document.createElement("img");
      thumbnail.src = `images/${img.src}`;
      thumbnail.alt = img.title;

      a.addEventListener("click", e => {
        e.preventDefault();
        openLightbox(index);
      });

      a.appendChild(thumbnail);
      li.appendChild(a);
      ul.appendChild(li);
    });

  } catch (error) {
    console.error("Error loading gallery:", error);
  }
}

loadGallery();