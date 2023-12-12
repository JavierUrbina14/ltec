import { Divider, Grid, Typography } from "@mui/material"

export const CharacterBasicInfo = ({name, birth_year, gender, planeta}) => {
    return (
        <Grid>
            <Grid>
                <Typography variant="h4" style={{fontSize: "35px"}}><span style={{fontWeight: "bold"}}>{name}</span> - Detalles</Typography>
                <Divider />
            </Grid>
            <Grid>
                <Typography variant="h6" style={{fontSize: "17px"}}><span style={{fontWeight: "bold"}}>Nombre:</span> {name}</Typography>
                <Typography variant="h6" style={{fontSize: "17px"}}><span style={{fontWeight: "bold"}}>Año de nacimiento:</span> {birth_year}</Typography>
                <Typography variant="h6" style={{fontSize: "17px"}}><span style={{fontWeight: "bold"}}>Genero:</span> {gender}</Typography>
                <Typography variant="h6" style={{fontSize: "17px"}}><span style={{fontWeight: "bold"}}>Planeta de origen:</span> {planeta}</Typography>
            </Grid>
        </Grid>
    )
}
