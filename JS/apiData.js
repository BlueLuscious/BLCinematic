import { ApiUrls, CardClassName, Category, Key, MappedApiUrls, Pathname, Template } from "./constants.js"
import { Toolbox } from "./handlers.js"

const toolbox = new Toolbox

class ApiConnection {

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

}

class ApiData {

    constructor() {
        this.api_conn = new ApiConnection
        this.api_toolbox = new ApiToolbox
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
    getResultsByIndexcard(item, apiGenres) {
        const container = document.getElementById('container')
        container.style.backgroundImage = `url(${ApiUrls.IMAGE_URL_1920X800 + item.backdrop_path})`

        const image = document.getElementById('poster')
        this.api_toolbox.setCardImage(false, item, false, image)

        const title = document.getElementById('title')
        this.api_toolbox.setCardTitle(false, container, item, title)
        
        const date = document.getElementById('date')
        this.api_toolbox.setCardDate(false, container, item, date)

        const genres = document.getElementById('genres')
        this.api_toolbox.setGenresName(item, genres, apiGenres)

        const url = this.api_toolbox.setDetailsURL(item)
        this.api_conn.getApiDataByURL(url).then(data => {

            const runtime = document.getElementById('runtime')
            this.api_toolbox.formatRuntime(data, runtime)
    
            const tagline = document.getElementById('tagline')
            tagline.textContent = data.tagline
        })

        const url_2 = this.api_toolbox.setCreditsURL(item)
        this.api_conn.getApiDataByURL(url_2).then(data => {
            // TODO
        })

        const overview = document.getElementById('overview')
        overview.textContent = item.overview

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

}

export class ApiHandlers {

    constructor() {
        this.api_conn = new ApiConnection
        this.api_data = new ApiData
        this.api_toolbox = new ApiToolbox
    }

    // handle api data
    handleApiData(apiUrl, template, cardClassName) {
        const urlAssociation = MappedApiUrls.urlAssociation 
        const indexUrl = window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE
        const urls = {
            [Template.MOVIES_TEMPLATE]: window.location.pathname === Pathname.HTML_FOLDER + Template.MOVIES_TEMPLATE,
            [Template.SERIES_TEMPLATE]: window.location.pathname === Pathname.HTML_FOLDER + Template.SERIES_TEMPLATE,
        }
        const genres = [ApiUrls.movieListGenres, ApiUrls.serieListGenres]

        const urlParams = new URLSearchParams(window.location.search)
        const category = urlParams.get('category')
        const indexCard = urlParams.get('indexCard')
        const emptySearch = window.location.search === ''
        const search = window.location.search === `?category=${urlAssociation[apiUrl][1]}&indexCard=${indexCard}`

        if ((indexUrl && emptySearch) || (urls[template] && emptySearch || search)) {
            this.api_conn.getApiDataByURL(apiUrl).then(data => {
                if (indexUrl) {
                    this.api_data.getResults(data.results, urlAssociation[apiUrl][0])
                    this.api_data.getClickedCard(data.results, urlAssociation[apiUrl][0], cardClassName, urlAssociation[apiUrl][1])
                }
                
                if (Category.apiCategories.includes(category)) {
                    this.api_data.getResultsByIndexcard(data.results[indexCard], genres)
                }
            })
        }

        this.api_toolbox.catchNoUrlError(template)
    }

}

class ApiToolbox {

    constructor() {
        this.api_conn = new ApiConnection
    }

    // catch url that doesn't exists
    catchNoUrlError(template) {
        const indexUrl = window.location.pathname === Pathname.HTML_FOLDER + Template.INDEX_TEMPLATE
        const urls = {
            [Template.MOVIES_TEMPLATE]: window.location.pathname === Pathname.HTML_FOLDER + Template.MOVIES_TEMPLATE,
            [Template.SERIES_TEMPLATE]: window.location.pathname === Pathname.HTML_FOLDER + Template.SERIES_TEMPLATE,
        }

        const urlParams = new URLSearchParams(window.location.search)
        const category = urlParams.get('category')
        const categoryError = !urlParams.has('category') || category === '' || !Category.apiCategories.includes(category)
        const indexCard = urlParams.get('indexCard')
        const indexCardError = !urlParams.has('indexCard') || indexCard === '' || isNaN(indexCard)
        const fullSearch = window.location.search !== ''

        if ((indexUrl && fullSearch) || urls[template] && fullSearch && (categoryError || indexCardError)) {
            window.location.href = 'error.html'
        }
    }

    // format runtime
    formatRuntime(data, runtime) {
        if (window.location.pathname === Pathname.HTML_FOLDER + Template.MOVIES_TEMPLATE) {
            const hours = Math.floor(data.runtime / 60)
            const minutes = data.runtime % 60
            runtime.textContent = `${hours}h ${minutes}m`
        }
    }

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

    // set genres name
    setGenresName(item, box, genres) {
        if (item.media_type == 'movie' || container.classList.contains(CardClassName.MOVIE_BY_INDEX)) {
            genres = genres[0]
        }
    
        if (item.media_type == 'tv' || container.classList.contains(CardClassName.SERIE_BY_INDEX)) {
            genres = genres[1]
        }
    
        this.api_conn.getApiDataByURL(genres).then(genre_data => {
            const genres_list = genre_data.genres
            const content_genres = item.genre_ids
    
            const filteredGenres = genres_list.filter(genre_item => content_genres.includes(genre_item.id))
    
            content_genres.forEach((content_genre, index) => {
                const matchingGenre = filteredGenres.find(genre_item => genre_item.id === content_genre)
    
                if (matchingGenre) {
                    const genre_names_box = document.createElement('h3')
    
                    if (index < content_genres.length - 1) {
                        genre_names_box.textContent = `${matchingGenre.name},`
                    } else {
                        genre_names_box.textContent = matchingGenre.name
                    }
    
                    box.appendChild(genre_names_box)
                }
            })
        })
    }



    // set content details URL
    setDetailsURL(item){
        if (window.location.pathname === Pathname.HTML_FOLDER + Template.MOVIES_TEMPLATE) {
            const url = `https://api.themoviedb.org/3/movie/${item.id}?language=en-US`
            return url
        }
        
        if (window.location.pathname === Pathname.HTML_FOLDER + Template.SERIES_TEMPLATE) {
            const url = `https://api.themoviedb.org/3/tv/${item.id}?language=en-US`
            return url
        }
    }

    // set content credits URL
    setCreditsURL(item){
        if (window.location.pathname === Pathname.HTML_FOLDER + Template.MOVIES_TEMPLATE) {
            const url = `https://api.themoviedb.org/3/movie/${item.id}/credits?language=en-US`
            return url
        }
        
        if (window.location.pathname === Pathname.HTML_FOLDER + Template.SERIES_TEMPLATE) {
            const url = `https://api.themoviedb.org/3/tv/${item.id}/credits?language=en-US`
            return url
        }
    }

    

}