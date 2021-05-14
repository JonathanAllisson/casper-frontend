import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Modal } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'

import "./styles.css";
import { useEffect, useState } from 'react';




function Dashboard(){

    const [notices, setNotices] = useState<any>([]);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        fetch('http://localhost:3333/notices')
        .then(res => res.json())
        .then(resp => setNotices(resp))

    }, []);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="container">
            <TableContainer component={Paper} className="table-container">
            <Table className={"table"} aria-label="caption table">
                <caption>Tabela de notícias</caption>
                <TableHead>
                <TableRow>
                    <TableCell>Título da notícia</TableCell>
                    <TableCell align="right">id</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Tema</TableCell>
                    <TableCell align="right">url da imagem</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {notices.map((notice: any) => (
                    <TableRow key={notice.id}>
                    <TableCell component="th" scope="row">{notice.title}</TableCell>
                    <TableCell align="right">{notice._id}</TableCell>
                    <TableCell align="right">{notice.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint fugit nostrum non animi incidunt, sit eum at ipsam quis, delectus sunt voluptas maiores nulla consequuntur tenetur! Beatae impedit necessitatibus corporis.</TableCell>
                    <TableCell align="right">{notice.theme}</TableCell>
                    <TableCell align="right">{notice.linkImage}</TableCell>
                    <TableCell>
                    <Tooltip title="Delete">
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                    </Tooltip>
                    <Tooltip title="Edite">
                            <IconButton aria-label="edite">
                                <EditIcon />
                            </IconButton>
                    </Tooltip>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <div className="add-button">
                <Tooltip onClick={handleOpen} title="Add" aria-label="add" className={"add-button"}>
                    <Fab color="secondary" >
                    <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
            <Modal
                className="modal-home"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="box-pin">
                    <h3>Digite o PIN para acessar o painel de controle</h3>
                </div>
            </Modal>
            </TableContainer>
        </div>
    )

}

export default Dashboard;