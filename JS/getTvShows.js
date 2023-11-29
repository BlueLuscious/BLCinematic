import { getApiDataByURL } from "./functions.js"
import { formatDate } from "./functions.js"
import { loadFooter } from "./functions.js"

document.addEventListener('DOMContentLoaded', function () {

    const IMAGE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

    // SERIES //
    const seriesAiringToday = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'
    const seriesOnTheAir = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1'
    const seriesPopular = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
    const seriesTopRated = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'

    const seriesAiringTodayCard = document.getElementById('seriesAiringToday')
    const seriesOnTheAirCard = document.getElementById('seriesOnTheAir')
    const seriesPopularCard = document.getElementById('seriesPopular')
    const seriesTopRatedCard = document.getElementById('seriesTopRated')

    getApiDataByURL(seriesAiringToday)
        .then(data => {
            getSeries(data.results, seriesAiringTodayCard)
            loadFooter()
        })

    getApiDataByURL(seriesOnTheAir)
        .then(data => {
            getSeries(data.results, seriesOnTheAirCard)
            loadFooter()
        })

    getApiDataByURL(seriesPopular)
        .then(data => {
            getSeries(data.results, seriesPopularCard)
            loadFooter()
        })

    getApiDataByURL(seriesTopRated)
        .then(data => {
            getSeries(data.results, seriesTopRatedCard)
            loadFooter()
        })
    // SERIES //

    // GET SERIES RESULTS //
    function getSeries(listItem, card) {
        listItem.forEach(trendingItem => {
            const row = document.createElement('tr')
            row.classList.add('main_series_tr')

            const imageData = document.createElement('td')
            const image = document.createElement('img')
            image.src = `${IMAGE_URL + trendingItem.poster_path}`
            imageData.appendChild(image)
            row.appendChild(imageData)

            const nameItem = document.createElement('td')
            const nameBold = document.createElement('strong')
            nameBold.textContent = trendingItem.name
            nameItem.appendChild(nameBold)

            const firstAirDate = document.createElement('td')
            if (trendingItem.first_air_date == '') {
                firstAirDate.textContent = ''
            } else {
                const formattedFirstAirDate = formatDate(trendingItem.first_air_date)
                firstAirDate.textContent = formattedFirstAirDate
            }

            row.appendChild(nameItem)
            row.appendChild(firstAirDate)
            card.appendChild(row)
        })
    }
    // GET SERIES RESULTS //
})