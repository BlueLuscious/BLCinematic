import { getApiDataByURL } from "./functions.js"
import { formatDate } from "./functions.js"
import { loadFooter } from "./functions.js"

window.addEventListener('DOMContentLoaded', function () {

    // const apiKey = 'cfac909fcba4ab5a5293e810bfda6d52'
    const IMAGE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
    const trendingParam = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
    const moviesNowPlayingParam = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
    const seriesAiringToday = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'

    const trendingCard = document.getElementById('trendingTable')
    const nowPlayingCard = document.getElementById('moviesTable')
    const airingTodayCard = document.getElementById('tvShowsTable')

    getApiDataByURL(trendingParam)
        .then(data => {
            const trendingList = data.results

            trendingList.forEach(trendingItem => {
                const trendingRow = document.createElement('tr')
                trendingRow.classList.add('main_trending_tr')

                const trendingImageData = document.createElement('td')
                const trendingImage = document.createElement('img')
                trendingImage.src = `${IMAGE_URL + trendingItem.poster_path}`
                trendingImageData.appendChild(trendingImage)
                trendingRow.appendChild(trendingImageData)

                // movies title
                if (trendingItem.media_type == 'movie') {
                    const trendingTitle = document.createElement('td')
                    const trendingTitleBold = document.createElement('strong')
                    trendingTitleBold.textContent = trendingItem.title
                    trendingTitle.appendChild(trendingTitleBold)
    
                    const trendingDate = document.createElement('td')
                    const formattedDate = formatDate(trendingItem.release_date)
                    trendingDate.textContent = formattedDate

                    trendingRow.appendChild(trendingTitle)
                    trendingRow.appendChild(trendingDate)
                }

                // tv shows and series name
                if (trendingItem.media_type == 'tv') {
                    const trendingName = document.createElement('td')
                    const trendingNameBold = document.createElement('strong')
                    trendingNameBold.textContent = trendingItem.name
                    trendingName.appendChild(trendingNameBold)
    
                    const trendingFirstAirDate = document.createElement('td')
                    const formattedFirstAirDate = formatDate(trendingItem.first_air_date)
                    trendingFirstAirDate.textContent = formattedFirstAirDate

                    trendingRow.appendChild(trendingName)
                    trendingRow.appendChild(trendingFirstAirDate)
                }

                trendingCard.appendChild(trendingRow)

                loadFooter()
            })
        })

    getApiDataByURL(moviesNowPlayingParam)
        .then(data => {
            const moviesNowPlayingList = data.results

            moviesNowPlayingList.forEach(nowPlayingItem => {
                const nowPlayingRow = document.createElement('tr')
                nowPlayingRow.classList.add('main_now_playing_tr')

                const nowPlayingImageData = document.createElement('td')
                const nowPlayingImage = document.createElement('img')
                nowPlayingImage.src = `${IMAGE_URL + nowPlayingItem.poster_path}`
                nowPlayingImageData.appendChild(nowPlayingImage)

                // movies title
                const nowPlayingTitle = document.createElement('td')
                const nowPlayingTitleBold = document.createElement('strong')
                nowPlayingTitleBold.textContent = nowPlayingItem.title
                nowPlayingTitle.appendChild(nowPlayingTitleBold)

                const nowPlayingDate = document.createElement('td')
                const formattedDate = formatDate(nowPlayingItem.release_date)
                nowPlayingDate.textContent = formattedDate

                nowPlayingRow.appendChild(nowPlayingImageData)
                nowPlayingRow.appendChild(nowPlayingTitle)
                nowPlayingRow.appendChild(nowPlayingDate)
                nowPlayingCard.appendChild(nowPlayingRow)

                loadFooter()
            })
        })

    getApiDataByURL(seriesAiringToday)
        .then(data => {
            const seriesAiringTodayList = data.results

            seriesAiringTodayList.forEach(airingTodayItem => {
                const airingTodayRow = document.createElement('tr')
                airingTodayRow.classList.add('main_airing_today_tr')

                const airingTodayImageData = document.createElement('td')
                const airingTodayImage = document.createElement('img')
                airingTodayImage.src = `${IMAGE_URL + airingTodayItem.poster_path}`
                airingTodayImageData.appendChild(airingTodayImage)

                // tv shows and series name
                const airingTodayTitle = document.createElement('td')
                const airingTodayTitleBold = document.createElement('strong')
                airingTodayTitleBold.textContent = airingTodayItem.name
                airingTodayTitle.appendChild(airingTodayTitleBold)

                const airingTodayDate = document.createElement('td')
                const formattedDate = formatDate(airingTodayItem.first_air_date)
                airingTodayDate.textContent = formattedDate

                airingTodayRow.appendChild(airingTodayImageData)
                airingTodayRow.appendChild(airingTodayTitle)
                airingTodayRow.appendChild(airingTodayDate)
                airingTodayCard.appendChild(airingTodayRow)

                loadFooter()
            })
        })
})