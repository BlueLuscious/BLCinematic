import { ApiUrls, CardClassName, Pathname, Template } from "./constants.js"
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

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')

    handleSeriesData(ApiUrls.seriesAiringToday, seriesAiringTodayCard, cardsByIndex, 'serie_airing_today', indexCard)
    handleSeriesData(ApiUrls.seriesOnTheAir, seriesOnTheAirCard, cardsByIndex, 'serie_on_the_air', indexCard)
    handleSeriesData(ApiUrls.seriesPopular, seriesPopularCard, cardsByIndex, 'serie_popular', indexCard)
    handleSeriesData(ApiUrls.seriesTopRated, seriesTopRatedCard, cardsByIndex, 'serie_top_rated', indexCard)

    function handleSeriesData(apiUrl, cardAll, cardsByIndex, category, indexCard) {
        if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
            window.location.pathname === Pathname.HTML_FOLDER + Template.SERIES_TEMPLATE && window.location.search == '' ||
            window.location.search === `?${category}&indexCard=${indexCard}`
        ) {
            api.getApiDataByURL(apiUrl).then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    api.getResults(data.results, cardAll)
                    api.getClickedCard(data.results, cardAll, CardClassName.SERIES_CLASS, category)
                }
                if (indexCard) {
                    api.getResultsByIndexcard(data.results[indexCard], cardsByIndex)
                }
            })
        }
    }

})