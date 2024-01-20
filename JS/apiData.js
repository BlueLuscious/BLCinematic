import { ApiUrls, CardClassName, Key } from "./constants.js"
import { Toolbox } from "./handlers.js"

const toolbox = new Toolbox

export class ApiHandlers {

    constructor() {
        this.api_toolbox = new ApiToolbox
    }

    // get api data
    async getApiDataByURL(params) {
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


    // get results
    getResults(listItem, card) {
        listItem.forEach(item => {
            const row = document.createElement('tr')
            this.api_toolbox.setCardClassname(row, item)

            const imageData = document.createElement('td')
            const image = document.createElement('img')
            this.api_toolbox.setCardImage(row, item, imageData, image)

            const title = document.createElement('td')
            const date = document.createElement('td')
            this.api_toolbox.setCardTitleAndDate(row, item, title, date)

            card.appendChild(row)
        })
    }

    // get result by id
    getResultsByIndexcard(item, card) {
        const row = document.createElement('tr')
        this.api_toolbox.setCardClassname(row, item)

        const imageData = document.createElement('td')
        const image = document.createElement('img')
        this.api_toolbox.setCardImage(row, item, imageData, image)

        const title = document.createElement('td')
        const date = document.createElement('td')
        this.api_toolbox.setCardTitleAndDate(row, item, title, date)

        item.media_type == 'movie' || row.classList.contains(CardClassName.MOVIES_CLASS) ? card[0].appendChild(row) : false
        item.media_type == 'tv' || row.classList.contains(CardClassName.SERIES_CLASS) ? card[1].appendChild(row) : false
    }

    // get clicked results
    getClickedCard(results, card, cardClassName, category) {
        const mainCards = Array.from(card.getElementsByClassName(cardClassName))

        mainCards.forEach(function (mainCard, index) {
            mainCard.addEventListener('click', () => {
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

}

class ApiToolbox {

    // set classname by media_type and data
    setCardClassname(row, item) {
        item.media_type == 'movie' || item.media_type == 'tv' ? row.classList.add(CardClassName.TRENDING_CLASS) : false
        !item.media_type && item.title ? row.classList.add(CardClassName.MOVIES_CLASS) : false
        !item.media_type && item.name ? row.classList.add(CardClassName.SERIES_CLASS) : false
    }

    // set image or default
    setCardImage(row, item, imageData, image) {
        item.poster_path == '' ? image.src = '../IMG/default_no_image.jpg' : image.src = `${ApiUrls.IMAGE_URL + item.poster_path}`
        item.poster_path == null ? image.src = '../IMG/default_no_image.jpg' : image.src = `${ApiUrls.IMAGE_URL + item.poster_path}`
        imageData.appendChild(image)
        row.appendChild(imageData)
    }

    // show data results by media_type
    setCardTitleAndDate(row, item, title, date) {
        if (item.media_type == 'movie' || row.classList.contains(CardClassName.MOVIES_CLASS)) {
            item.title == '' ? title.textContent = '' : title.textContent = item.title
            item.release_date == '' ? date.textContent = '' : date.textContent = toolbox.formatDate(item.release_date)
        }

        if (item.media_type == 'tv' || row.classList.contains(CardClassName.SERIES_CLASS)) {
            item.name == '' ? title.textContent = '' : title.textContent = item.name
            item.first_air_date == '' ? date.textContent = '' : date.textContent = toolbox.formatDate(item.first_air_date)
        }

        row.appendChild(title)
        row.appendChild(date)
    }

}