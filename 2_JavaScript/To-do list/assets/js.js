const input = document.getElementById('input')
const tasks = document.querySelector('.list')
const btn = document.getElementById('btn')

const Tasks = function () {
    if (input.value !== '') {
        const taskName = input.value
        const div = document.createElement('div')

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        const label = document.createElement('label')
        label.appendChild(document.createTextNode(taskName))

        div.appendChild(checkbox)
        div.appendChild(label)
        tasks.appendChild(div)
    }
}

btn.addEventListener('click', Tasks)

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        Tasks()
    }
})
