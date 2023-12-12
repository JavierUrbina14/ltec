import { useEffect, useState } from "react";
import { useGetInfo } from "../hooks/useGetInfo";

export const MainPageContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { characters, fetchData } = useGetInfo();
    const { count, results } = characters;

    const paginationValue = Math.ceil(count / 10);

    useEffect(() => {
        if (results?.length > 0) {
            setIsLoading(false);
        }
    }, [results]);

    const handlePageChange = async (event, page) => {
        try {
            setIsLoading(true);
            await fetchData(page);
        } finally {
            setIsLoading(false);
        }
    };
    return {
        isLoading,
        results,
        paginationValue,
        characters,
        handlePageChange,
    }
}
