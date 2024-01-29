import { ApiUrls, CardClassName } from "./constants.js"
import { ApiHandlers } from "./apiData.js"

const api = new ApiHandlers

document.addEventListener('DOMContentLoaded', () => {

    const moviesByIndexCard = document.getElementById('moviesByIndex')
    const seriesByIndexCard = document.getElementById('seriesByIndex')
    const cardsByIndex = [moviesByIndexCard, seriesByIndexCard]

    api.handleApiData(ApiUrls.trendingAllDay, cardsByIndex, null, CardClassName.TRENDING_CLASS)
    api.handleApiData(ApiUrls.trendingMoviesDay, cardsByIndex, null, CardClassName.TRENDING_CLASS)
    api.handleApiData(ApiUrls.trendingSeriesDay, cardsByIndex, null, CardClassName.TRENDING_CLASS)
    api.handleApiData(ApiUrls.trendingAllWeek, cardsByIndex, null, CardClassName.TRENDING_CLASS)
    api.handleApiData(ApiUrls.trendingMoviesWeek, cardsByIndex, null, CardClassName.TRENDING_CLASS)
    api.handleApiData(ApiUrls.trendingSeriesWeek, cardsByIndex, null, CardClassName.TRENDING_CLASS)

})