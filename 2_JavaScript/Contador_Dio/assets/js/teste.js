var currentNumberWrapper = document.getElementById('currentNumber')
const INCREMENT = document.getElementById('increment')
const DECREMENT = document.getElementById('decrement')

let count = 0

INCREMENT.addEventListener('click', function increment() {
    count++
    if (count <= 10) {
        currentNumberWrapper.innerHTML = count
    }

    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'blue'
    }
})

DECREMENT.addEventListener('click', function decrement() {
    count--
    if (count >= -10) {
        currentNumberWrapper.innerHTML = count
    }
    
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red'
    }
})

function zero() {
    currentNumber = 0
    currentNumberWrapper.innerHTML = currentNumber
}



