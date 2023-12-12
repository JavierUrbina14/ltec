import { useParams } from "react-router-dom";
import { useGetInfo } from "../hooks/useGetInfo";
import { useEffect, useState } from "react";
import { getInfoDefault } from "../helpers/getInfoDefault";

export const CharacterPageContainer = () => {

    const { id } = useParams();
    const { characterById } = useGetInfo(id)
    const [isLoading, setIsLoading] = useState(true)
    const { name, birth_year, gender, homeworld, films } = characterById;
    const [planeta, setPlaneta] = useState({});
    const [movies, setMovies] = useState([])

    useEffect(() => {
        if (homeworld) {
            const getHomeworld = async () => {
                const planeta = await getInfoDefault(homeworld)
                setPlaneta(planeta)
            }
            getHomeworld();
        }
    }, [homeworld])

    useEffect(() => {
        if (films) {
            const getFilms = async () => {
                const filmsInfo = await Promise.all(films.map(async (film) => {
                    const response = await fetch(film)
                    const data = await response.json()
                    return data
                }))
                setMovies(filmsInfo)
            }
            getFilms();
        }
    }, [films])

    useEffect(() => {
        if (characterById && movies.length > 0) {
            setIsLoading(false);
        }
    }, [characterById, movies, planeta]);

    return {
        isLoading,
        name,
        gender,
        birth_year,
        planeta,
        movies
    }
}
