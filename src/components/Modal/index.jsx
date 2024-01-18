import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '../../pages/PageHome/styles';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from './styles';
import apiSupplier from '../../services/api';

import { useEffect, useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        async function loadSuppliers() {
            const response = await apiSupplier.get('suppliers')
            setSuppliers(response.data)
        }
        loadSuppliers()
    }, [])


    return (
        <Container>
            <Button onClick={handleOpen}>Cotar fornecedores</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Logo</strong></TableCell>
                                    <TableCell><strong>Empresa</strong></TableCell>
                                    <TableCell><strong>Localidade</strong></TableCell>
                                    <TableCell><strong>Custo Kwh</strong></TableCell>
                                    <TableCell><strong>Mínimo Kwh</strong></TableCell>
                                    <TableCell><strong>Total de clientes</strong></TableCell>
                                    <TableCell><strong>Avaliação</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {suppliers && suppliers.map((row) => (

                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center'> <img src={row.supplier_url} alt={row.name} style={{ maxWidth: 50, maxHeight: 50 }} /></TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.supplier_name}
                                        </TableCell>
                                        <TableCell align='center'>{row.supplier_state}</TableCell>
                                        <TableCell align='center'>{row.supplier_kwh}</TableCell>
                                        <TableCell align='center'>{row.supplier_minkwh}</TableCell>
                                        <TableCell align='center'>{row.supplier_totalcustomers}</TableCell>
                                        <TableCell align='center'>{row.supplier_assessment}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Modal>
        </Container>
    );
}

