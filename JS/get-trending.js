import { ApiUrls, CardClassName, Pathname, Template } from "./constants.js"
import { getApiDataByURL, getResults, getResultsByIndexcard, getClickedCard } from "./api-data.js"
import { Toolbox } from "./handlers.js"
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {

    // const apiKey = 'cfac909fcba4ab5a5293e810bfda6d52'

    // TRENDING //
    const trendingAllDayCard = document.getElementById('trendingAllDay')
    const trendingMoviesDayCard = document.getElementById('trendingMoviesDay')
    const trendingSeriesDayCard = document.getElementById('trendingSeriesDay')
    const trendingAllWeekCard = document.getElementById('trendingAllWeek')
    const trendingMoviesWeekCard = document.getElementById('trendingMoviesWeek')
    const trendingSeriesWeekCard = document.getElementById('trendingSeriesWeek')

    const moviesByIndexCard = document.getElementById('moviesByIndex')
    const seriesByIndexCard = document.getElementById('seriesByIndex')
    const cards = [moviesByIndexCard, seriesByIndexCard]

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')

    // trending day //
    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.search == `?trending_all_day&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.trendingAllDay)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, trendingAllDayCard, toolbox.formatDate)
                    getClickedCard(data.results, trendingAllDayCard, CardClassName.TRENDING_CLASS, 'trending_all_day')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                    toolbox.loadFooter()
                }
            })
        }

    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.search == `?trending_movie_day&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.trendingMoviesDay)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, trendingMoviesDayCard, toolbox.formatDate)
                    getClickedCard(data.results, trendingMoviesDayCard, CardClassName.TRENDING_CLASS, 'trending_movie_day')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                    toolbox.loadFooter()
                }
            })
        }
        
    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.search == `?trending_serie_day&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.trendingSeriesDay)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, trendingSeriesDayCard, toolbox.formatDate)
                    getClickedCard(data.results, trendingSeriesDayCard, CardClassName.TRENDING_CLASS, 'trending_serie_day')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                    toolbox.loadFooter()
                }
            })
        }

    // trending week //
    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.search == `?trending_all_week&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.trendingAllWeek)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, trendingAllWeekCard, toolbox.formatDate)
                    getClickedCard(data.results, trendingAllWeekCard, CardClassName.TRENDING_CLASS, 'trending_all_week')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                    toolbox.loadFooter()
                }
            })
        }

        
    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.search == `?trending_movie_week&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.trendingMoviesWeek)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, trendingMoviesWeekCard, toolbox.formatDate)
                    getClickedCard(data.results, trendingMoviesWeekCard, CardClassName.TRENDING_CLASS, 'trending_movie_week')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                    toolbox.loadFooter()
                }
            })
        }


    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.search == `?trending_serie_week&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.trendingSeriesWeek)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, trendingSeriesWeekCard, toolbox.formatDate)
                    getClickedCard(data.results, trendingSeriesWeekCard, CardClassName.TRENDING_CLASS, 'trending_serie_week')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                    toolbox.loadFooter()
                }
            })
        }
    // TRENDING //
})