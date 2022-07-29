import { Routes, Route } from 'react-router-dom';
import { lazy ,Suspense } from 'react';
import { Navigation } from './page/navigation/navigation';

import { Home } from './page/home/home';
import { Films } from './page/films/films';
import { Erorr } from './page/erorr/erorr';
import {MoreInfoFilms} from 'components/page/films/moreinfofilm';
import { Cast } from './page/cast/cast';
import { Reviews } from './page/reviews/reviews';
import { FilmLink } from './page/films/filmsLink';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/* <Route path="films" element={<Films />} >
            <Route path=":movieId" element={<MoreInfoFilms/>}/>
          </Route> */}
                    <Route path="films" element={<Films />} >
                      <Route path="films/:id" element={<FilmLink />}/>
                      <Route path="films/:movieId" element={<MoreInfoFilms/>}/>
                      </Route>
                    
                    
            <Route path="films/:movieId" element={<MoreInfoFilms/>}>
              
                <Route path='cast' element={<Cast/>}/>
        
              
              <Route path='reviews' element={<Reviews/>}/>
            </Route>
          
          <Route path="*" element={<Erorr />} />
        </Route>
      </Routes>
    </div>
  );
};
