import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
const MYKEY = '948166b3059358327aeb7a534b796286';
export function trendingMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${MYKEY}`
  )
    .then(r => {
      if (!r.ok) {
        //    throw new Error(r.message)
        return Notiflix.Notify.info('проблемы с сервером');
      }

      return r.json();
    })
    .then(r => {
      const data = r.results.map(mapd => {
        const d = {
          title: mapd.original_title,
          id: mapd.id,
          img: mapd.poster_path,
        };
        return d;
      });
      return data;
    });
}
export function MoreInfo(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${MYKEY}&language=UK`
  )
    .then(r => {
      if (!r.ok) {
        return Notiflix.Notify.info('проблемы с сервером');
      }
      return r.json();
    })
    .then(r => {
      const data = {
        title: r.title,
        rating: r.popularity,
        releaseDate: r.release_date,
        genres: r.genres,
        overview: r.overview,
        posterPath: r.poster_path,
      };
      return data;
    });
}
export function getCredits(id) {
  console.log(id, '1234');
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${MYKEY}&language=UK`
  )
    .then(r => {
      if (!r.ok) {
        return Notiflix.Notify.info('проблемы с сервером');
      }
      return r.json();
    })
    .then(r =>
      r.cast.map(d => {
        const data = {
          character: d.character,
          name: d.original_name,
          photo: d.profile_path,
          id: d.id,
        };
        return data;
      })
    );
}
export function getReviews(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${MYKEY}&language=UK&page=1`
  )
    .then(r => {
      if (!r.ok) {
        return Notiflix.Notify.info('проблемы с сервером');
      }
      return r.json();
    })
    .then(r => {
      const data = {
        results: r.results,
      };
      return data;
    });
}
export function getMoviesByKeyword(search) {
 
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${MYKEY}&language=UK&query=${search}&page=1&include_adult=false`
  ).then(r => {
    if(!r.ok){
      return Notiflix.Notify.info('проблемы с сервером');
    }
    return r.json();
  }).then(r => {
    const data = r.results.map(
    mapd => {
      const d = {
        id:mapd.id,
        title:mapd.original_title,
      }
      return d;
    }
    )
   return data; 
  })
}

MoreInfo.propTypes = {
  id: PropTypes.number
}
getCredits.propTypes = {
  id: PropTypes.number
}
getReviews.propTypes = {
  id: PropTypes.number
}
getMoviesByKeyword.propTypes = {
  search: PropTypes.string
}