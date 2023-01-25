import { galleryItems } from './gallery-items.js';
// Change code below this line
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

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


console.log(galleryItems);
