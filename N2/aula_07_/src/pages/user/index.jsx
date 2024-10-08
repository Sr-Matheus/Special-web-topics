import React, {useState} from 'react';
import { Form, Button, Row, Col } from 'bootstrap-4-react';
import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs, doc, deleteDoc} from 'firebase/firestore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const MyUser = () => {

    const[nome, setNome] = useState();
    const[sobrenome, setSobrenome] = useState();
    const[idade, setIdade] = useState();
    const[users, setUsers] = useState([]);
    const navigate = useNavigate();


    async function findAllUsers() 
    {
        const usersRef = collection(db,'react');
        await getDocs(usersRef)
        .then((snapshot)=>
            {
                let lista = [];
                snapshot.forEach((doc) =>{
                    lista.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        sobrenome: doc.data().sobrenome,
                        idade: doc.data().idade
                    })
                })
                setUsers(lista);
            })
    }

    useEffect( () =>
    {
        findAllUsers();
    },[users])

    async function registerUser(e)
    {

        e.preventDefault();

        try
        {
            const docRef = await addDoc(collection(db, "react"),{
                nome:nome,
                sobrenome:sobrenome,
                idade:idade
            })

            setNome('');
            setSobrenome('');
            setIdade('');
        }
        
        catch (error)
        {
            console.log(error);
        }
        
    }

    async function handleDelete(id)
    {
        const docRef = doc(db,"react",id);
        await deleteDoc(docRef)
        .then(()=>{
            alert('Usuário deletado');
        })
        .catch(
            (erro) =>
            {
                alert('Erro ao deletar!');
            }
        )
    }

    function handleEdit(idUser) {
        navigate ('/editUser', {state: {id : idUser}});   
    }


    return (
        <>
        <div className='container'>

            <h2>Usuário</h2>
            <hr/>

            <form onSubmit={registerUser}>
                
                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Nome</label>
                            <Form.Input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Sobrenome</label>
                            <Form.Input type="text" value={sobrenome} onChange={(e)=>setSobrenome(e.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Idade</label>
                            <Form.Input type="number" min="10" max="100" value = {idade} onChange={(e)=>setIdade(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>
                

                <Button primary type="submit">Enviar</Button>
                
            </form>

            <div className='container-table'>
            <br/>
            <h3>Lista de usuários</h3>
            <ol>

            </ol>
            {
                users.map((item)=>(
                    <li className='lista' key={item.id}> 
                        <b>Nome:</b> {item.nome} - <b>Idade:</b> {item.idade} 

                        <button onClick={()=>handleDelete(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z"></path></svg>
                        </button>

                        <button onClick={ ()=> handleEdit(item.id) } >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                        </button>
                        
                        
                    </li>
                ))
            }
        </div>


        </div>

        </>    
    )
}


export default MyUser;