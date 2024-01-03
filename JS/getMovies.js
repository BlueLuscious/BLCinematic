import { formatDate } from "./functions.js"
import { getApiDataByURL } from "./functions.js"
import { getResults } from "./functions.js"
import { getClickedCard } from "./functions.js"
import { loadFooter } from "./functions.js"

document.addEventListener('DOMContentLoaded', function () {

    // MOVIES //
    const moviesNowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
    const moviesPopular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    const moviesTopRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
    const moviesUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'

    const moviesNowPlayingCard = document.getElementById('moviesNowPlaying')
    const moviesPopularCard = document.getElementById('moviesPopular')
    const moviesTopRatedCard = document.getElementById('moviesTopRated')
    const moviesUpcomingCard = document.getElementById('moviesUpcoming')

    const cardClassName = 'main_movies_tr'

    getApiDataByURL(moviesNowPlaying)
        .then(data => {
            getResults(data.results, moviesNowPlayingCard, formatDate)
            getClickedCard(data.results, moviesNowPlayingCard, cardClassName)
            loadFooter()
        })

    getApiDataByURL(moviesPopular)
        .then(data => {
            getResults(data.results, moviesPopularCard, formatDate)
            getClickedCard(data.results, moviesPopularCard, cardClassName)
            loadFooter()
        })

    getApiDataByURL(moviesTopRated)
        .then(data => {
            getResults(data.results, moviesTopRatedCard, formatDate)
            getClickedCard(data.results, moviesTopRatedCard, cardClassName)
            loadFooter()
        })

    getApiDataByURL(moviesUpcoming)
        .then(data => {
            getResults(data.results, moviesUpcomingCard, formatDate)
            getClickedCard(data.results, moviesUpcomingCard, cardClassName)
            loadFooter()
        })
    // MOVIES //

})