/* API KEY: ZqqXSvQeW0U0C2UFDxlMAFO2K02LqWMIUeRKeCoo
https://api.nasa.gov/planetary/apod?api_key=ZqqXSvQeW0U0C2UFDxlMAFO2K02LqWMIUeRKeCoo */

document.addEventListener('DOMContentLoaded', () => {
const generateBtn = document.querySelector('.generate')
const title = document.querySelector('.title')
const imgBox = document.querySelector('.imgBox')
const imgDescription = document.querySelector('.imgDescription')
const copyright = document.querySelector('.copyright')

// generateBtn.addEventListener('click', displayAPOD)


fetch('https://api.nasa.gov/planetary/apod?api_key=ZqqXSvQeW0U0C2UFDxlMAFO2K02LqWMIUeRKeCoo')
    .then(response => {
        return response.json()
    })
    .then(data => {
        const imgUrl = data.hdurl
        const imgDate = data.date
        const description = data.explanation
        const imgTitle = data.title
        const imgCopyright = data.copyright

        title.innerHTML = imgTitle + ' ' + ' | ' + imgDate
        imgBox.src="${imgUrl}"

    
    })

 

})