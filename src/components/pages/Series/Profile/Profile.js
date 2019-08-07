import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Badge } from 'reactstrap';
import Form from '../Form/Form.js';

function Profile(props) {
  const { params } = props.match;
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({});
  const [mode, setMode] = useState('INFO');

  useEffect(() => {
    if (params && params.id) {
      axios
        .get('/api/series/' + params.id)
        .then(res => setData(res.data));
    }
    //  if the params.id change, the page will be reloaded
  }, [params, params.id]);

  function save(data) {
    axios
      .put('/api/series/' + params.id, data)
      .then(res => {
        setSuccess(true);
      });
  }

  // custom header
  const masterHeader = {
    height: '50vh',
    minHeight: '500px',
    backgroundImage: `url('${data.poster}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  if (success) {
    return <Redirect to='/series' />;
  }

  return (
    <>
      {data && (<header style={masterHeader}>
        <div className='h-100' style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div className='h-100 container'>
            <div className='row h-100 align-items-center'>
              <div className='col-3'>
                <img src={data.background} alt={data.name} className='img-fluid img-thumbnail' />
              </div>
              <div className='col-9'>
                <h1 className='font-weight-light text-white'>{data.name}</h1>
                <div className='lead text-white'>
                  {data.status === 'WATCHED' && <Badge color='success'>Assistido</Badge>}
                  {data.status === 'TO_WATCH' && <Badge color='warning'>Para assistir</Badge>}
                  Gênero: {data.genre}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>)}
      <div className='container'>
        <button onClick={() => setMode('EDIT')}>Editar</button>
      </div>
      <div className='container'>
        <h1>Editar Série</h1>
        {mode === 'EDIT' && (
          <Form onSubmit={(dataToSave) => save(dataToSave)} data={data} onCancel={() => setMode('INFO')} />
        )}
      </div>
    </>
  );
}

export default Profile;
