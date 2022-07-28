import Notiflix from 'notiflix';
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
  console.log(id, '1234');

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
export function getCredits() {
  return fetch(
    `https://api.themoviedb.org/3/movie/361743/credits?api_key=${MYKEY}&language=UK`
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
        };
        return data;
      })
    )
    
}
export function getReviews() {
  return fetch(
    `https://api.themoviedb.org/3/movie/361743/reviews?api_key=${MYKEY}&language=UK&page=1`
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
