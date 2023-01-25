import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log()
const gallery = document.querySelector('.gallery');
const createGallery = galleryItems.map((image) => {
  return `
      <a class="gallery__link" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          alt="${image.description}"
        />
      </a>
  `;
  })
  .join('');
gallery.insertAdjacentHTML('beforeend', createGallery);
gallery.addEventListener('click', showGallery);


console.log(galleryItems);
