import { ApiUrls, Pathname, Template } from "./constants.js"
import { getApiDataByURL, getResults, getResultsByIndexcard, getClickedCard } from "./api-data.js"
import { Toolbox } from "./handlers.js"
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {

    // SERIES //
    const seriesAiringTodayCard = document.getElementById('seriesAiringToday')
    const seriesOnTheAirCard = document.getElementById('seriesOnTheAir')
    const seriesPopularCard = document.getElementById('seriesPopular')
    const seriesTopRatedCard = document.getElementById('seriesTopRated')

    const seriesByIndexCard = document.getElementById('seriesByIndex')

    const cardClassName = 'main_series_tr'

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')
    const itemId = urlParams.get('itemId')

    const itemIds = []

    getApiDataByURL(ApiUrls.seriesAiringToday)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, seriesAiringTodayCard, toolbox.formatDate)
                getClickedCard(data.results, seriesAiringTodayCard, cardClassName)
                toolbox.loadFooter()
            }
            if (indexCard && itemId) {
                if (itemId == data.results[indexCard].id) {
                    itemIds.push(itemId)
                    if (itemIds[0] == itemIds[1] || itemIds[0 == itemIds[2] || itemIds[0] == itemIds[3]]) {
                        itemIds = itemIds.filter(id => id !== itemId)
                    }
                    getResultsByIndexcard(data.results[indexCard], seriesByIndexCard, toolbox.formatDate)
                }
            }
        })

    getApiDataByURL(ApiUrls.seriesOnTheAir)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, seriesOnTheAirCard, toolbox.formatDate)
                getClickedCard(data.results, seriesOnTheAirCard, cardClassName)
                toolbox.loadFooter()
            }
            if (indexCard && itemId) {
                if (itemId == data.results[indexCard].id) {
                    itemIds.push(itemId)
                    if (itemIds[0] == itemIds[1] || itemIds[0 == itemIds[2] || itemIds[0] == itemIds[3]]) {
                        itemIds = itemIds.filter(id => id !== itemId)
                    }
                    getResultsByIndexcard(data.results[indexCard], seriesByIndexCard, toolbox.formatDate)
                }
            }
        })

    getApiDataByURL(ApiUrls.seriesPopular)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, seriesPopularCard, toolbox.formatDate)
                getClickedCard(data.results, seriesPopularCard, cardClassName)
                toolbox.loadFooter()
            }
            if (indexCard && itemId) {
                if (itemId == data.results[indexCard].id) {
                    itemIds.push(itemId)
                    if (itemIds[0] == itemIds[1] || itemIds[0 == itemIds[2] || itemIds[0] == itemIds[3]]) {
                        itemIds = itemIds.filter(id => id !== itemId)
                    }
                    getResultsByIndexcard(data.results[indexCard], seriesByIndexCard, toolbox.formatDate)
                }
            }
        })

    getApiDataByURL(ApiUrls.seriesTopRated)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, seriesTopRatedCard, toolbox.formatDate)
                getClickedCard(data.results, seriesTopRatedCard, cardClassName)
                toolbox.loadFooter()
            }
            if (indexCard && itemId) {
                if (itemId == data.results[indexCard].id) {
                    itemIds.push(itemId)
                    if (itemIds[0] == itemIds[1] || itemIds[0 == itemIds[2] || itemIds[0] == itemIds[3]]) {
                        itemIds = itemIds.filter(id => id !== itemId)
                    }
                    getResultsByIndexcard(data.results[indexCard], seriesByIndexCard, toolbox.formatDate)
                }
            }
        })
    // SERIES //
})