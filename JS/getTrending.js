import { getApiDataByURL } from "./functions.js"
import { formatDate } from "./functions.js"
import { loadFooter } from "./functions.js"
import { getTrending } from "./functions.js"

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

    // trending day //
    getApiDataByURL(trendingAllDay)
        .then(data => {
            getTrending(data.results, trendingAllDayCard, formatDate)
            eventClickCard(data.results, trendingAllDayCard)
            loadFooter()
        })

    getApiDataByURL(trendingMoviesDay)
        .then(data => {
            getTrending(data.results, trendingMoviesDayCard, formatDate)
            eventClickCard(data.results, trendingMoviesDayCard)
            loadFooter()
        })

    getApiDataByURL(trendingSeriesDay)
        .then(data => {
            getTrending(data.results, trendingSeriesDayCard, formatDate)
            eventClickCard(data.results, trendingSeriesDayCard)
            loadFooter()
        })
    // trending day //

    // trending week //
    getApiDataByURL(trendingAllWeek)
        .then(data => {
            getTrending(data.results, trendingAllWeekCard, formatDate)
            eventClickCard(data.results, trendingAllWeekCard)
            loadFooter()
        })

    getApiDataByURL(trendingMoviesWeek)
        .then(data => {
            getTrending(data.results, trendingMoviesWeekCard, formatDate)
            eventClickCard(data.results, trendingMoviesWeekCard)
            loadFooter()
        })

    getApiDataByURL(trendingSeriesWeek)
        .then(data => {
            getTrending(data.results, trendingSeriesWeekCard, formatDate)
            eventClickCard(data.results, trendingSeriesWeekCard)
            loadFooter()
        })
    // trending week //
    // TRENDING //

    //
    function eventClickCard(results, card) {
        const mainTrendingCards = Array.from(card.getElementsByClassName('main_trending_tr'))

        mainTrendingCards.forEach(function (trendingCard, index) {
            trendingCard.addEventListener('click', function () {
                if (results[index].media_type == 'movie') {
                    window.location.href = `movies.html?indexCard=${index}`
                }

                if (results[index].media_type == 'tv') {
                    window.location.href = `tvShows.html?indexCard=${index}`
                }
            })
        })
    }
    //
    
})