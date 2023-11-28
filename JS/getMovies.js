import { getApiDataByURL } from "./functions.js"
import { formatDate } from "./functions.js"
import { loadFooter } from "./functions.js"

document.addEventListener('DOMContentLoaded', function () {

    const IMAGE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

    // MOVIES //
    const moviesNowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
    const moviesPopular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    const moviesTopRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
    const moviesUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
    
    const moviesNowPlayingCard = document.getElementById('moviesNowPlaying')
    const moviesPopularCard = document.getElementById('moviesPopular')
    const moviesTopRatedCard = document.getElementById('moviesTopRated')
    const moviesUpcomingCard = document.getElementById('moviesUpcoming')
    
    getApiDataByURL(moviesNowPlaying)
        .then(data => {
            const moviesNowPlayingList = data.results

            moviesNowPlayingList.forEach(trendingItem => {
                const row = document.createElement('tr')
                row.classList.add('main_movies_tr')

                const imageData = document.createElement('td')
                const image = document.createElement('img')
                image.src = `${IMAGE_URL + trendingItem.poster_path}`
                imageData.appendChild(image)
                row.appendChild(imageData)

                const title = document.createElement('td')
                const titleBold = document.createElement('strong')
                titleBold.textContent = trendingItem.title
                title.appendChild(titleBold)

                const date = document.createElement('td')
                const formattedDate = formatDate(trendingItem.release_date)
                date.textContent = formattedDate

                row.appendChild(title)
                row.appendChild(date)
                moviesNowPlayingCard.appendChild(row)

                loadFooter()
            })
        })

        getApiDataByURL(moviesPopular)
        .then(data => {
            const moviesPopularList = data.results

            moviesPopularList.forEach(trendingItem => {
                const row = document.createElement('tr')
                row.classList.add('main_movies_tr')

                const imageData = document.createElement('td')
                const image = document.createElement('img')
                image.src = `${IMAGE_URL + trendingItem.poster_path}`
                imageData.appendChild(image)
                row.appendChild(imageData)

                const title = document.createElement('td')
                const titleBold = document.createElement('strong')
                titleBold.textContent = trendingItem.title
                title.appendChild(titleBold)

                const date = document.createElement('td')
                const formattedDate = formatDate(trendingItem.release_date)
                date.textContent = formattedDate

                row.appendChild(title)
                row.appendChild(date)
                moviesPopularCard.appendChild(row)

                loadFooter()
            })
        })

        getApiDataByURL(moviesTopRated)
        .then(data => {
            const moviesTopRatedList = data.results

            moviesTopRatedList.forEach(trendingItem => {
                const row = document.createElement('tr')
                row.classList.add('main_movies_tr')

                const imageData = document.createElement('td')
                const image = document.createElement('img')
                image.src = `${IMAGE_URL + trendingItem.poster_path}`
                imageData.appendChild(image)
                row.appendChild(imageData)

                const title = document.createElement('td')
                const titleBold = document.createElement('strong')
                titleBold.textContent = trendingItem.title
                title.appendChild(titleBold)

                const date = document.createElement('td')
                const formattedDate = formatDate(trendingItem.release_date)
                date.textContent = formattedDate

                row.appendChild(title)
                row.appendChild(date)
                moviesTopRatedCard.appendChild(row)

                loadFooter()
            })
        })

        getApiDataByURL(moviesUpcoming)
        .then(data => {
            const moviesUpcomingList = data.results

            moviesUpcomingList.forEach(trendingItem => {
                const row = document.createElement('tr')
                row.classList.add('main_movies_tr')

                const imageData = document.createElement('td')
                const image = document.createElement('img')
                image.src = `${IMAGE_URL + trendingItem.poster_path}`
                imageData.appendChild(image)
                row.appendChild(imageData)

                const title = document.createElement('td')
                const titleBold = document.createElement('strong')
                titleBold.textContent = trendingItem.title
                title.appendChild(titleBold)

                const date = document.createElement('td')
                const formattedDate = formatDate(trendingItem.release_date)
                date.textContent = formattedDate

                row.appendChild(title)
                row.appendChild(date)
                moviesUpcomingCard.appendChild(row)

                loadFooter()
            })
        })
        // MOVIES //
})