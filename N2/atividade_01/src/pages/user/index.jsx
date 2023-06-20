import React, {useState} from 'react';
import { Form, Button, Row, Col } from 'bootstrap-4-react';

const MyUser = () =>
{

    const[nome, setNome] = useState();
    const[sobrenome, setSobrenome] = useState();
    const[idade, setIdade] = useState();

    function registerUser(e)
    {
        e.preventDefault();
        alert(nome);
    }

    return (
        <>
        <div className='container mt-4'>

            <h2>Usuários</h2>
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
        </div>
        
        </>    
    )
}


export default MyUser;