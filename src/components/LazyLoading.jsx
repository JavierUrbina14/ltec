import { Grid } from "@mui/material";
import 'ldrs/hourglass'

export const LazyLoading = ({ children, isLoading }) => {

    return (
        <>
            {
                isLoading ?
                    <Grid
                        container
                        spacing={0}
                        direction={"column"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        sx={{ minHeight: '100vh', padding: 4, background: "transparent", backdropFilter: "blur(10px)" }}
                    >
                        <Grid container direction={'row'} justifyContent={"center"}>
                            <l-hourglass
                                size="40"
                                bg-opacity="0.1"
                                speed="1.75"
                                color="black"
                            ></l-hourglass>
                        </Grid>
                    </Grid>
                    : children
            }
        </>
    )
}
