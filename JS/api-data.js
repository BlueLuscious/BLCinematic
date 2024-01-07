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
    listItem.forEach(item => {
        const row = document.createElement('tr')

        if (item.media_type == 'movie' || item.media_type == 'tv') {
            row.classList.add('main_trending_tr')
        }

        if (!item.media_type && item.title) {
            row.classList.add('main_movies_tr')
        }

        if (!item.media_type && item.name) {
            row.classList.add('main_series_tr')
        }

        const imageData = document.createElement('td')
        const image = document.createElement('img')
        image.src = `${ApiUrls.IMAGE_URL + item.poster_path}`
        imageData.appendChild(image)
        row.appendChild(imageData)

        showResultsByMediaType(row, item, item.title, item.release_date, 'movie', 'main_movies_tr', formatDate)
        showResultsByMediaType(row, item, item.name, item.first_air_date, 'tv', 'main_series_tr', formatDate)

        card.appendChild(row)
    })
}
// GET RESULTS //

// GET RESULT BY ID //
export function getResultsByIndexcard(item, card, formatDate) {
    
    const row = document.createElement('tr')

    if (item.media_type == 'movie' || item.media_type == 'tv') {
        row.classList.add('main_trending_tr')
    }

    if (item.title) {
        row.classList.add('main_movies_tr')
    }

    if (item.name) {
        row.classList.add('main_series_tr')
    }

    const imageData = document.createElement('td')
    const image = document.createElement('img')
    image.src = `${ApiUrls.IMAGE_URL + item.poster_path}`
    imageData.appendChild(image)
    row.appendChild(imageData)

    showResultsByMediaType(row, item, item.title, item.release_date, 'movie', 'main_movies_tr', formatDate)
    showResultsByMediaType(row, item, item.name, item.first_air_date, 'tv', 'main_series_tr', formatDate)

    if (item.media_type == 'movie' || row.classList.contains('main_movies_tr')) {
        card[0].appendChild(row)
    }
    if (item.media_type == 'tv' || row.classList.contains('main_series_tr')) {
        card[1].appendChild(row)
    }


}
// GET RESULT BY ID //

// GET CLICKED RESULTS //
export function getClickedCard(results, card, cardClassName) {
    const mainCards = Array.from(card.getElementsByClassName(cardClassName))

    mainCards.forEach(function (mainCard, index) {
        mainCard.addEventListener('click', function () {
            if (results[index].media_type == 'movie' || mainCard.classList.contains('main_movies_tr')) {
                window.location.href = `movies.html?indexCard=${index}&itemId=${results[index].id}`
            }

            if (results[index].media_type == 'tv' || mainCard.classList.contains('main_series_tr')) {
                window.location.href = `series.html?indexCard=${index}&itemId=${results[index].id}`
            }
        })
    })
}
// GET CLICKED RESULTS //

// show data results by media_type
function showResultsByMediaType(row, item, title_, date_, media_type, cardClassName, formatDate) {
    if (item.media_type == media_type || row.classList.contains(cardClassName)) {
        const title = document.createElement('td')
        const titleBold = document.createElement('strong')
        titleBold.textContent = title_
        title.appendChild(titleBold)

        const date = document.createElement('td')
        if (item.release_date == '') {
            date.textContent = ''
        } else {
            const formattedDate = formatDate(date_)
            date.textContent = formattedDate
        }

        row.appendChild(title)
        row.appendChild(date)
    }
}