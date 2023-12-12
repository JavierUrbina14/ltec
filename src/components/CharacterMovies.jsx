import { Divider, Grid, Typography } from "@mui/material"

export const CharacterMovies = ({movies}) => {

    return (
        <Grid container className="neuphorm" flexDirection={"column"} width={"20rem"} padding={"1.5rem"}>
            <Grid item display={"flex"} justifyContent={"center"}>
                <Typography variant="h4" style={{fontSize: "35px"}}>Peliculas</Typography>
            </Grid>
                <Divider></Divider>
            <Grid item marginTop={"1rem"}>
                {
                    movies?.map(({ title, episode_id }) => (
                        <Grid key={episode_id}>
                            <Typography variant="h6">{title}</Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}
