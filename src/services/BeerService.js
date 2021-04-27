export async function getAllBeers() {

    const response = await fetch('https://api.punkapi.com/v2/beers');
    return await response.json();
}