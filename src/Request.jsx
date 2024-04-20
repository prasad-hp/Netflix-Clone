
const apiKey = ""

const requests = {
    netflix: `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`,
    trending : `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`,
    topRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`,
    action : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`,
    comedy : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`,
    horror : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`,
    romance : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10749`,
    docu : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`

    }

export default requests;