import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState, FormEvent } from 'react';
import api from '../../services/api';

import './styles.css'

function AddEditNotice({ notice, setIsUpdate, setInUpdate, setOpen } : any){

    const themes = [
        {
            value: 'esportes',
            label: 'Esportes'
        },
        {
            value: 'politica',
            label: 'Política'
        },
        {
            value: 'entretenimento',
            label: 'Entretenimento'
        },
        {
            value: 'famosos',
            label: 'Famosos'
        }
    ]

    const [theme, setTheme] = useState('esportes');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [linkImage, setLinkImage] = useState('');
    const [_id, set_Id] = useState('');

    useEffect(() => {
        if(notice){
            console.log(notice);
            setTitle(notice.title);
            setTheme(notice.theme);
            setDescription(notice.description);
            setLinkImage(notice.linkImage);
            set_Id(notice._id)
        }
    },[]);

    const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleSetDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const handleSetTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.value)
    }

    const handleSetLinkImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLinkImage(e.target.value)
    }

    const handleSubmitForm = async (e : FormEvent) => {
        e.preventDefault();
        let data = {};
        if(notice){
            data = {title, description, theme, linkImage, _id};   
            await api.put('notices', data);
            setIsUpdate(false);
            setInUpdate({});
            setOpen(false);
            window.location.reload();
        }
        else {
            data = {title, description, theme, linkImage};
            await api.post('notices', data);
            setOpen(false);
            window.location.reload();
        }
    }   

    return (
        <form className="form-AddEdit" onSubmit={handleSubmitForm}>       
            <TextField 
                id="title" 
                label="Título" 
                variant="outlined"
                value={title}
                onChange={handleSetTitle}
                required={true}
            />
            <TextField
                id="standard-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                value={description}
                variant="outlined"
                style={{marginTop:"10px"}}
                onChange={handleSetDescription}
                required={true}
                />
            <TextField
                id="input-tema"
                select
                label="Tema"
                value={theme}
                onChange={handleSetTheme}
                SelectProps={{
                    native: true,
                }}
                required={true}
                variant="outlined"
                style={{marginTop:"10px"}}
                >
                <option disabled selected>Selecione um tema</option>
                {themes.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
            <TextField 
                id="linkImage" 
                label="Link da imagem" 
                variant="outlined"
                value={linkImage}
                onChange={handleSetLinkImage}
                required={true}
                style={{marginTop:"10px"}}
            />
            <button
                type="submit"
                className="button-submit"
            >
                {
                    notice ? 'Atualizar notícia' : 'Criar notícia'
                }
            </button>
        </form>

    )
}

export default AddEditNotice;