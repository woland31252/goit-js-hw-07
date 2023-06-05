import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector('.gallery');
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const liImg = galleryItems
  .map(
    elem => `<li class="gallery_item"><a class="gallery__link" href="${elem.original}"><img class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"/></a></li>`
  )
  .join('');
gallery.innerHTML = liImg;
gallery.addEventListener('click', handleImgRender);

function handleImgRender(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const instan = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: instan => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: instan => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );
  function onEscKeyPress(event) {
    if (event.code === 'Escape' && basicLightbox.visible()) {
      instan.close();
    }
  }
  instan.show();
}
console.log(galleryItems);
