import { ApiUrls, CardClassName } from "./constants.js"
import { ApiHandlers } from "./apiData.js"

const api = new ApiHandlers

document.addEventListener('DOMContentLoaded', () => {

    const trendingAllDayCard = document.getElementById('trendingAllDay')
    const trendingMoviesDayCard = document.getElementById('trendingMoviesDay')
    const trendingSeriesDayCard = document.getElementById('trendingSeriesDay')
    const trendingAllWeekCard = document.getElementById('trendingAllWeek')
    const trendingMoviesWeekCard = document.getElementById('trendingMoviesWeek')
    const trendingSeriesWeekCard = document.getElementById('trendingSeriesWeek')

    const moviesByIndexCard = document.getElementById('moviesByIndex')
    const seriesByIndexCard = document.getElementById('seriesByIndex')
    const cardsByIndex = [moviesByIndexCard, seriesByIndexCard]

    api.handleApiData(
        ApiUrls.trendingAllDay, trendingAllDayCard, cardsByIndex, 'trending_all_day', null, CardClassName.TRENDING_CLASS
    )
    api.handleApiData(
        ApiUrls.trendingMoviesDay, trendingMoviesDayCard, cardsByIndex, 'trending_movie_day', null, CardClassName.TRENDING_CLASS
    )
    api.handleApiData(
        ApiUrls.trendingSeriesDay, trendingSeriesDayCard, cardsByIndex, 'trending_serie_day', null, CardClassName.TRENDING_CLASS
    )
    api.handleApiData(
        ApiUrls.trendingAllWeek, trendingAllWeekCard, cardsByIndex, 'trending_all_week', null, CardClassName.TRENDING_CLASS
    )
    api.handleApiData(
        ApiUrls.trendingMoviesWeek, trendingMoviesWeekCard, cardsByIndex, 'trending_movie_week', null, CardClassName.TRENDING_CLASS
    )
    api.handleApiData(
        ApiUrls.trendingSeriesWeek, trendingSeriesWeekCard, cardsByIndex, 'trending_serie_week', null, CardClassName.TRENDING_CLASS
    )

})