// GET APIDATA FUNCTION
export async function getApiDataByURL(params) {
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
// GET APIDATA FUNCTION

// GET TRENDING RESULTS //
const IMAGE_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

export function getTrending(listItem, card, formatDate) {
    listItem.forEach(trendingItem => {
        const row = document.createElement('tr')
        row.classList.add('main_trending_tr')

        const imageData = document.createElement('td')
        const image = document.createElement('img')
        image.src = `${IMAGE_URL + trendingItem.poster_path}`
        imageData.appendChild(image)
        row.appendChild(imageData)

        // movies title
        if (trendingItem.media_type == 'movie') {
            const title = document.createElement('td')
            const titleBold = document.createElement('strong')
            titleBold.textContent = trendingItem.title
            title.appendChild(titleBold)

            const date = document.createElement('td')
            if (trendingItem.release_date == '') {
                date.textContent = ''
            } else {
                const formattedDate = formatDate(trendingItem.release_date)
                date.textContent = formattedDate
            }

            row.appendChild(title)
            row.appendChild(date)
        }

        // tv shows and series name
        if (trendingItem.media_type == 'tv') {
            const nameItem = document.createElement('td')
            const nameBold = document.createElement('strong')
            nameBold.textContent = trendingItem.name
            nameItem.appendChild(nameBold)

            const firstAirDate = document.createElement('td')
            if (trendingItem.first_air_date == '') {
                firstAirDate.textContent = ''
            } else {
                const formattedFirstAirDate = formatDate(trendingItem.first_air_date)
                firstAirDate.textContent = formattedFirstAirDate
            }

            row.appendChild(nameItem)
            row.appendChild(firstAirDate)
        }

        card.appendChild(row)
    })
}
// GET TRENDING RESULTS //



// LOAD FOOTER
export async function loadFooter() {
    const footer = document.getElementById('id_footer')
    footer.style.display = 'block'
}
// LOAD FOOTER

// FORMAT DATE FUNCTION
export function formatDate(date) {
    date = date.split('-')

    let month
    switch (date[1]) {
        case '01':
            month = 'Jan'
            break;
        case '02':
            month = 'Feb'
            break;
        case '03':
            month = 'Mar'
            break;
        case '04':
            month = 'Apr'
            break;
        case '05':
            month = 'May'
            break;
        case '06':
            month = 'Jun'
            break;
        case '07':
            month = 'Jul'
            break;
        case '08':
            month = 'Aug'
            break;
        case '09':
            month = 'Sep'
            break;
        case '10':
            month = 'Oct'
            break;
        case '11':
            month = 'Nov'
            break;
        case '12':
            month = 'Dec'
            break;
        default:
            month = 'Invalid'
            break;
    }

    date = `${month} ${date[2]}, ${date[0]}`
    return date
}
// FORMAT DATE FUNCTION