import { getApiDataByURL } from "./functions.js"
import { formatDate } from "./functions.js"
import { loadFooter } from "./functions.js"

window.addEventListener('DOMContentLoaded', function () {

    const seriesAiringToday = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'
    const airingTodayCard = document.getElementById('tvShowsTable')     

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