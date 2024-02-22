const BASE_URL = 'https://fakestoreapi.com/products/';

export default async function fetchFromApi(query) {
    const BASE_URL = 'https://fakestoreapi.com/products/';
    const url = query !== undefined ? (BASE_URL + query) : BASE_URL
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    return json;
}