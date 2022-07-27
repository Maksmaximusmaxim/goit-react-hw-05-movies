import { Routes, Route } from 'react-router-dom';
import { Navigation } from './navigation/navigation';
import { Home } from './page/home/home';
import { Films } from './page/films/films';
import { Erorr } from './page/erorr/erorr';
import {MoreInfoFilms} from 'components/page/films/moreinfofilm';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="films" element={<Films />} >
            <Route path=":movieId" element={<MoreInfoFilms/>}/>
          </Route>
          <Route path="*" element={<Erorr />} />
        </Route>
      </Routes>
    </div>
  );
};
