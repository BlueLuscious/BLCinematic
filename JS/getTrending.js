import { getApiDataByURL } from "./functions.js"
import { formatDate } from "./functions.js"
import { loadFooter } from "./functions.js"

window.addEventListener('DOMContentLoaded', function () {

    // const apiKey = 'cfac909fcba4ab5a5293e810bfda6d52'
    const IMAGE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

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

    const trendingAllDayByOneCard = document.getElementById('trendingAllDayByOne')

    // trending day //
    getApiDataByURL(trendingAllDay)
        .then(data => {
            const trendingAllList = data.results

            trendingAllList.forEach(trendingItem => {
                const row = document.createElement('tr')
                row.classList.add('main_trending_tr')

                const imageData = document.createElement('td')
                const image = document.createElement('img')
                image.src = `${IMAGE_URL + trendingItem.poster_path}`
                imageData.appendChild(image)
                row.appendChild(imageData)

                // movies title
                if (trendingItem.media_type == 'movie') {
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
                }

                // tv shows and series name
                if (trendingItem.media_type == 'tv') {
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
                }

                trendingAllDayCard.appendChild(row)

                loadFooter()


                
                const mainTrendingCards = Array.from(document.getElementsByClassName('main_trending_tr'))

                mainTrendingCards.forEach(function (trendingCard, index) {
                    trendingCard.addEventListener('click', function () {
                        if (trendingAllList[index].media_type == 'movie') {
                            window.location.href = `movies.html?indexCard=${index}`
                        }
    
                        if (trendingAllList[index].media_type == 'tv') {
                            window.location.href = `tvShows.html?indexCard=${index}`
                        }
                    })
                })



            })
        })

    getApiDataByURL(trendingMoviesDay)
        .then(data => {
            const trendingMoviesList = data.results

            trendingMoviesList.forEach(trendingItem => {
                const row = document.createElement('tr')
                row.classList.add('main_trending_tr')

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
                trendingMoviesDayCard.appendChild(row)

                loadFooter()
            })
        })

    getApiDataByURL(trendingSeriesDay)
        .then(data => {
            const trendingSeriesList = data.results

            trendingSeriesList.forEach(trendingItem => {
                const row = document.createElement('tr')
                row.classList.add('main_trending_tr')

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
                trendingSeriesDayCard.appendChild(row)

                loadFooter()
            })
        })
        // trending day //

        // trending week //
        getApiDataByURL(trendingAllWeek)
        .then(data => {
            const trendingAllList = data.results

            trendingAllList.forEach(trendingItem => {
                const row = document.createElement('tr')
                row.classList.add('main_trending_tr')

                const imageData = document.createElement('td')
                const image = document.createElement('img')
                image.src = `${IMAGE_URL + trendingItem.poster_path}`
                imageData.appendChild(image)
                row.appendChild(imageData)

                // movies title
                if (trendingItem.media_type == 'movie') {
                    const title = document.createElement('td')
                    const titleBold = document.createElement('strong')
                    titleBold.textContent = trendingItem.title
                    title.appendChild(titleBold)
    
                    const date = document.createElement('td')
                    const formattedDate = formatDate(trendingItem.release_date)
                    date.textContent = formattedDate

                    row.appendChild(title)
                    row.appendChild(date)
                }

                // tv shows and series name
                if (trendingItem.media_type == 'tv') {
                    const nameItem = document.createElement('td')
                    const nameBold = document.createElement('strong')
                    nameBold.textContent = trendingItem.name
                    nameItem.appendChild(nameBold)
    
                    const firstAirDate = document.createElement('td')
                    const formattedFirstAirDate = formatDate(trendingItem.first_air_date)
                    firstAirDate.textContent = formattedFirstAirDate

                    row.appendChild(nameItem)
                    row.appendChild(firstAirDate)
                }

                trendingAllWeekCard.appendChild(row)

                loadFooter()
            })
        })

        getApiDataByURL(trendingMoviesWeek)
        .then(data => {
            const trendingMoviesList = data.results

            trendingMoviesList.forEach(trendingItem => {
                const row = document.createElement('tr')
                row.classList.add('main_trending_tr')

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
                trendingMoviesWeekCard.appendChild(row)

                loadFooter()
            })
        })

        getApiDataByURL(trendingSeriesWeek)
        .then(data => {
            const trendingSeriesList = data.results

            trendingSeriesList.forEach(trendingItem => {
                const row = document.createElement('tr')
                row.classList.add('main_trending_tr')

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
                trendingSeriesWeekCard.appendChild(row)

                loadFooter()
            })
        })
        // trending week //
    // TRENDING //
})