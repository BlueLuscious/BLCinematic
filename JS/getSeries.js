import { ApiUrls, CardClassName, Pathname, Template } from "./constants.js"
import { getApiDataByURL, getResults, getResultsByIndexcard, getClickedCard } from "./apiData.js"
import { Toolbox } from "./handlers.js"
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {

    // SERIES //
    const seriesAiringTodayCard = document.getElementById('seriesAiringToday')
    const seriesOnTheAirCard = document.getElementById('seriesOnTheAir')
    const seriesPopularCard = document.getElementById('seriesPopular')
    const seriesTopRatedCard = document.getElementById('seriesTopRated')

    const moviesByIndexCard = document.getElementById('moviesByIndex')
    const seriesByIndexCard = document.getElementById('seriesByIndex')
    const cards = [moviesByIndexCard, seriesByIndexCard]

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')

    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.pathname == Pathname.HTML_FOLDER + Template.SERIES_TEMPLATE && window.location.search == '' ||
        window.location.search == `?serie_airing_today&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.seriesAiringToday)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, seriesAiringTodayCard, toolbox.formatDate)
                    getClickedCard(data.results, seriesAiringTodayCard, CardClassName.SERIES_CLASS, 'serie_airing_today')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                    toolbox.loadFooter()
                }
            })
        }

    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.pathname == Pathname.HTML_FOLDER + Template.SERIES_TEMPLATE && window.location.search == '' ||
        window.location.search == `?serie_on_the_air&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.seriesOnTheAir)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, seriesOnTheAirCard, toolbox.formatDate)
                    getClickedCard(data.results, seriesOnTheAirCard, CardClassName.SERIES_CLASS, 'serie_on_the_air')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                    toolbox.loadFooter()
                }
            })
        }

    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.pathname == Pathname.HTML_FOLDER + Template.SERIES_TEMPLATE && window.location.search == '' ||
        window.location.search == `?serie_popular&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.seriesPopular)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, seriesPopularCard, toolbox.formatDate)
                    getClickedCard(data.results, seriesPopularCard, CardClassName.SERIES_CLASS, 'serie_popular')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                    toolbox.loadFooter()
                }
            })
        }

    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.pathname == Pathname.HTML_FOLDER + Template.SERIES_TEMPLATE && window.location.search == '' ||
        window.location.search == `?serie_top_rated&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.seriesTopRated)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, seriesTopRatedCard, toolbox.formatDate)
                    getClickedCard(data.results, seriesTopRatedCard, CardClassName.SERIES_CLASS, 'serie_top_rated')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                    toolbox.loadFooter()
                }
            })
        }
    // SERIES //
})