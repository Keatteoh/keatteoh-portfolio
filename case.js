// Tap any case-study image to view it full size.
const box = document.createElement('dialog');
box.className = 'lightbox';
box.innerHTML = '<img alt="" /><button type="button" aria-label="Close">×</button>';
document.body.append(box);
const big = box.querySelector('img');
document.querySelectorAll('.fig img, .cs-cover img').forEach((img) => {
  img.addEventListener('click', () => {
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    box.showModal();
  });
});
box.addEventListener('click', () => box.close());
