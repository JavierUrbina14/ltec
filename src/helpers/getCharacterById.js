export const getCharacterById = async (id) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${id}`)
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}