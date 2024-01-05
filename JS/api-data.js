import { ApiUrls } from "./constants.js"

// GET APIDATA //
export async function getApiDataByURL(params) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmFjOTA5ZmNiYTRhYjVhNTI5M2U4MTBiZmRhNmQ1MiIsInN1YiI6IjY1NGI2NTVjMjg2NmZhMDBhYjEzMTMwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XFfnp-1dM_GVvRUASsPgjUiMvYB9u7gsd8RlLWCGU3Y'
        }
    }

    return fetch(params, options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(err => console.error(err))
}
// GET APIDATA //

// GET RESULTS //
export function getResults(listItem, card, formatDate) {
    listItem.forEach(trendingItem => {
        const row = document.createElement('tr')

        if (trendingItem.media_type == 'movie' || trendingItem.media_type == 'tv') {
            row.classList.add('main_trending_tr')
        }

        if (!trendingItem.media_type && trendingItem.title) {
            row.classList.add('main_movies_tr')
        }

        if (!trendingItem.media_type && trendingItem.name) {
            row.classList.add('main_series_tr')
        }

        const imageData = document.createElement('td')
        const image = document.createElement('img')
        image.src = `${ApiUrls.IMAGE_URL + trendingItem.poster_path}`
        imageData.appendChild(image)
        row.appendChild(imageData)

        // movies title
        if (trendingItem.media_type == 'movie' || row.classList.contains('main_movies_tr')) {
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

        // series name
        if (trendingItem.media_type == 'tv' || row.classList.contains('main_series_tr')) {
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

        card.appendChild(row)
    })
}
// GET RESULTS //

// GET RESULT BY ID //
// GET RESULT BY ID //

// GET CLICKED RESULTS //
export function getClickedCard(results, card, cardClassName) {
    const mainCards = Array.from(card.getElementsByClassName(cardClassName))

    mainCards.forEach(function (mainCard, index) {
        mainCard.addEventListener('click', function () {
            if (results[index].media_type == 'movie' || mainCard.classList.contains('main_movies_tr')) {
                window.location.href = `movies.html?indexCard=${index}`
            }

            if (results[index].media_type == 'tv' || mainCard.classList.contains('main_series_tr')) {
                window.location.href = `series.html?indexCard=${index}`
            }
        })
    })
}
// GET CLICKED RESULTS //