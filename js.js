const pointSelector = document.querySelector(".point p")
const totalNumbSelector = document.querySelector(".totalNumb p")
const playerNumbSelector = document.querySelector(".playerNumb p")
const lessPointSelector = document.querySelector(".lessPoint p")


const iconsSelector = document.querySelectorAll(".icon")

let point = 0, total = findRndNumb("total"), playerNumb = 0, lessPoint = 0



totalNumbSelector.textContent = total

function findRndNumb(item) {
    if (item == "total") {
        return Math.floor(Math.random() * 100)
    }

    if (item == "icon") {
        return Math.floor(Math.random() * 10)
    }
}


let iconsNumbers = []

function iconsNumbersFixed() {
    iconsNumbers = []
    while (iconsNumbers.length <= 3) {
        const number = findRndNumb("icon")
        if (!iconsNumbers.includes(number) && number != 0) {
            iconsNumbers.push(number)
        }
    }
}

iconsNumbersFixed()

window.addEventListener('click', (e) => {
    if (e.target.attributes.class.value == "icon") {
        const indexForIconsNumbers = e.target.attributes.id.value

        playerNumb += iconsNumbers[indexForIconsNumbers]

        playerNumbSelector.textContent = playerNumb

        checkWin()
    }
})


function checkWin() {
    if (playerNumb == total) {
        point++
        pointSelector.textContent = point
        reset()
    } else if (playerNumb > total) {
        lessPoint++
        lessPointSelector.textContent = lessPoint
        reset()
    }
}


function reset() {
    total = findRndNumb("total")
    playerNumb = 0

    iconsNumbersFixed()

    playerNumbSelector.textContent = playerNumb
    totalNumbSelector.textContent = total
}