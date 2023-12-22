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
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/>
    </a>
  </li>`;
};

const getGalleryItems = () => {
  return Array.from(galleryItems, (item) => getGalleryItem(item)).join("");
};

/**
  |============================
  | Initialization
  |============================
*/
galleryContainer.innerHTML = getGalleryItems();

galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();

  const imageInstance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyPress);
      },

      onClose: () => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  const onEscKeyPress = (e) => {
    if (e.code === "Escape") {
      imageInstance.close();
    }
  };

  imageInstance.show();
});
