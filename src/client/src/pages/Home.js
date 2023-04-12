import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";
import logo from "../img/escola-infinito.png";
import logo2 from "../img/jane.png";

const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
       const response = await axios.get("http://localhost:3000/api/get");
       setData(response.data); 
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if(window.confirm("Você tem certeza que deseja remover esse aluno?")) {
            axios.delete(`http://localhost:3000/api/remove/${id}`);
            toast.success("Contact Deleted Successfully");
            setTimeout(() => loadData(), 500);
        }
    };
    return (
        <div style={{marginTop: "50px"}}>
            <header>
                <img className = "user" src={logo2} alt="logo jane" width="75px" height="75px"/>
                <h2 className = "username"> Jane </h2>
                <img className = "escolainfinito" src={logo} alt="logo" width="200px" height="140px"/>
                <Link className='a1' to={`/chamada`}>
                    <button className="btn btn-chamada">Chamada</button>
                </Link>
                <Link className='a2' to={`/`}>
                    <button className="btn btn-turma">Lista de Alunos</button>
                </Link>
                <Link className='a3' to={`/sair`}>
                    <button className="btn btn-exit">Sair</button>
                </Link>
            </header>
            <h2>3°B - Matutino</h2>
            <Link to="/addAluno">
                <button className="btn btn-contact">Adicionar Aluno</button>
            </Link>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>Nome do Aluno</th>
                        <th style={{textAlign: "center"}}>E-mail do Responsável</th>
                        <th style={{textAlign: "center"}}>Matrícula</th>
                        <th style={{textAlign: "center"}}></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                               <th scope="row">{index + 1}</th>
                               <td>{item.name}</td> 
                               <td>{item.email}</td> 
                               <td>{item.contact}</td> 
                               <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className="btn btn-edit">Editar</button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={() => deleteContact(item.id)}>Remover</button>
                                    <Link to={`/view/${item.id}`}>
                                        <button className="btn btn-view">Ver</button>
                                    </Link>
                               </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;