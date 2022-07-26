import { getReviews } from 'components/api';
// import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RewiewsItem } from 'components/reviews/rewiewsItem';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

console.log(reviews , 'fef')

  if(reviews === null || reviews.results.length === 0){
   
    return <h1>отзывов нет</h1>
  }

  return (
    <ul>
      {reviews &&
        reviews.results.map(data => (
          <RewiewsItem
          
            key={data.id}
            name={data.author}
            content={data.content}
          />
        ))}
    </ul>
  );
}
