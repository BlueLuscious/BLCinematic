import { ApiUrls, CardClassName, Template } from "./constants.js"
import { ApiHandlers } from "./apiData.js"

const api = new ApiHandlers

document.addEventListener('DOMContentLoaded', () => {

    const seriesAiringTodayCard = document.getElementById('seriesAiringToday')
    const seriesOnTheAirCard = document.getElementById('seriesOnTheAir')
    const seriesPopularCard = document.getElementById('seriesPopular')
    const seriesTopRatedCard = document.getElementById('seriesTopRated')

    const moviesByIndexCard = document.getElementById('moviesByIndex')
    const seriesByIndexCard = document.getElementById('seriesByIndex')
    const cardsByIndex = [moviesByIndexCard, seriesByIndexCard]

    api.handleApiData(
        ApiUrls.seriesAiringToday, seriesAiringTodayCard, cardsByIndex, 'serie_airing_today', Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS
    )
    api.handleApiData(
        ApiUrls.seriesOnTheAir, seriesOnTheAirCard, cardsByIndex, 'serie_on_the_air', Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS
    )
    api.handleApiData(
        ApiUrls.seriesPopular, seriesPopularCard, cardsByIndex, 'serie_popular', Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS
    )
    api.handleApiData(
        ApiUrls.seriesTopRated, seriesTopRatedCard, cardsByIndex, 'serie_top_rated', Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS
    )

})