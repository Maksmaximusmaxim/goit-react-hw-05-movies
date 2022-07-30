import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FilmForm } from './filmsForm';
import { getMoviesByKeyword } from 'components/api';
import { FilmLink } from './filmsLink';

export function Films() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('name');
  console.log(search);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    getMoviesByKeyword(search).then(setData);
  }, [search]);
  console.log(data);
  return (
    <>
      <FilmForm />
      <ul>
        {data &&
          data.map(d => <FilmLink key={d.id} title={d.title} id={d.id} />)}
      </ul>

      <Outlet />
    </>
  );
}
