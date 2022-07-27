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
                title:mapd.original_title,
                  id: mapd.id,
                 img:mapd.poster_path
            }
            return d
        })
        return data
    });
}
export function MoreInfo() {
  fetch(`https://api.themoviedb.org/3/movie/438148?api_key=${MYKEY}&language=UK`).then(r => {
    if(!r.ok){
      return Notiflix.Notify.info('проблемы с сервером');
    }
    return r.json()
  })
  // .then(r=>{
  //   const data = r.map(dmap=>{
  //     const d = {
  //       title:dmap.title,
  //       rating:dmap.popularity,
  //       releaseDate:dmap.release_date,
  //       genres:dmap.genres,
  //     }
  //     return d;
  //   })
  //   return data;
  // })
}
