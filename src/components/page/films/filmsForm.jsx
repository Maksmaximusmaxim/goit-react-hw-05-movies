import { useSearchParams } from 'react-router-dom';
export function FilmForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onsubmit = e => {
    e.preventDefault();
    setSearchParams('');
  };
  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : '';

    setSearchParams(nextParams);
  };
  const productName = searchParams.get('name') ?? '';

  return (
    <form onSubmit={onsubmit}>
      <label>
        название
        <input
          value={productName}
          onChange={e => updateQueryString(e.target.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type="submit">поиск</button>
    </form>
  );
}
