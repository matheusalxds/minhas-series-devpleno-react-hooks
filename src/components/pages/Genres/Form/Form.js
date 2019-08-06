import React, { useEffect, useState } from 'react';

function GenresForm(props) {
  const { onSubmit, data } = props;
  const [name, setName] = useState('');

  useEffect(() => {
    const startData = () => {
      if (data && data.name) setName(data.name);
    };
    return startData();
  }, [data]);

  function onChange(event) {
    setName(event.target.value);
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Nome do gênero"
          value={name}
          onChange={event => onChange(event)}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={() => onSubmit(name)}>Salvar</button>
    </form>
  );
}

export default GenresForm;
