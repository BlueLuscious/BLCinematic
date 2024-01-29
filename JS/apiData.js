import { ApiUrls, Card, CardClassName, Category, Key, Pathname, Template } from "./constants.js"
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
                if (results[index].media_type == 'movie' && mainCard.classList.contains(CardClassName.TRENDING_CLASS) ||
                    results[index].title && mainCard.classList.contains(CardClassName.MOVIES_CLASS)
                ) {
                    window.location.href = `movies.html?category=${category}&indexCard=${index}`
                }

                if (results[index].media_type == 'tv' && mainCard.classList.contains(CardClassName.TRENDING_CLASS) ||
                    results[index].name && mainCard.classList.contains(CardClassName.SERIES_CLASS)
                ) {
                    window.location.href = `series.html?category=${category}&indexCard=${index}`
                }
            })
        })
    }

    // handle api data
    handleApiData(apiUrl, cardsByIndex, template, cardClassName) {
        const categories = {
            [ApiUrls.trendingAllDay]: [Card.trendingAllDayCard, Category.apiCategories[0]],
            [ApiUrls.trendingMoviesDay]: [Card.trendingMoviesDayCard, Category.apiCategories[1]],
            [ApiUrls.trendingSeriesDay]: [Card.trendingSeriesDayCard, Category.apiCategories[2]],
            [ApiUrls.trendingAllWeek]: [Card.trendingAllWeekCard, Category.apiCategories[3]],
            [ApiUrls.trendingMoviesWeek]: [Card.trendingMoviesWeekCard, Category.apiCategories[4]],
            [ApiUrls.trendingSeriesWeek]: [Card.trendingSeriesWeekCard, Category.apiCategories[5]],
            [ApiUrls.moviesNowPlaying]: [Card.moviesNowPlayingCard, Category.apiCategories[6]],
            [ApiUrls.moviesPopular]: [Card.moviesPopularCard, Category.apiCategories[7]],
            [ApiUrls.moviesTopRated]: [Card.moviesTopRatedCard, Category.apiCategories[8]],
            [ApiUrls.moviesUpcoming]: [Card.moviesUpcomingCard, Category.apiCategories[9]],
            [ApiUrls.seriesAiringToday]: [Card.seriesAiringTodayCard, Category.apiCategories[10]],
            [ApiUrls.seriesOnTheAir]: [Card.seriesOnTheAirCard, Category.apiCategories[11]],
            [ApiUrls.seriesPopular]: [Card.seriesPopularCard, Category.apiCategories[12]],
            [ApiUrls.seriesTopRated]: [Card.seriesTopRatedCard, Category.apiCategories[13]],
        }
        
        const urlParams = new URLSearchParams(window.location.search)
        const category = urlParams.get('category')
        const indexCard = urlParams.get('indexCard')

        if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE && window.location.search === '' ||
            window.location.pathname === Pathname.HTML_FOLDER + template && window.location.search === '' ||
            window.location.search === `?category=${categories[apiUrl][1]}&indexCard=${indexCard}`
        ) {
            this.getApiDataByURL(apiUrl).then(data => {
                if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE) {
                    this.getResults(data.results, categories[apiUrl][0])
                    this.getClickedCard(data.results, categories[apiUrl][0], cardClassName, categories[apiUrl][1])
                } else {
                    this.getResultsByIndexcard(data.results[indexCard], cardsByIndex)
                }
            })
        }

        if (window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE && window.location.search !== '' ||
            window.location.pathname === Pathname.HTML_FOLDER + template && window.location.search !== '' &&
            (!urlParams.has('category') || category === '' || !Category.apiCategories.includes(category) ||
            !urlParams.has('indexCard') || indexCard === '' || isNaN(indexCard))
        ) {
            window.location.href = 'error.html'
        }

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