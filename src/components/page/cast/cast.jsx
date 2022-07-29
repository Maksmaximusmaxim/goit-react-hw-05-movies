import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'components/api';
import { CastItem } from 'components/page/cast/castItem';

export function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits(movieId).then(setCast);
  }, [movieId]);
  const link = 'https://image.tmdb.org/t/p/w200';
  return (
    <ul>
      {cast &&
        cast.map(data => (
          <CastItem
            key={data.id}
            img={`${link}${data.photo}`}
            character={data.character}
            name={data.name}
          />
        ))}
    </ul>
  );
}
