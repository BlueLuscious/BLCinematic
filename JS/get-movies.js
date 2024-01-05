import { ApiUrls } from "./constants.js"
import { getApiDataByURL, getResults, getClickedCard } from "./api-data.js"
import { Toolbox } from "./handlers.js"
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {

    // MOVIES //
    const moviesNowPlayingCard = document.getElementById('moviesNowPlaying')
    const moviesPopularCard = document.getElementById('moviesPopular')
    const moviesTopRatedCard = document.getElementById('moviesTopRated')
    const moviesUpcomingCard = document.getElementById('moviesUpcoming')

    const cardClassName = 'main_movies_tr'

    getApiDataByURL(ApiUrls.moviesNowPlaying)
        .then(data => {
            getResults(data.results, moviesNowPlayingCard, toolbox.formatDate)
            getClickedCard(data.results, moviesNowPlayingCard, cardClassName)
            toolbox.loadFooter()
        })

    getApiDataByURL(ApiUrls.moviesPopular)
        .then(data => {
            getResults(data.results, moviesPopularCard, toolbox.formatDate)
            getClickedCard(data.results, moviesPopularCard, cardClassName)
            toolbox.loadFooter()
        })

    getApiDataByURL(ApiUrls.moviesTopRated)
        .then(data => {
            getResults(data.results, moviesTopRatedCard, toolbox.formatDate)
            getClickedCard(data.results, moviesTopRatedCard, cardClassName)
            toolbox.loadFooter()
        })

    getApiDataByURL(ApiUrls.moviesUpcoming)
        .then(data => {
            getResults(data.results, moviesUpcomingCard, toolbox.formatDate)
            getClickedCard(data.results, moviesUpcomingCard, cardClassName)
            toolbox.loadFooter()
        })
    // MOVIES //

})