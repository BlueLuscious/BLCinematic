import { ApiUrls, CardClassName } from "./constants.js"
import { ApiHandlers } from "./apiData.js"

const api = new ApiHandlers

document.addEventListener('DOMContentLoaded', () => {

    api.handleApiData(ApiUrls.trendingAllDay, null, CardClassName.TRENDING_CLASS)
    api.handleApiData(ApiUrls.trendingMoviesDay, null, CardClassName.TRENDING_CLASS)
    api.handleApiData(ApiUrls.trendingSeriesDay, null, CardClassName.TRENDING_CLASS)
    api.handleApiData(ApiUrls.trendingAllWeek, null, CardClassName.TRENDING_CLASS)
    api.handleApiData(ApiUrls.trendingMoviesWeek, null, CardClassName.TRENDING_CLASS)
    api.handleApiData(ApiUrls.trendingSeriesWeek, null, CardClassName.TRENDING_CLASS)

})