// Clears the console:
console.clear()

// Grabs HTML DOM elements:
const circleNumber = document.querySelector(".number h2")

const circleStroke = document.querySelector(
  ".percent-box svg circle:nth-child(2)"
)

// Setting the number for the counter:
let percentNumber = 0

const percentCounter = number => {
  const counter = setInterval(() => {
    circleNumber.innerHTML = `${percentNumber}<span>%</span>`

    circleStroke.style.strokeDashoffset = `calc(440 - (440 * ${percentNumber}) / 100)`

    if (number === percentNumber) {
      clearInterval(counter)
    } else {
      percentNumber++
    }
  }, 10)
}

percentCounter(57)
