import { ApiUrls } from "./constants.js"
import { getApiDataByURL, getResults, getClickedCard } from "./api-data.js"
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

    const cardClassName = 'main_trending_tr'

    // trending day //
    getApiDataByURL(ApiUrls.trendingAllDay)
        .then(data => {
            getResults(data.results, trendingAllDayCard, toolbox.formatDate)
            getClickedCard(data.results, trendingAllDayCard, cardClassName)
            toolbox.loadFooter()
        })

    getApiDataByURL(ApiUrls.trendingMoviesDay)
        .then(data => {
            getResults(data.results, trendingMoviesDayCard, toolbox.formatDate)
            getClickedCard(data.results, trendingMoviesDayCard, cardClassName)
            toolbox.loadFooter()
        })

    getApiDataByURL(ApiUrls.trendingSeriesDay)
        .then(data => {
            getResults(data.results, trendingSeriesDayCard, toolbox.formatDate)
            getClickedCard(data.results, trendingSeriesDayCard, cardClassName)
            toolbox.loadFooter()
        })
    // trending day //

    // trending week //
    getApiDataByURL(ApiUrls.trendingAllWeek)
        .then(data => {
            getResults(data.results, trendingAllWeekCard, toolbox.formatDate)
            getClickedCard(data.results, trendingAllWeekCard, cardClassName)
            toolbox.loadFooter()
        })

    getApiDataByURL(ApiUrls.trendingMoviesWeek)
        .then(data => {
            getResults(data.results, trendingMoviesWeekCard, toolbox.formatDate)
            getClickedCard(data.results, trendingMoviesWeekCard, cardClassName)
            toolbox.loadFooter()
        })

    getApiDataByURL(ApiUrls.trendingSeriesWeek)
        .then(data => {
            getResults(data.results, trendingSeriesWeekCard, toolbox.formatDate)
            getClickedCard(data.results, trendingSeriesWeekCard, cardClassName)
            toolbox.loadFooter()
        })
    // trending week //
    // TRENDING //
    
})