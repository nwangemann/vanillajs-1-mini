var count = 0

let element = document.getElementById('counter')

function increase (){
    count++
    element.innerText = count
    return count
}

function decrease (){
    count--
    element.innerText = count
    return count
}

function reset (){
    count = 0
    element.innerHTML = "<mark>" + count + "</mark>"
    return count
}

function selectTheme(theme){
    let body = document.getElementsByTagName('body')
    body[0].className = theme

    let main = document.getElementsByTagName('main')
    main[0].className = theme

    let buttons = document.getElementsByTagName('buttons');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }
}