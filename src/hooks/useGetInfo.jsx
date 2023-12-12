import { useEffect, useState } from "react";
import { getCharacters } from "../helpers/getCharacters";
import { getCharacterById } from "../helpers/getCharacterById";

export const useGetInfo = (id) => {
    const [characters, setCharacters] = useState({
        results: [],
        count: 0,
        page: 1,
    }); 
    const [characterById, setCharacterById] = useState([]);
    
    const fetchData = async (page = 1) => {
        const charactersData = await getCharacters(page);
        setCharacters({
            results: charactersData.results,
            count: charactersData.count,
            page: page,
        });
    };

    useEffect(() => {
        fetchData();

        if(id){
            const fetchDataCharacter = async () => {
                const characterByIdData = await getCharacterById(id);
                setCharacterById(characterByIdData);
            }
            fetchDataCharacter();
        }
    }, []);

    return {
        characters,
        characterById,
        fetchData
    }
}
