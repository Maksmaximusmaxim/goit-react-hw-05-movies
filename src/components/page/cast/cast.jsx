import { useState , useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getCredits} from 'components/api';

export function Cast() {
 const [cast ,setCast] = useState([]);
    useEffect(()=>{
        getCredits().then(setCast)
    })
    return ( <h1>cast hi</h1> )
}