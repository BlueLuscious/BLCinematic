import { ApiUrls, CardClassName, Template } from "./constants.js"
import { ApiHandlers } from "./apiData.js"

const api = new ApiHandlers

document.addEventListener('DOMContentLoaded', () => {

    api.handleApiData(ApiUrls.moviesNowPlaying, Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS)
    api.handleApiData(ApiUrls.moviesPopular, Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS)
    api.handleApiData(ApiUrls.moviesTopRated, Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS)
    api.handleApiData(ApiUrls.moviesUpcoming, Template.MOVIES_TEMPLATE, CardClassName.MOVIES_CLASS)

})