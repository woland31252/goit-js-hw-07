import { galleryItems } from './gallery-items.js';
// Change code below this line
// Завдання 1 - галерея зображень
// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.


// console.log(galleryItems);
const gallery = document.querySelector(".gallery");

function createGallery(galleryItems) {
    return galleryItems.map(image => {
        return `<a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>`;
    });
    console.log(elem);
}
console.log(gallery)