const containers = document.querySelectorAll('.flex1')

let posts = []
let posts2 = []

function appendData(arr, el, show) {
    el.innerHTML = ""

    arr.forEach(item => {
        el.innerHTML += `
            <div class="post">
                <div>${item.title}</div>
                <div>${item.body}</div>
                ${show ? "<button class=\"mt-2\">Move</button>" : ""}
            </div>`
    })

    const buttons = document.querySelectorAll('button')

    buttons.forEach((btn, index) => btn.onclick = () => {
        posts2.push(posts[index])
        posts = posts.filter((x, i) => i !== index)
        appendData(posts2, containers[1], false)
        appendData(posts, containers[0], true)
    })
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        posts = data
        appendData(posts, containers[0], true)
    })