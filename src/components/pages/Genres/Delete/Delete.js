import React from 'react';
import axios from 'axios';

function GenresEdit(props) {
  const { id, callback } = props;

  function remove() {
    axios.delete('/api/genres/' + id, {}).then(res => callback(id));
  }

  return (
    <button className='btn btn-danger' onClick={remove}>
      -
    </button>
  );
}

export default GenresEdit;
