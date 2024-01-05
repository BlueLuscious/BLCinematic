import { ApiUrls } from "./constants.js"
import { getApiDataByURL, getResults, getClickedCard } from "./api-data.js"
import { Toolbox } from "./handlers.js"
const toolbox = new Toolbox

document.addEventListener('DOMContentLoaded', function () {

    // SERIES //
    const seriesAiringTodayCard = document.getElementById('seriesAiringToday')
    const seriesOnTheAirCard = document.getElementById('seriesOnTheAir')
    const seriesPopularCard = document.getElementById('seriesPopular')
    const seriesTopRatedCard = document.getElementById('seriesTopRated')

    const cardClassName = 'main_series_tr'

    getApiDataByURL(ApiUrls.seriesAiringToday)
        .then(data => {
            getResults(data.results, seriesAiringTodayCard, toolbox.formatDate)
            getClickedCard(data.results, seriesAiringTodayCard, cardClassName)
            toolbox.loadFooter()
        })

    getApiDataByURL(ApiUrls.seriesOnTheAir)
        .then(data => {
            getResults(data.results, seriesOnTheAirCard, toolbox.formatDate)
            getClickedCard(data.results, seriesOnTheAirCard, cardClassName)
            toolbox.loadFooter()
        })

    getApiDataByURL(ApiUrls.seriesPopular)
        .then(data => {
            getResults(data.results, seriesPopularCard, toolbox.formatDate)
            getClickedCard(data.results, seriesPopularCard, cardClassName)
            toolbox.loadFooter()
        })

    getApiDataByURL(ApiUrls.seriesTopRated)
        .then(data => {
            getResults(data.results, seriesTopRatedCard, toolbox.formatDate)
            getClickedCard(data.results, seriesTopRatedCard, cardClassName)
            toolbox.loadFooter()
        })
    // SERIES //

})