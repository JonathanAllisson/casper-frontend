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
import Backdrop from '@material-ui/core/Backdrop';

import "./styles.css";
import { useEffect, useState } from 'react';
import AddEditNotice from '../AddEditNotice';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function Dashboard(){

    const [notices, setNotices] = useState<any>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [inUpdate, setInUpdate] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);
    
    useEffect(() => {
        api('notices')
        .then(resp => setNotices(resp.data))

    }, []);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setIsUpdate(false)
        setInUpdate({})
        setOpen(false);
    };

    async function handleUpdate(n: any){
        setInUpdate(n);
        setIsUpdate(true)
        handleOpen();
    }

    async function handleDelete(id: any){
        await api.delete(`notices/${id}`);
        setNotices(notices.filter((item: any) => item._id !== id));
    };

    return (
        <div className="container">
            <TableContainer component={Paper} className="table-container">
            <Table className={"table"} aria-label="caption table">
                <caption>Tabela de notícias</caption>
                <TableHead>
                <TableRow>
                    <TableCell>Título da notícia</TableCell>
                    <TableCell align="right">Link url</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Tema</TableCell>
                    <TableCell align="right">url da imagem</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {notices.map((notice: any) => (
                    <TableRow key={notice.id}>
                    <TableCell component="th" scope="row">{notice.title}</TableCell>
                    <TableCell align="right"><Link to={`notice/${notice._id}`}>{process.env.REACT_APP_URL + 'notice/' + notice._id}</Link></TableCell>
                    <TableCell align="right">{notice.description}</TableCell>
                    <TableCell align="right">{notice.theme}</TableCell>
                    <TableCell align="right">{notice.linkImage}</TableCell>
                    <TableCell>
                    <Tooltip title="Delete" onClick={() => handleDelete(notice._id)}>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                    </Tooltip>
                    <Tooltip title="Edite" onClick={() => handleUpdate(notice)}>
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
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                {
                   isUpdate ? <AddEditNotice setInUpdate={setInUpdate} setIsUpdate={setIsUpdate} notice={inUpdate} setOpen={setOpen}/> : <AddEditNotice setOpen={setOpen} />
                }
            </Modal>
            </TableContainer>
        </div>
    )

}

export default Dashboard;