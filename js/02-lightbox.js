import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCards(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryCards(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
           <a class="gallery__item" href="${original}">
      <img class = 'gallery__image' src="${preview}"
      data-source="${original}" 
      alt="${description}"/>
      </a>`;
    })
    .join("");
}
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
  overlayOpacity: 0.9,
});
