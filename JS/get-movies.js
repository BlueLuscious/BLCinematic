import { ApiUrls, CardClassName, Pathname, Template } from "./constants.js"
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

    const urlParams = new URLSearchParams(window.location.search)
    const indexCard = urlParams.get('indexCard')

    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.pathname == Pathname.HTML_FOLDER + Template.MOVIES_TEMPLATE && window.location.search == '' ||
        window.location.search == `?movie_now_playing&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.moviesNowPlaying)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, moviesNowPlayingCard, toolbox.formatDate)
                    getClickedCard(data.results, moviesNowPlayingCard, CardClassName.MOVIES_CLASS, 'movie_now_playing')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                }
            })
        }

    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.pathname == Pathname.HTML_FOLDER + Template.MOVIES_TEMPLATE && window.location.search == '' ||
        window.location.search == `?movie_popular&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.moviesPopular)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, moviesPopularCard, toolbox.formatDate)
                    getClickedCard(data.results, moviesPopularCard, CardClassName.MOVIES_CLASS, 'movie_popular')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                }
            })
        }

    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.pathname == Pathname.HTML_FOLDER + Template.MOVIES_TEMPLATE && window.location.search == '' ||
        window.location.search == `?movie_top_rated&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.moviesTopRated)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, moviesTopRatedCard, toolbox.formatDate)
                    getClickedCard(data.results, moviesTopRatedCard, CardClassName.MOVIES_CLASS, 'movie_top_rated')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                }
            })
        }

    if (window.location.pathname == Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE ||
        window.location.pathname == Pathname.HTML_FOLDER + Template.MOVIES_TEMPLATE && window.location.search == '' ||
        window.location.search == `?movie_upcoming&indexCard=${indexCard}`
        ) {
            getApiDataByURL(ApiUrls.moviesUpcoming)
            .then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    getResults(data.results, moviesUpcomingCard, toolbox.formatDate)
                    getClickedCard(data.results, moviesUpcomingCard, CardClassName.MOVIES_CLASS, 'movie_upcoming')
                    toolbox.loadFooter()
                }
                if (indexCard) {
                    getResultsByIndexcard(data.results[indexCard], cards, toolbox.formatDate)
                }
            })
        }
    // MOVIES //
})