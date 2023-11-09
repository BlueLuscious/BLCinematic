window.addEventListener('DOMContentLoaded', function () {

    // const apiKey = 'cfac909fcba4ab5a5293e810bfda6d52'
    const IMAGE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
    const trendingParam = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'

    const trendingCard = document.getElementById('trendingTable')

    getApiData(trendingParam)
        .then(data => {

            const trendingList = data.results

            trendingList.forEach(trendingItem => {
                const trendingRow = document.createElement('tr')
                trendingRow.classList.add('main_trending_tr')

                const trendingImageData = document.createElement('td')
                const trendingImage = document.createElement('img')
                trendingImage.src = `${IMAGE_URL + trendingItem.poster_path}`
                trendingImageData.appendChild(trendingImage)

                /* movies title */
                const trendingTitle = document.createElement('td')
                trendingTitle.textContent = trendingItem.title

                /* tv shows and series name */
                const trendingName = document.createElement('td')
                trendingName.textContent = trendingItem.name

                trendingRow.appendChild(trendingImage)
                trendingRow.appendChild(trendingTitle)
                trendingRow.appendChild(trendingName)
                trendingCard.appendChild(trendingRow)

            })

        })




    /* GET APIDATA FUNCTION  */
    async function getApiData(params) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmFjOTA5ZmNiYTRhYjVhNTI5M2U4MTBiZmRhNmQ1MiIsInN1YiI6IjY1NGI2NTVjMjg2NmZhMDBhYjEzMTMwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XFfnp-1dM_GVvRUASsPgjUiMvYB9u7gsd8RlLWCGU3Y'
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
    /* GET APIDATA FUNCTION  */

})