// JS to scale images in .justified-grid-gallery while maintaining aspect ratio
function scaleResponsiveGallery(containerSelector, targetHeight = 200) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  function resizeImages() {
    const items = Array.from(container.children);
    items.forEach(item => {
      const img = item.querySelector('img');
      if (!img.complete) return; // skip if image not loaded yet
      const ratio = img.naturalWidth / img.naturalHeight;
      img.style.height = `${targetHeight}px`;
      img.style.width = `${targetHeight * ratio}px`;
      img.style.display = 'block';
    });
  }

  window.addEventListener('load', resizeImages);
  window.addEventListener('resize', resizeImages);

  container.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', resizeImages);
  });
}

// Apply to your gallery
scaleResponsiveGallery('.justified-grid-gallery', 40 * window.innerWidth / 100); // 40vw row height
