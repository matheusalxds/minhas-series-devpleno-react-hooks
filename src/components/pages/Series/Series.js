import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteSerie from './Delete/Delete';

const Series = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/series')
      .then((res) => {
        setData(res.data.data);
      });
  });

  function handleCallback(id) {
    if (id) {
      const filteredData = data.filter(item => item.id !== id);
      setData(filteredData);
    }
  }

  const renderRow = (item) => {
    return (
      <tr key={item.id}>
        <th scope='row'>{item.id}</th>
        <td>{item.name}</td>
        <td>
          <Link to={'/series/' + item.id} className='btn btn-warning'>
            Editar
          </Link>
          <Link to={'/series/detalhes/' + item.id} className='btn btn-success ml-2 mr-2'>
            Profile
          </Link>
          <DeleteSerie id={item.id} callback={id => handleCallback(id)} />
        </td>
      </tr>
    );
  };

  const renderNoContent = () => {
    return (
      <div>Nenhuma série foi encontrada.</div>
    );
  };

  const renderTable = () => {
    return (<table className='table table-dark'>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Nome</th>
          <th scope='col'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map(renderRow)}
      </tbody>
    </table>);
  };

  return (
    <div className='container'>
      <h1>Séries</h1>
      <Link to='/series/cadastrar'>Novo</Link>
      {data && data.length ? renderTable() : renderNoContent()}
    </div>
  );
};

export default Series;
