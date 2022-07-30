import { useSearchParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
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
  
    <Box
      onSubmit={onsubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="название"
        value={productName}
        onChange={e => updateQueryString(e.target.value)}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      {/* <input
          value={productName}
          onChange={e => updateQueryString(e.target.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /> */}

      <Button variant="contained" type="submit">
        поиск
      </Button>
    </Box>
   
  );
}
