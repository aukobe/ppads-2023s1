import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    name: "",
    email: "",
    contact: "",
};

const AddEdit = () => {
    const [state, setState] = useState(initialState);

    const { name, email, contact } = state;

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/get/${id}`).then((resp) => setState({ ...resp.data[0] }));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact) {
            toast.error("Por favor, preencha todos os campos solicitados.");
        } else {
            if(!id) {
            axios.post("http://localhost:3000/api/post", {
                name,
                email,
                contact,
            })
            .then(() => {
                setState({ name: "", email: "", contact: "" });
            })
            .catch((err) => toast.error(err.response.data));
            toast.success("Aluno adicionado com sucesso!");
            } else {
                axios.put(`http://localhost:3000/api/update/${id}`, {
                    name,
                    email,
                    contact,
                })
                .then(() => {
                    setState({ name: "", email: "", contact: "" });
                })
                .catch((err) => toast.error(err.response.data));
                toast.success("Dados do aluno atualizados com sucesso!"); 
            }
            setTimeout(() => navigate("/"), 500);
        }
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value });
    };

    return (
        <div style={{marginTop: "100px"}}>
            <form style={{
                margin: "auto",
                passing: "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
            onSubmit={handleSubmit}
            >
            <label htmlFor="name">Nome do Aluno</label>
            <input type="text" id="name" name="name" placeholder="Insira o nome do aluno..." value={name || ""} onChange={handleInputChange}/>
            <label htmlFor="email">E-mail do Responsável</label>
            <input type="email" id="email" name="email" placeholder="Insira o email do responsável..." value={email || ""} onChange={handleInputChange}/>
            <label htmlFor="contact">Matrícula</label>
            <input type="number" id="contact" name="contact" placeholder="Insira o número de matrícula do aluno..." value={contact || ""} onChange={handleInputChange}/>
            <input type="submit" value={id ? "Atualizar" : "Salvar"} />
            <Link to="/">
                <input type="button" value="Voltar" />
            </Link>
            </form>
        </div>
    )
}

export default AddEdit