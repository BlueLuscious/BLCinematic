import { ApiUrls, Pathname, Template } from "./constants.js"
import { getApiDataByURL, getResults, getResultsByIndexcard, getClickedCard } from "./api-data.js"
import { Toolbox } from "./handlers.js"
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {

    // MOVIES //
    const moviesNowPlayingCard = document.getElementById('moviesNowPlaying')
    const moviesPopularCard = document.getElementById('moviesPopular')
    const moviesTopRatedCard = document.getElementById('moviesTopRated')
    const moviesUpcomingCard = document.getElementById('moviesUpcoming')

    const moviesByIndexCard = document.getElementById('moviesByIndex')
    const seriesByIndexCard = document.getElementById('seriesByIndex')
    const cards = [moviesByIndexCard, seriesByIndexCard]

    const cardClassName = 'main_movies_tr'

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')
    const itemId = urlParams.get('itemId')

    const itemIds = []

    getApiDataByURL(ApiUrls.moviesNowPlaying)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, moviesNowPlayingCard, toolbox.formatDate)
                getClickedCard(data.results, moviesNowPlayingCard, cardClassName)
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

    getApiDataByURL(ApiUrls.moviesPopular)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, moviesPopularCard, toolbox.formatDate)
                getClickedCard(data.results, moviesPopularCard, cardClassName)
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

    getApiDataByURL(ApiUrls.moviesTopRated)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, moviesTopRatedCard, toolbox.formatDate)
                getClickedCard(data.results, moviesTopRatedCard, cardClassName)
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

    getApiDataByURL(ApiUrls.moviesUpcoming)
        .then(data => {
            if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                getResults(data.results, moviesUpcomingCard, toolbox.formatDate)
                getClickedCard(data.results, moviesUpcomingCard, cardClassName)
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
    // MOVIES //
})