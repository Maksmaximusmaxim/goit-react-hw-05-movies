import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FilmForm } from '../films/filmsForm';
import { getMoviesByKeyword } from 'components/api';
import { FilmLink } from '../films/filmsLink';

export function Films() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('name');

  const [data, setData] = useState(null);

  useEffect(() => {
    if (search === "" || !search) {
      return;
    }
    getMoviesByKeyword(search).then(setData);
  }, [search]);

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
