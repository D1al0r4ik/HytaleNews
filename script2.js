
let notes = []
let addButton = document.querySelector(".AddPostButton")
let inputText = document.querySelector(".TextPost")

function saveElem(){
    let now = new Date()
    let dataString = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`

    notes.push({
        text: inputText.value,
        dislike: 0,
        like: 0, 
        date: dataString
    })
    SaveLocal()
}

function SaveLocal() {
    localStorage.setItem("NewsData", JSON.stringify(notes))
}

function loader() {
    const data = localStorage.getItem("NewsData")

    if(data) {
        posts = JSON.parse(data);
    }
}




addButton.addEventListener("click", saveElem)
loader()