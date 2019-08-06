import React from 'react';
import axios from 'axios';

function DeleteSeries(props) {
  const { id, callback } = props;

  function remove() {
    axios.delete('/api/series/' + id, {}).then(res => callback(id));
  }

  return (
    <button className='btn btn-danger' onClick={remove}>
      -
    </button>
  );
}

export default DeleteSeries;
