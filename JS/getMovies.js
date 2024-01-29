import { ApiUrls, CardClassName, Template } from "./constants.js"
import { ApiHandlers } from "./apiData.js"

const api = new ApiHandlers

document.addEventListener('DOMContentLoaded', () => {

    const moviesByIndexCard = document.getElementById('moviesByIndex')
    const seriesByIndexCard = document.getElementById('seriesByIndex')
    const cardsByIndex = [moviesByIndexCard, seriesByIndexCard]

    api.handleApiData(ApiUrls.moviesNowPlaying, cardsByIndex, Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS)
    api.handleApiData(ApiUrls.moviesPopular, cardsByIndex, Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS)
    api.handleApiData(ApiUrls.moviesTopRated, cardsByIndex, Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS)
    api.handleApiData(ApiUrls.moviesUpcoming, cardsByIndex, Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS)

})