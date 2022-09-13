const API_KEY="36430b491f8955c0850bafaa2e838986";

const requests={
    fetchTrending:`/trendiing/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;