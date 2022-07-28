import { trendingMovies } from 'components/api';
import { useState, useEffect } from 'react';
import { HomeItem } from './homeitem';
export function Home() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    trendingMovies().then(setMovie);
  }, []);

  return (
    <>
      <ul>
        {movie &&
          movie.map(d => <HomeItem key={d.id} id={d.id} img={d.img} title={d.title} />)}
      </ul>
    </>
  );
}
