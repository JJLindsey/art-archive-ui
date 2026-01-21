import axios from "axios";

const API_BASE_URL = "https://localhost:5000/api/artworks";

export async function fetchArtworks() {
    const response = await axios.get(API_BASE_URL);
    return response.data;
}

export function getCertificateUrl(id) {
    return `${API_BASE_URL}/${id}/certificate`;
}