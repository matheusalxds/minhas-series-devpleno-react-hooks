import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Form from '../Form/Form.js';

function SeriesNew() {
  const [success, setSuccess] = useState(false);

  function save(data) {
    axios
      .post('/api/series', {
        name: data,
      })
      .then(res => {
        setSuccess(true);
      });
  }

  if (success) {
    return <Redirect to='/series' />;
  }

  return (
    <>
      <h1>Nova Série</h1>
      <Form onSubmit={(data) => save(data)} />
    </>
  );
}

export default SeriesNew;
