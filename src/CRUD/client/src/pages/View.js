import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import axios from 'axios';
import "./View.css";

const View = () => {
    const [user, setUser] = useState ({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/${id}`).then((resp) => setUser({ ...resp.data[0] }));
    }, [id]);
    return (
        <div style = {{marginTop: "150px"}}>
            <div className="card">
                <div className="card-header">
                    <p> Detalhes do Aluno </p> 
                </div>
                <div className="container">
                    <strong>ID: </strong>
                    <span>{id}</span>
                    <br/>
                    <br/>
                    <strong>Nome: </strong>
                    <span>{user.name}</span>
                    <br/>
                    <br/>
                    <strong>E-mail do Responsável: </strong>
                    <span>{user.email}</span>
                    <br/>
                    <br/>
                    <strong>Matrícula: </strong>
                    <span>{user.contact}</span>
                    <br/>
                    <br/>
                    <Link to="/">
                        <div className="btn btn-edit">Go Back</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default View