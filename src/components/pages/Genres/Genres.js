import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteGenres from './Delete/Delete';

const Genres = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('/api/genres')
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
          <DeleteGenres id={item.id} callback={id => handleCallback(id)} />
          <Link to={'/generos/' + item.id} className='btn btn-warning ml-2'>
            *
          </Link>
        </td>
      </tr>
    );
  };

  const renderNoContent = () => {
    return (
      <div>Nenhum gênero foi encontrado.</div>
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
    <div>
      <h1>Gêneros</h1>
      <Link to='/generos/cadastrar'>Novo</Link>
      {data && data.length ? renderTable() : renderNoContent()}
    </div>
  );
};

export default Genres;
