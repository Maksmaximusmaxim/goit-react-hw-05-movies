import {getReviews} from 'components/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export function Reviews() {
    const {movieId} = useParams()
    const [reviews , setReviews] = useState(null)
    useEffect(()=>{getReviews(movieId).then(setReviews)}, [movieId])
    console.log(reviews)
    //  if(!reviews){
    //     return (<> <h1>отзывов нет</h1></>)
    //  }
    //  return ( <>{reviews && reviews.map(r => (
    //     <div>
    //         <div>автор:{r.author}</div>
    //         <div>текст:{r.content}</div>
    //     </div>
    //  ))}</>)
}