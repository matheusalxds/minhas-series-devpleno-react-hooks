import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Genres(props) {
  const [data, setData] = useState([]);
  const { ...newProps } = props;

  useEffect(() => {
    axios
      .get('/api/genres/')
      .then(res => setData(res.data.data));
  }, []);

  return (
    <select name="genres" {...newProps}>
      {data && data.length && data.map(item => {
        return (
          <option
            value={item.id}
            key={item.id}
          >{item.name}</option>
        );
      })}
    </select>
  );
}

export default Genres;
