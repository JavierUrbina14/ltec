import { Button, TableCell, TableRow } from "@mui/material"
import { Link } from "react-router-dom"

export const CharacterTableItem = ({ name, url }) => {
    const partes = url.split('/');
    const id = partes[partes.length - 2];
    return (
        <TableRow
            key={name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row" style={{fontSize: "20px"}}>
                {name}
            </TableCell>
            <TableCell align="right">
                <Link to={`/character/${id}`}>
                    <Button variant="contained">
                        Más...
                    </Button>
                </Link>
            </TableCell>
        </TableRow>
    )
}
