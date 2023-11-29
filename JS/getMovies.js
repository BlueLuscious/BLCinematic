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
            getMovies(data.results, moviesNowPlayingCard)
            loadFooter()
        })

    getApiDataByURL(moviesPopular)
        .then(data => {
            getMovies(data.results, moviesPopularCard)
            loadFooter()
        })

    getApiDataByURL(moviesTopRated)
        .then(data => {
            getMovies(data.results, moviesTopRatedCard)
            loadFooter()
        })

    getApiDataByURL(moviesUpcoming)
        .then(data => {
            getMovies(data.results, moviesUpcomingCard)
            loadFooter()
        })
    // MOVIES //

    // GET MOVIES RESULTS //
    function getMovies(listItem, card) {
        listItem.forEach(trendingItem => {
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
            if (trendingItem.release_date == '') {
                date.textContent = ''
            } else {
                const formattedDate = formatDate(trendingItem.release_date)
                date.textContent = formattedDate
            }

            row.appendChild(title)
            row.appendChild(date)
            card.appendChild(row)
        })
    }
    // GET MOVIES RESULTS //
})