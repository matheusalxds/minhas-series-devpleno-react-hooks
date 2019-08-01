import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Form from '../Form/Form.js';

function New() {
  const [success, setSuccess] = useState(false);

  function save(data) {
    axios
      .post('/api/genres', {
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
      <h1>Novo Gêneros</h1>
      <Form onSubmit={(data) => save(data)} />
    </div>
  );
}

export default New;
