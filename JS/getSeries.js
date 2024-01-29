import { ApiUrls, CardClassName, Template } from "./constants.js"
import { ApiHandlers } from "./apiData.js"

const api = new ApiHandlers

document.addEventListener('DOMContentLoaded', () => {

    const moviesByIndexCard = document.getElementById('moviesByIndex')
    const seriesByIndexCard = document.getElementById('seriesByIndex')
    const cardsByIndex = [moviesByIndexCard, seriesByIndexCard]

    api.handleApiData(ApiUrls.seriesAiringToday, cardsByIndex, Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS)
    api.handleApiData(ApiUrls.seriesOnTheAir, cardsByIndex, Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS)
    api.handleApiData(ApiUrls.seriesPopular, cardsByIndex, Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS)
    api.handleApiData(ApiUrls.seriesTopRated, cardsByIndex, Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS)

})