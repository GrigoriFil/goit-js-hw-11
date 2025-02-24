import axios from 'axios';

const API_KEY = '49000091-3868361750e1c7c48df9380e6';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    if (!query.trim()) {
        throw new Error('Search query is empty!');
    }

    const params = {
        key: API_KEY,
        q: encodeURIComponent(query),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data.hits;
    } catch (error) {
        throw error;
    }
}
