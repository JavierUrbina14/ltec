import { Link } from "react-router-dom";
import { CharacterBasicInfo } from "../components/CharacterBasicInfo";
import { CharacterMovies } from "../components/CharacterMovies";
import { LazyLoading } from "../components/LazyLoading";
import { Button, Grid } from "@mui/material";
import { CharacterPageContainer } from "../containers/CharacterPageContainer";

export const CharacterPage = () => {
    
    const { isLoading, name, gender, birth_year, planeta, movies } = CharacterPageContainer();

    return (
        <LazyLoading isLoading={isLoading}>
            <Grid container direction="column" justifyContent="center" alignItems="center" height="100vh">
                <Grid item container justifyContent="center" alignItems="center" spacing={5}>
                    <Grid item>
                        <CharacterBasicInfo name={name} gender={gender} birth_year={birth_year} planeta={planeta?.name} />
                    </Grid>
                    <Grid item>
                        <img src={`/img/person-placeholder.webp`} alt={name} width="auto" height="200" />
                    </Grid>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center" marginTop={"2rem"}>
                    <CharacterMovies movies={movies} />
                </Grid>
                <br />
                <Grid item>
                    <Link to={"/"} flex>
                        <Button variant="contained">
                            Volver
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </LazyLoading>
    )
};
