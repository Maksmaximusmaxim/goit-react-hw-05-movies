import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'components/api';
import { CastItem } from 'components/cast/castItem';
import List from '@mui/material/List';
export function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
console.log(movieId)
  useEffect(() => {
    getCredits(movieId).then(setCast);
  }, [movieId]);
  const link = 'https://image.tmdb.org/t/p/w200';
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {cast &&
        cast.map(data => (
          <CastItem
            key={data.id}
            img={`${link}${data.photo}`}
            character={data.character}
            name={data.name}
          />
        ))}
  
   </List>
  );
}
