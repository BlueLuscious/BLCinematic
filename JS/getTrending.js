import { ApiUrls, CardClassName, Pathname, Template } from "./constants.js"
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

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')

    handleTrendingData(ApiUrls.trendingAllDay, trendingAllDayCard, cardsByIndex, 'trending_all_day', indexCard)
    handleTrendingData(ApiUrls.trendingMoviesDay, trendingMoviesDayCard, cardsByIndex, 'trending_movie_day', indexCard)
    handleTrendingData(ApiUrls.trendingSeriesDay, trendingSeriesDayCard, cardsByIndex, 'trending_serie_day', indexCard)
    handleTrendingData(ApiUrls.trendingAllWeek, trendingAllWeekCard, cardsByIndex, 'trending_all_week', indexCard)
    handleTrendingData(ApiUrls.trendingMoviesWeek, trendingMoviesWeekCard, cardsByIndex, 'trending_movie_week', indexCard)
    handleTrendingData(ApiUrls.trendingSeriesWeek, trendingSeriesWeekCard, cardsByIndex, 'trending_serie_week', indexCard)

    function handleTrendingData(apiUrl, cardAll, cardsByIndex, category, indexCard) {
        if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
            window.location.search === `?${category}&indexCard=${indexCard}`
        ) {
            api.getApiDataByURL(apiUrl).then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    api.getResults(data.results, cardAll)
                    api.getClickedCard(data.results, cardAll, CardClassName.TRENDING_CLASS, category)
                }
                if (indexCard) {
                    api.getResultsByIndexcard(data.results[indexCard], cardsByIndex)
                }
            })
        }
    }

})