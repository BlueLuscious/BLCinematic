import { ApiUrls, CardClassName, Template } from "./constants.js"
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

    api.handleApiData(
        ApiUrls.moviesNowPlaying, moviesNowPlayingCard, cardsByIndex, 'movie_now_playing', Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS
    )
    api.handleApiData(
        ApiUrls.moviesPopular, moviesPopularCard, cardsByIndex, 'movie_popular', Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS
    )
    api.handleApiData(
        ApiUrls.moviesTopRated, moviesTopRatedCard, cardsByIndex, 'movie_top_rated', Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS
    )
    api.handleApiData(
        ApiUrls.moviesUpcoming, moviesUpcomingCard, cardsByIndex, 'movie_upcoming', Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS
    )

})