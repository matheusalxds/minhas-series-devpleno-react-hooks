import React, { useEffect, useState } from 'react';
import GenresSearchable from '../../../common/Searchable/Genres';

function SeriesForm(props) {
  const { onSubmit, onCancel, data } = props;
  const [form, setForm] = useState({
    name: ''
  });

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
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Nome da série"
          value={(form && form.name) || ''}
          onChange={onChange('name')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Gênero</label>
        <GenresSearchable
          className="form-control"
          multiple={false}
          onChange={onChange('genre_id')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="comments">Comentários</label>
        <input
          type="text"
          className="form-control"
          placeholder="Digite um comentário..."
          value={(form && form.comments) || ''}
          onChange={onChange('comments')}
        />
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="status"
          id="WATCHED"
          value="WATCHED"
          onClick={onChange('status')}
        />
        <label className="form-check-label" htmlFor="WATCHED">
          Assistido
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="status"
          id="TO_WATCH"
          value="TO_WATCH"
          onClick={onChange('status')}
        />
        <label className="form-check-label" htmlFor="TO_WATCH">
          Para assistir
        </label>
      </div>
      <button type="button" className="btn btn-primary" onClick={() => onSubmit(form)}>Salvar</button>
      <button type="button" className="btn btn-outline-secondary ml-2" onClick={onCancel}>Cancelar</button>
    </form>
  );
}

export default SeriesForm;
