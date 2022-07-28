import { useState , useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getCredits} from 'components/api';

export function Cast() {
 const [cast ,setCast] = useState([]);
 const {movieId} = useParams()

    useEffect(()=>{
        getCredits(movieId).then(setCast)
    }, [movieId]);
   
    return ( <>
    {cast && cast.map(data => (<><div>
        <img src="" alt="" />
        <h2>{data.name}</h2>
        <h3>{data.character}</h3>
        </div></>))}
    </>)
}