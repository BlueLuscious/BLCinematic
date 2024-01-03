import { formatDate } from "./functions.js"
import { getApiDataByURL } from "./functions.js"
import { getResults } from "./functions.js"
import { getClickedCard } from "./functions.js"
import { loadFooter } from "./functions.js"

document.addEventListener('DOMContentLoaded', function () {

    // SERIES //
    const seriesAiringToday = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'
    const seriesOnTheAir = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1'
    const seriesPopular = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
    const seriesTopRated = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'

    const seriesAiringTodayCard = document.getElementById('seriesAiringToday')
    const seriesOnTheAirCard = document.getElementById('seriesOnTheAir')
    const seriesPopularCard = document.getElementById('seriesPopular')
    const seriesTopRatedCard = document.getElementById('seriesTopRated')

    const cardClassName = 'main_series_tr'

    getApiDataByURL(seriesAiringToday)
        .then(data => {
            getResults(data.results, seriesAiringTodayCard, formatDate)
            getClickedCard(data.results, seriesAiringTodayCard, cardClassName)
            loadFooter()
        })

    getApiDataByURL(seriesOnTheAir)
        .then(data => {
            getResults(data.results, seriesOnTheAirCard, formatDate)
            getClickedCard(data.results, seriesOnTheAirCard, cardClassName)
            loadFooter()
        })

    getApiDataByURL(seriesPopular)
        .then(data => {
            getResults(data.results, seriesPopularCard, formatDate)
            getClickedCard(data.results, seriesPopularCard, cardClassName)
            loadFooter()
        })

    getApiDataByURL(seriesTopRated)
        .then(data => {
            getResults(data.results, seriesTopRatedCard, formatDate)
            getClickedCard(data.results, seriesTopRatedCard, cardClassName)
            loadFooter()
        })
    // SERIES //

})