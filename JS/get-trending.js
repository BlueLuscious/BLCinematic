import { ApiUrls, Pathname, Template } from "./constants.js"
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

    const cardClassName = 'main_trending_tr'

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')
    const itemId = urlParams.get('itemId')

    const itemIds = []

    // trending day //
    getApiDataByURL(ApiUrls.trendingAllDay)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, trendingAllDayCard, toolbox.formatDate)
                getClickedCard(data.results, trendingAllDayCard, cardClassName)
                toolbox.loadFooter()
            }
            if (indexCard && itemId) {
                if (itemId == data.results[indexCard].id) {
                    itemIds.push(itemId)
                    if (itemIds[0] == itemIds[1] || itemIds[0 == itemIds[2] || itemIds[0] == itemIds[3]]) {
                        itemIds = itemIds.filter(id => id !== itemId)
                    }
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                }
            }
        })

    getApiDataByURL(ApiUrls.trendingMoviesDay)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, trendingMoviesDayCard, toolbox.formatDate)
                getClickedCard(data.results, trendingMoviesDayCard, cardClassName)
                toolbox.loadFooter()
            }
            if (indexCard && itemId) {
                if (itemId == data.results[indexCard].id) {
                    itemIds.push(itemId)
                    if (itemIds[0] == itemIds[1] || itemIds[0 == itemIds[2] || itemIds[0] == itemIds[3]]) {
                        itemIds = itemIds.filter(id => id !== itemId)
                    }
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                }
            }
        })

    getApiDataByURL(ApiUrls.trendingSeriesDay)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, trendingSeriesDayCard, toolbox.formatDate)
                getClickedCard(data.results, trendingSeriesDayCard, cardClassName)
                toolbox.loadFooter()
            }
            if (indexCard && itemId) {
                if (itemId == data.results[indexCard].id) {
                    itemIds.push(itemId)
                    if (itemIds[0] == itemIds[1] || itemIds[0 == itemIds[2] || itemIds[0] == itemIds[3]]) {
                        itemIds = itemIds.filter(id => id !== itemId)
                    }
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                }
            }
        })
    // trending day //

    // trending week //
    getApiDataByURL(ApiUrls.trendingAllWeek)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, trendingAllWeekCard, toolbox.formatDate)
                getClickedCard(data.results, trendingAllWeekCard, cardClassName)
                toolbox.loadFooter()
            }
            if (indexCard && itemId) {
                if (itemId == data.results[indexCard].id) {
                    itemIds.push(itemId)
                    if (itemIds[0] == itemIds[1] || itemIds[0 == itemIds[2] || itemIds[0] == itemIds[3]]) {
                        itemIds = itemIds.filter(id => id !== itemId)
                    }
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                }
            }
        })

    getApiDataByURL(ApiUrls.trendingMoviesWeek)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, trendingMoviesWeekCard, toolbox.formatDate)
                getClickedCard(data.results, trendingMoviesWeekCard, cardClassName)
                toolbox.loadFooter()
            }
            if (indexCard && itemId) {
                if (itemId == data.results[indexCard].id) {
                    itemIds.push(itemId)
                    if (itemIds[0] == itemIds[1] || itemIds[0 == itemIds[2] || itemIds[0] == itemIds[3]]) {
                        itemIds = itemIds.filter(id => id !== itemId)
                    }
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                }
            }
        })

    getApiDataByURL(ApiUrls.trendingSeriesWeek)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, trendingSeriesWeekCard, toolbox.formatDate)
                getClickedCard(data.results, trendingSeriesWeekCard, cardClassName)
                toolbox.loadFooter()
            }
            if (indexCard && itemId) {
                if (itemId == data.results[indexCard].id) {
                    itemIds.push(itemId)
                    if (itemIds[0] == itemIds[1] || itemIds[0 == itemIds[2] || itemIds[0] == itemIds[3]]) {
                        itemIds = itemIds.filter(id => id !== itemId)
                    }
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                }
            }
        })
    // trending week //
    // TRENDING //
})