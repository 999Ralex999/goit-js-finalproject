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
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`;
};

/**
  |============================
  | Optimization
  |============================
*/
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
  | Library Initialization
  |============================
*/
new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
