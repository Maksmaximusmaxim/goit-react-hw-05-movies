import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const importComponent = (importComponentName, path) =>
  lazy(() => {
    return import(`./page/${path}`).then(module => {
      return { default: module[importComponentName] };
    });
  });
const Home = importComponent('Home', 'Home'.toLowerCase());
const Films = importComponent('Films', 'Films'.toLowerCase());
const Erorr = importComponent('Erorr', 'Erorr'.toLowerCase());
const MoreInfoFilms = importComponent(
  'MoreInfoFilms',
  'MoreInfoFilm'.toLowerCase()
);
const Cast = importComponent('Cast', 'Cast'.toLowerCase());
const Reviews = importComponent('Reviews', 'Reviews'.toLowerCase());
const FilmLink = lazy(() => {
  return import('./films/filmsLink').then(module => {
    return { default: module.FilmLink };
  });
});
const Navigation = lazy(() => {
  return import('components/navigation/navigation').then(module => {
    return { default: module.Navigation };
  });
});

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>загружаем</div>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="films" element={<Films />}>
              <Route path="films/:id" element={<FilmLink />} />
              <Route path="films/:movieId" element={<MoreInfoFilms />} />
            </Route>

            <Route path="films/:movieId" element={<MoreInfoFilms />}>
              <Route path="cast" element={<Cast />} />

              <Route path="reviews" element={<Reviews />} />
            </Route>

            <Route path="*" element={<Erorr />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
