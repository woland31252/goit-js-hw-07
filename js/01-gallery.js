import { galleryItems } from './gallery-items.js';
// Change code below this line
// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.

const gallery = document.querySelector('.gallery');
const createGallery = galleryItems.map((image) => {
  return `
  <div class = "gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
  </div>
  `;
  })
  .join('');
gallery.insertAdjacentHTML('beforeend', createGallery);
gallery.addEventListener('click', showGallery);

function showGallery(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const largImage = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" 
    width="800"
    height="600"/>`,
    {
      onShow: instance => {
  document.onkeydown = function (e) {
    e.preventDefault();
    if (e.code == 'Escape') {
      instance.close();
    }
  };
}
    }
  );
  largImage.show();
}

console.log(galleryItems);
console.log(gallery)