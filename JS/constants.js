export class ApiUrls {
    static trendingAllDay = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
    static trendingAllWeek = 'https://api.themoviedb.org/3/trending/all/week?language=en-US'
    static trendingMoviesDay = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
    static trendingMoviesWeek = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
    static trendingSeriesDay = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
    static trendingSeriesWeek = 'https://api.themoviedb.org/3/trending/tv/week?language=en-US'

    static moviesNowPlaying = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
    static moviesPopular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    static moviesTopRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
    static moviesUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'

    static seriesAiringToday = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'
    static seriesOnTheAir = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1'
    static seriesPopular = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'
    static seriesTopRated = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'

    static movieListGenres = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
    static serieListGenres = 'https://api.themoviedb.org/3/genre/tv/list?language=en'

    static IMAGE_URL_220x330 = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
    static IMAGE_URL_300x450 = 'https://www.themoviedb.org/t/p/w300_and_h450_face'
    static IMAGE_URL_600x900 = 'https://www.themoviedb.org/t/p/w600_and_h900_face'
    static IMAGE_URL_1920X800 = 'https://www.themoviedb.org/t/p/w1920_and_h800_face'

    // TODO hacer que pueda ingresar el numero de pagina en las urls de movies y series
}

export class ApiContents {
    static TRENDING_ALL = 'all'
    static TRENDING_MOVIES = 'movies'
    static TRENDING_SERIES = 'series'
    static TRENDING_DAY = 'day'
    static TRENDING_WEEK = 'week'
    static MOVIES_NOW_PLAYING = 'nowPlaying'
    static MOVIES_POPULAR = 'popularMov'
    static MOVIES_TOP_RATED = 'topRatedMov'
    static MOVIES_UPCOMING = 'upcoming'
    static SERIES_AIRING_TODAY = 'airingToday'
    static SERIES_ON_THE_AIR = 'onTheAir'
    static SERIES_POPULAR = 'popularSer'
    static SERIES_TOP_RATED = 'topRatedSer'
}

class Card {
    static trendingAllDayCard = document.getElementById('trendingAllDay')
    static trendingMoviesDayCard = document.getElementById('trendingMoviesDay')
    static trendingSeriesDayCard = document.getElementById('trendingSeriesDay')
    static trendingAllWeekCard = document.getElementById('trendingAllWeek')
    static trendingMoviesWeekCard = document.getElementById('trendingMoviesWeek')
    static trendingSeriesWeekCard = document.getElementById('trendingSeriesWeek')
    static moviesNowPlayingCard = document.getElementById('moviesNowPlaying')
    static moviesPopularCard = document.getElementById('moviesPopular')
    static moviesTopRatedCard = document.getElementById('moviesTopRated')
    static moviesUpcomingCard = document.getElementById('moviesUpcoming')
    static seriesAiringTodayCard = document.getElementById('seriesAiringToday')
    static seriesOnTheAirCard = document.getElementById('seriesOnTheAir')
    static seriesPopularCard = document.getElementById('seriesPopular')
    static seriesTopRatedCard = document.getElementById('seriesTopRated')
}

export class CardClassName {
    static TRENDING_CLASS = 'main_trending_tr'
    static MOVIES_CLASS = 'main_movies_tr'
    static SERIES_CLASS = 'main_series_tr'
    static MOVIE_BY_INDEX = 'movie_section_by_index'
    static SERIE_BY_INDEX = 'serie_section_by_index'
}

export class Category {
    static apiCategories = [
        'trending_all_day',
        'trending_movie_day',
        'trending_serie_day',
        'trending_all_week',
        'trending_movie_week',
        'trending_serie_week',
        'movie_now_playing',
        'movie_popular',
        'movie_top_rated',
        'movie_upcoming',
        'serie_airing_today',
        'serie_on_the_air',
        'serie_popular',
        'serie_top_rated'
    ]
}

export class Colour {
    static WHITE_COLOUR = 'rgb(255, 255, 255)'
    static DARK_BLUE_COLOUR = 'rgb(6, 33, 74)'
    static DARK_BLUE_COLOUR_2 = 'rgb(17, 60, 124)'
    static LIGHT_BLUE_COLOUR = 'rgb(134, 174, 235)'
}

export class Cursor {
    static DEFAULT_CURSOR = 'default'
    static POINTER_CURSOR = 'pointer'
}

export class Display {
    static DISPLAY_BLOCK = 'block'
    static DISPLAY_NONE = 'none'
}

export class Key {
    static ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmFjOTA5ZmNiYTRhYjVhNTI5M2U4MTBiZmRhNmQ1MiIsInN1YiI6IjY1NGI2NTVjMjg2NmZhMDBhYjEzMTMwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XFfnp-1dM_GVvRUASsPgjUiMvYB9u7gsd8RlLWCGU3Y'
    static API_KEY = 'cfac909fcba4ab5a5293e810bfda6d52'
}

export class MappedApiUrls {
    static urlAssociation  = {
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
}

export class Pathname {
    static HTML_FOLDER = '/HTML/'
    static CSS_FOLDER = '/CSS/'
    static JS_FOLDER = '/JS/'
}

export class Template {
    static INDEX_TEMPLATE = 'index.html'
    static MOVIES_TEMPLATE = 'movies.html'
    static SERIES_TEMPLATE = 'series.html'
}