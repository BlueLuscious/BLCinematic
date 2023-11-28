import { getApiDataByURL } from "./functions.js"
import { formatDate } from "./functions.js"
import { loadFooter } from "./functions.js"

window.addEventListener('DOMContentLoaded', function () {

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
            const seriesAiringTodayList = data.results

            seriesAiringTodayList.forEach(trendingItem => {
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
                const formattedFirstAirDate = formatDate(trendingItem.first_air_date)
                firstAirDate.textContent = formattedFirstAirDate

                row.appendChild(nameItem)
                row.appendChild(firstAirDate)
                seriesAiringTodayCard.appendChild(row)

                loadFooter()
            })
        })

    getApiDataByURL(seriesOnTheAir)
        .then(data => {
            const seriesOnTheAirList = data.results

            seriesOnTheAirList.forEach(trendingItem => {
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
                const formattedFirstAirDate = formatDate(trendingItem.first_air_date)
                firstAirDate.textContent = formattedFirstAirDate

                row.appendChild(nameItem)
                row.appendChild(firstAirDate)
                seriesOnTheAirCard.appendChild(row)

                loadFooter()
            })
        })

    getApiDataByURL(seriesPopular)
        .then(data => {
            const seriesPopularList = data.results

            seriesPopularList.forEach(trendingItem => {
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
                const formattedFirstAirDate = formatDate(trendingItem.first_air_date)
                firstAirDate.textContent = formattedFirstAirDate

                row.appendChild(nameItem)
                row.appendChild(firstAirDate)
                seriesPopularCard.appendChild(row)

                loadFooter()
            })
        })

    getApiDataByURL(seriesTopRated)
        .then(data => {
            const seriesTopRatedList = data.results

            seriesTopRatedList.forEach(trendingItem => {
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
                const formattedFirstAirDate = formatDate(trendingItem.first_air_date)
                firstAirDate.textContent = formattedFirstAirDate

                row.appendChild(nameItem)
                row.appendChild(firstAirDate)
                seriesTopRatedCard.appendChild(row)

                loadFooter()
            })
        })
    // SERIES //
})