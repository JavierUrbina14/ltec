import { LazyLoading } from "../components/LazyLoading";
import { Grid, Pagination } from "@mui/material";
import { CharactersGridTable } from "../components/CharactersGridTable";
import { MainPageContainer } from "../containers/MainPageContainer";

export const MainPage = () => {
    
    const { isLoading, results, paginationValue, characters, handlePageChange } = MainPageContainer();

    return (
        <>
            <LazyLoading isLoading={isLoading}>
                <Grid margin={"2rem 15rem"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                    <CharactersGridTable characters={results} />
                    <Grid container justifyContent="center" marginTop={"1rem"}>
                        <Pagination
                            count={paginationValue}
                            page={characters.page}
                            onChange={handlePageChange}
                        />
                    </Grid>
                </Grid>
            </LazyLoading>
        </>
    );
};
