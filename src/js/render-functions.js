import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <div class="image-item">
            <a href="${largeImageURL}" class="gallery-item">
                <img src="${webformatURL}" alt="${tags}" />
            </a>
            <div class="metadata">
                <span>Likes: ${likes}</span>
                <span>Views: ${views}</span>
                <span>Comments: ${comments}</span>
                <span>Downloads: ${downloads}</span>
            </div>
        </div>
    `).join('');

    gallery.insertAdjacentHTML('beforeend', markup);

    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a');
    }

    lightbox.refresh();
}

export function showError(message) {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

export function showLoader() {
    const loader = document.querySelector('#loader');
    loader.style.display = 'block';
}

export function hideLoader() {
    const loader = document.querySelector('#loader');
    loader.style.display = 'none';
}
