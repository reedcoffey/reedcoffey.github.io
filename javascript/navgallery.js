// Optional JS if you want to dynamically adjust image widths to better fill each row
function scaleResponsiveGallery(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  function resizeImages() {
    const items = Array.from(container.children);
    let rowWidth = container.clientWidth;
    let totalRatio = items.reduce((sum, item) => {
      const img = item.querySelector('img');
      return sum + img.naturalWidth / img.naturalHeight;
    }, 0);

    items.forEach(item => {
      const img = item.querySelector('img');
      const ratio = img.naturalWidth / img.naturalHeight;
      img.style.width = `${(rowWidth / totalRatio) * ratio}px`;
    });
  }

  window.addEventListener('resize', resizeImages);
  window.addEventListener('load', resizeImages);
}

scaleResponsiveGallery('.responsive-gallery');
