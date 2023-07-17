// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const listEl = document.querySelector('.gallery');
listEl.insertAdjacentHTML('beforeend', createMarkUp(galleryItems));

const options = {
    captionData: 'alt',
    captionDelay: 250
};
        
const simple = new SimpleLightbox('.gallery__link', options); 


function createMarkUp(arr) { 
    return arr.map(({preview, original, description}) =>`
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
        src="${preview}"
      alt="${description}"
      width=1200"
      height="800"
    />
  </a>
</li>`).join('');
}


