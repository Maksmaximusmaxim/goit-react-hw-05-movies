import { MoreInfo } from 'components/api';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export function MoreInfoFilms() {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    MoreInfo(movieId).then(setData);
  }, [movieId]);

  //   const m = data.genres.map(r => r.name);
  //   const s = m.join();

  const link = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      {data && (
        <div>
          <img src={`${link}${data.posterPath}`} alt="фото фильма" />
          <h1>
            {data.title}({data.releaseDate})
          </h1>
          <p>Рейтинг: {data.rating}</p>
          <h2>Опис:</h2>
          <p>{data.overview}</p>
          <h2>Жанри:</h2>
          <p>{data.genres.map(r => r.name).join()}</p>
        </div>
      )}
      <hr />
      <NavLink to="cast">Актеры</NavLink>
      <NavLink to="reviews">Отзывы</NavLink>
      <hr />
      <Outlet />
    </>
  );
}
