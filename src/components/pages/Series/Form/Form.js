import React, { useEffect, useState } from 'react';
import GenresSearchable from '../../../common/Searchable/Genres';

function SeriesForm(props) {
  const { onSubmit, onCancel, data } = props;
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(data);
  }, [data]);

  const onChange = field => (event) => {
    setForm({
      ...form,
      [field]: event.target.value,
    });
  };

  return (
    <form>
      <pre>{JSON.stringify(data)}</pre>
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Nome da série"
          value={form.name || ''}
          onChange={onChange('name')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Gênero</label>
        <GenresSearchable
          className="form-control"
          multiple={false}
          value={form.genre || ''}
          onChange={onChange('genre')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="comments">Comentários</label>
        <input
          type="text"
          className="form-control"
          id="comments"
          placeholder="Digite um comentário..."
          value={form.comments || ''}
          onChange={event => onChange(event)}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={() => onSubmit(form)}>Salvar</button>
      <button type="button" className="btn btn-outline-secondary ml-2" onClick={onCancel}>Cancelar</button>
    </form>
  );
}

export default SeriesForm;
