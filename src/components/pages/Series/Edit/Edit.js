import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Form from '../Form/Form.js';

function EditSeries(props) {
  const { params } = props.match;
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('/api/series/' + params.id).then(res => {
      setData(res.data);
    });
  }, [params.id]);

  function save(data) {
    axios
      .put('/api/series/' + params.id, {
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
    <div className='container'>
      <h1>Editar Série</h1>
      <Form onSubmit={(dataToSave) => save(dataToSave)} data={data} />
    </div>
  );
}

export default EditSeries;
