import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Form from '../Form/Form.js';

function Edit(props) {
  const { params } = props.match;
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('/api/genres/' + params.id).then(res => {
      setData(res.data);
    });
  }, [params.id]);

  function save(data) {
    axios
      .put('/api/genres/' + params.id, {
        name: data,
      })
      .then(res => {
        setSuccess(true);
      });
  }

  if (success) {
    return <Redirect to='/generos' />;
  }

  return (
    <div className='container'>
      <h1>Editar Gêneros</h1>
      <Form onSubmit={(dataToSave) => save(dataToSave)} data={data} />
    </div>
  );
}

export default Edit;
