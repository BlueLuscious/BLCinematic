import { formatDate } from "./functions.js"
import { getApiDataByURL } from "./functions.js"
import { getResults } from "./functions.js"
import { getClickedCard } from "./functions.js"
import { loadFooter } from "./functions.js"

document.addEventListener('DOMContentLoaded', function () {

    // const apiKey = 'cfac909fcba4ab5a5293e810bfda6d52'

    // TRENDING //
    const trendingAllDay = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
    const trendingAllWeek = 'https://api.themoviedb.org/3/trending/all/week?language=en-US'
    const trendingMoviesDay = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
    const trendingMoviesWeek = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
    const trendingSeriesDay = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
    const trendingSeriesWeek = 'https://api.themoviedb.org/3/trending/tv/week?language=en-US'

    const trendingAllDayCard = document.getElementById('trendingAllDay')
    const trendingMoviesDayCard = document.getElementById('trendingMoviesDay')
    const trendingSeriesDayCard = document.getElementById('trendingSeriesDay')
    const trendingAllWeekCard = document.getElementById('trendingAllWeek')
    const trendingMoviesWeekCard = document.getElementById('trendingMoviesWeek')
    const trendingSeriesWeekCard = document.getElementById('trendingSeriesWeek')

    const cardClassName = 'main_trending_tr'

    // trending day //
    getApiDataByURL(trendingAllDay)
        .then(data => {
            getResults(data.results, trendingAllDayCard, formatDate)
            getClickedCard(data.results, trendingAllDayCard, cardClassName)
            loadFooter()
        })

    getApiDataByURL(trendingMoviesDay)
        .then(data => {
            getResults(data.results, trendingMoviesDayCard, formatDate)
            getClickedCard(data.results, trendingMoviesDayCard, cardClassName)
            loadFooter()
        })

    getApiDataByURL(trendingSeriesDay)
        .then(data => {
            getResults(data.results, trendingSeriesDayCard, formatDate)
            getClickedCard(data.results, trendingSeriesDayCard, cardClassName)
            loadFooter()
        })
    // trending day //

    // trending week //
    getApiDataByURL(trendingAllWeek)
        .then(data => {
            getResults(data.results, trendingAllWeekCard, formatDate)
            getClickedCard(data.results, trendingAllWeekCard, cardClassName)
            loadFooter()
        })

    getApiDataByURL(trendingMoviesWeek)
        .then(data => {
            getResults(data.results, trendingMoviesWeekCard, formatDate)
            getClickedCard(data.results, trendingMoviesWeekCard, cardClassName)
            loadFooter()
        })

    getApiDataByURL(trendingSeriesWeek)
        .then(data => {
            getResults(data.results, trendingSeriesWeekCard, formatDate)
            getClickedCard(data.results, trendingSeriesWeekCard, cardClassName)
            loadFooter()
        })
    // trending week //
    // TRENDING //
    
})