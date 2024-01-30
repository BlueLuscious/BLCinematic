import { ApiUrls, CardClassName, Template } from "./constants.js"
import { ApiHandlers } from "./apiData.js"

const api = new ApiHandlers

document.addEventListener('DOMContentLoaded', () => {

    api.handleApiData(ApiUrls.seriesAiringToday, Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS)
    api.handleApiData(ApiUrls.seriesOnTheAir, Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS)
    api.handleApiData(ApiUrls.seriesPopular, Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS)
    api.handleApiData(ApiUrls.seriesTopRated, Template.SERIES_TEMPLATE, CardClassName.SERIES_CLASS)

})