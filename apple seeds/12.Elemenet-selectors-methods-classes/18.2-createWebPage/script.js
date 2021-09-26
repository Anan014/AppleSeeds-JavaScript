const container = document.createElement("div"),
    div1 = document.createElement("div"),
    div2 = document.createElement("div"),
    div3 = document.createElement("div"),
    title = document.createElement('h1');

document.body.append(title)
document.body.append(container)
container.appendChild(title)
container.appendChild(div3)

div3.appendChild(div2)
div3.appendChild(div1)
div3.style.display = 'flex'
document.body.style.margin = '0'
container.style.width = '100vw'
container.style.height = '100vh'
container.style.backgroundColor = 'blue'

container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.alignItems = 'center'
container.style.justifyContent = 'space-around'
div1.style.width = '100px'
div1.style.height = '100px'
div1.style.backgroundColor = 'black'
div2.style.width = '100px'
div2.style.height = '100px'
div2.style.backgroundColor = 'green'

title.innerHTML = 'welcome'