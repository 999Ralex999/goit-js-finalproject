import { galleryItems } from "./gallery-items.js";

/**
  |============================
  | Elements
  |============================
*/
const galleryContainer = document.querySelector(".gallery");

/**
  |============================
  | Functions
  |============================
*/
const getGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
      </a>
    </li>`;
};

const getGalleryItems = () => {
  return galleryItems.map(getGalleryItem).join("");
};

/**
  |============================
  | Initialization
  |============================
*/
galleryContainer.innerHTML = getGalleryItems();

/**
  |============================
  | Event
  |============================
*/
const onGalleryItemClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery__image")) {
    const imageInstance = basicLightbox.create(
      `<img src="${e.target.dataset.source}" width="800" height="600">`,
      {
        onShow: () => window.addEventListener("keydown", onEscKeyPress),
        onClose: () => window.removeEventListener("keydown", onEscKeyPress),
      }
    );

    imageInstance.show();
  }
};

const onEscKeyPress = (e) => {
  if (e.key === "Escape") {
    const openLightbox = basicLightbox.visible();
    openLightbox.close();
  }
};

galleryContainer.addEventListener("click", onGalleryItemClick);
