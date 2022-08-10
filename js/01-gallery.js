import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryCards(galleryItems);

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);
paletteContainer.addEventListener("click", onPaletteContainerClick);

function createGalleryCards(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <div class = "gallery__item">
      <a class="gallery__link" href="${original}">
      <img class = 'gallery__image' src="${preview}"
      data-source="${original}" 
      alt="${description}"/>
      </a>
      </div>`;
    })
    .join("");
}

function onPaletteContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const selectedImage = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${selectedImage}">
`);
  instance.show();
  window.addEventListener("keydown", onEscapePress);
  window.addEventListener("click", onClick);
}

function onCloseModalWithEscape() {
  window.removeEventListener("keydown", onEscapePress);
}

function onCloseModal() {
  window.removeEventListener("click", onClick);
}

function onEscapePress(evt) {
  if (evt.code === "Escape") {
    onCloseModalWithEscape();
    const modal = document.querySelector(".basicLightbox");
    modal.remove(".basicLightbox");
  }
}

function onClick(evt) {
  if (!evt.target.classList.contains(".basicLightbox")) {
    return;
  }
  onCloseModal();
  const modal = document.querySelector(".basicLightbox");
  modal.remove(".basicLightbox");
}
