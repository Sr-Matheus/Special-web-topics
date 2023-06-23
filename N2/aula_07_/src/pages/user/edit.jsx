import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Form, Button, Row, Col } from "bootstrap-4-react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

const EditUser = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");

  const location = useLocation();
  const id = location.state?.id;

  async function findOneUser(id) {
    if (id !== "") {
      const userRef = doc(db, "react", id);
      await getDoc(userRef)
        .then((user) => {
          setNome(user.data().nome);
          setSobrenome(user.data().sobrenome);
          setIdade(user.data().idade);
        })
        .catch((erro) => {
          alert(`Erro ao buscar ${erro}`);
        });
    }
  }

  useEffect(() => {
    findOneUser(id);
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    const userRef = doc(db, "react", id);
    await updateDoc(userRef, {
      nome: nome,
      sobrenome: sobrenome,
      idade: idade,
    });

    alert("Usuário atualizado com sucesso!");
  }

  return (
    <div className="container">
      <h2>Usuário</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col col="sm-6">
              <label>Nome</label>
              <Form.Input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6">
              <label>Sobrenome</label>
              <Form.Input
                type="text"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col col="sm-6">
              <label>Idade</label>
              <Form.Input
                type="number"
                min="10"
                max="100"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>

        <Button primary type="submit">
          Atualizar
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
