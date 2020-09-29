/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FieldForm from '../../components/FormField';
import Button from '../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    const { value } = e.target;
    const attribute = e.target.getAttribute('name');
    setValue(attribute, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  useEffect(() => {
    const DB_URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://sracing.herokuapp.com/categorias';
    fetch(DB_URL)
      .then(async (response) => {
        const resposta = await response.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FieldForm
          label="Nome da Categoria"
          value={values.nome}
          name="nome"
          type="text"
          onChange={handleChange}
        />

        <FieldForm
          label="Descrição"
          value={values.descricao}
          name="descricao"
          type="textarea"
          onChange={handleChange}
        />

        <FieldForm
          label="cor"
          value={values.cor}
          name="cor"
          type="color"
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        {categorias.map((categoria) => (
          <li
            key={categoria.nome}
            style={{ backgroundColor: categoria.cor }}
          >
            {categoria.nome}
            {' '}
            +
            {categoria.descricao}
            {' '}
            +
            {categoria.cor}
          </li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
