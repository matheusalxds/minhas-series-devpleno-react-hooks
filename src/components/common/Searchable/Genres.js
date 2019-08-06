import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Genres(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/genres/')
      .then(res => setData(res.data.data));
  }, []);

  return (
    <select name="genres" {...props}>
      {data && data.length && data.map(item => {
        return (
          <option value={item.name} key={item.id}>{item.name}</option>
        );
      })}
    </select>
  );
}

export default Genres;
