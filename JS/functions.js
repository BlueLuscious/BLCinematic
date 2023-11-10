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

// LOAD FOOTER
export async function loadFooter() {
    const footer = document.getElementById('id_footer')
    footer.style.visibility = 'visible'
    footer.style.opacity = '1'

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