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
            this.api_toolbox.setCardTitle(row, false, item, title)

            const date = document.createElement('td')
            this.api_toolbox.setCardDate(row, false, item, date)

            card.appendChild(row)
        })
    }

    // get result by id
    getResultsByIndexcard(item) {
        const container = document.getElementById('container')
        container.style.backgroundImage = `url(${ApiUrls.IMAGE_URL_1920X800 + item.backdrop_path})`

        const image = document.getElementById('poster')
        this.api_toolbox.setCardImage(false, item, false, image)

        const title = document.getElementById('title')
        this.api_toolbox.setCardTitle(false, container, item, title)
        
        const date = document.getElementById('date')
        this.api_toolbox.setCardDate(false, container, item, date)
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
    handleApiData(apiUrl, template, cardClassName) {
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
                    this.getResultsByIndexcard(data.results[indexCard])
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
        if (!row && !imageData) {
            item.poster_path == '' ? image.src = '../IMG/default_no_image.jpg' : image.src = `${ApiUrls.IMAGE_URL_600x900 + item.poster_path}`
            item.poster_path == null ? image.src = '../IMG/default_no_image.jpg' : image.src = `${ApiUrls.IMAGE_URL_600x900 + item.poster_path}`
        } else {
            item.poster_path == '' ? image.src = '../IMG/default_no_image.jpg' : image.src = `${ApiUrls.IMAGE_URL_600x900 + item.poster_path}`
            item.poster_path == null ? image.src = '../IMG/default_no_image.jpg' : image.src = `${ApiUrls.IMAGE_URL_600x900 + item.poster_path}`
            imageData.appendChild(image)
            row.appendChild(imageData)
        }
    }

    // set date
    setCardDate(row, container, item, date) {
        if (!row && container) {
            if (item.media_type == 'movie' || container.classList.contains(CardClassName.MOVIE_BY_INDEX)) {
                item.release_date == '' ? date.textContent = '' : date.textContent = toolbox.formatDate(item.release_date)
            }
    
            if (item.media_type == 'tv' || container.classList.contains(CardClassName.SERIE_BY_INDEX)) {
                item.first_air_date == '' ? date.textContent = '' : date.textContent = toolbox.formatDate(item.first_air_date)
            }
        } else {
            if (item.media_type == 'movie' || row.classList.contains(CardClassName.MOVIES_CLASS)) {
                item.release_date == '' ? date.textContent = '' : date.textContent = toolbox.formatDate(item.release_date)
            }
    
            if (item.media_type == 'tv' || row.classList.contains(CardClassName.SERIES_CLASS)) {
                item.first_air_date == '' ? date.textContent = '' : date.textContent = toolbox.formatDate(item.first_air_date)
            }
    
            row.appendChild(date)
        }
    }

    // set title
    setCardTitle(row, container, item, title) {
        if (!row && container) {
            if (item.media_type == 'movie' || container.classList.contains(CardClassName.MOVIE_BY_INDEX)) {
                item.title == '' ? title.textContent = '' : title.textContent = item.title
            }
    
            if (item.media_type == 'tv' || container.classList.contains(CardClassName.SERIE_BY_INDEX)) {
                item.name == '' ? title.textContent = '' : title.textContent = item.name
            }
        } else {
            if (item.media_type == 'movie' || row.classList.contains(CardClassName.MOVIES_CLASS)) {
                item.title == '' ? title.textContent = '' : title.textContent = item.title
            }
    
            if (item.media_type == 'tv' || row.classList.contains(CardClassName.SERIES_CLASS)) {
                item.name == '' ? title.textContent = '' : title.textContent = item.name
            }
    
            row.appendChild(title)
        }
    }

}