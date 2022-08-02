import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FilmForm } from '../components/films/filmsForm';
import { getMoviesByKeyword } from 'components/api';
import { FilmLink } from '../components/films/filmsLink';

export function Films() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('name') || localStorage.getItem('search');

  const [data, setData] = useState(null);

  useEffect(() => {
    if (search === '' || !search) {
      return;
    }

    getMoviesByKeyword(search).then(r => setData(r));
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
