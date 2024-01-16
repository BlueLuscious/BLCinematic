import { ApiUrls, CardClassName, Key } from "./constants.js"

// GET APIDATA //
export async function getApiDataByURL(params) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${Key.ACCESS_TOKEN}`
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

        setCardClassname(row, item)

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

    setCardClassname(row, item)

    const imageData = document.createElement('td')
    const image = document.createElement('img')
    image.src = `${ApiUrls.IMAGE_URL + item.poster_path}`
    imageData.appendChild(image)
    row.appendChild(imageData)

    showResultsByMediaType(row, item, item.title, item.release_date, 'movie', CardClassName.MOVIES_CLASS, formatDate)
    showResultsByMediaType(row, item, item.name, item.first_air_date, 'tv', CardClassName.SERIES_CLASS, formatDate)

    if (item.media_type == 'movie' || row.classList.contains(CardClassName.MOVIES_CLASS)) {
        card[0].appendChild(row)
    }
    if (item.media_type == 'tv' || row.classList.contains(CardClassName.SERIES_CLASS)) {
        card[1].appendChild(row)
    }


}
// GET RESULT BY ID //

// GET CLICKED RESULTS //
export function getClickedCard(results, card, cardClassName, category) {
    const mainCards = Array.from(card.getElementsByClassName(cardClassName))

    mainCards.forEach(function (mainCard, index) {
        mainCard.addEventListener('click', function () {
            if (results[index].media_type == 'movie' && mainCard.classList.contains(CardClassName.TRENDING_CLASS)) {
                window.location.href = `movies.html?${category}&indexCard=${index}`
            }

            if (results[index].media_type == 'tv' && mainCard.classList.contains(CardClassName.TRENDING_CLASS)) {
                window.location.href = `series.html?${category}&indexCard=${index}`
            }

            if (results[index].title && mainCard.classList.contains(CardClassName.MOVIES_CLASS)) {
                window.location.href = `movies.html?${category}&indexCard=${index}`
            }

            if (results[index].name && mainCard.classList.contains(CardClassName.SERIES_CLASS)) {
                window.location.href = `series.html?${category}&indexCard=${index}`
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

// set classname by type and data
function setCardClassname(row, item) {
    if (item.media_type == 'movie' || item.media_type == 'tv') {
        row.classList.add(CardClassName.TRENDING_CLASS)
    }

    if (!item.media_type && item.title) {
        row.classList.add(CardClassName.MOVIES_CLASS)
    }

    if (!item.media_type && item.name) {
        row.classList.add(CardClassName.SERIES_CLASS)
    }
}