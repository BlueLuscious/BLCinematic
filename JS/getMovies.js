import { ApiUrls, CardClassName, Pathname, Template } from "./constants.js"
import { ApiHandlers } from "./apiData.js"

const api = new ApiHandlers

document.addEventListener('DOMContentLoaded', () => {

    const moviesNowPlayingCard = document.getElementById('moviesNowPlaying')
    const moviesPopularCard = document.getElementById('moviesPopular')
    const moviesTopRatedCard = document.getElementById('moviesTopRated')
    const moviesUpcomingCard = document.getElementById('moviesUpcoming')

    const moviesByIndexCard = document.getElementById('moviesByIndex')
    const seriesByIndexCard = document.getElementById('seriesByIndex')
    const cardsByIndex = [moviesByIndexCard, seriesByIndexCard]

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')

    handleMoviesData(ApiUrls.moviesNowPlaying, moviesNowPlayingCard, cardsByIndex, 'movie_now_playing', indexCard)
    handleMoviesData(ApiUrls.moviesPopular, moviesPopularCard, cardsByIndex, 'movie_popular', indexCard)
    handleMoviesData(ApiUrls.moviesTopRated, moviesTopRatedCard, cardsByIndex, 'movie_top_rated', indexCard)
    handleMoviesData(ApiUrls.moviesUpcoming, moviesUpcomingCard, cardsByIndex, 'movie_upcoming', indexCard)
    
    function handleMoviesData(apiUrl, cardAll, cardsByIndex, category, indexCard) {
        if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
            window.location.pathname === Pathname.HTML_FOLDER + Template.MOVIES_TEMPLATE && window.location.search == '' ||
            window.location.search === `?${category}&indexCard=${indexCard}`
        ) {
            api.getApiDataByURL(apiUrl).then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    api.getResults(data.results, cardAll)
                    api.getClickedCard(data.results, cardAll, CardClassName.MOVIES_CLASS, category)
                }
                if (indexCard) {
                    api.getResultsByIndexcard(data.results[indexCard], cardsByIndex)
                }
            })
        }
    }

})