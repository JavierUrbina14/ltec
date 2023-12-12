export const getCharacters = async (page = 1) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}