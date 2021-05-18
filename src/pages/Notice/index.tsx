import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import './styles.css';

export interface Notice {
    _id: string;
    title: string;
    description: string;
    theme: string;
    linkImage: string;
}

function Notice(){
    
    const { id }  = useParams<any>();
    const [n, setN] = useState<Notice>();

    useEffect(() => {
        async function loadNotice(){
            api.get(`/notices/${id}`)
            .then(resp => {
                setN(resp.data)
            })
        }
        loadNotice()
    },[]);

    return (
        <div className="notice-container">
            <img className="image-notice" src={n?.linkImage} alt={n?._id} />
            <div className="box-notice">
                <h1 className="notice-infos">{n?.title}</h1>
                <p className="notice-infos">{n?.description}</p>
            </div>
            <span className="notice-infos notice-span">Assunto:</span>
            <span className="notice-infos notice-span">{n?.theme}</span>
        </div>
    )
}

export default Notice;