import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CharacterTableItem } from './CharacterTableItem';

export const CharactersGridTable = ({ characters }) => {


    return (
        <TableContainer component={Paper} align={"center"}>
            <Table sx={{ minWidth: 400, width: 800 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" style={{fontWeight: "bold", fontSize:"25px", padding: "2rem 0"}}>Star Wars - Personajes</TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {characters.map((character) => (
                        <CharacterTableItem key={character.name} {...character} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
