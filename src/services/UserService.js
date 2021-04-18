export async function getAllUsers() {

    const response = await fetch('https://randomuser.me/api/?page=3&results=10&seed=abc');
    return await response.json();
}