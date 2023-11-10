import { getApiDataByURL } from "./functions.js"
import { formatDate } from "./functions.js"
import { loadFooter } from "./functions.js"

window.addEventListener('DOMContentLoaded', function () {

    const moviesNowPlayingParam = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
    const nowPlayingCard = document.getElementById('moviesTable')
    
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


})