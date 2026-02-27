let postsContainer = document.querySelector(".posts")
let posts = [{
    text: "dasdasd",
    dislike: 123,
    like: 12312,
    date: "12.13.2090"
}]
let Like = posts.like
let Dislike = posts.dislike


function render() {
    posts.forEach((post, index) => {
        let divPost = document.createElement("div")
        divPost.className = "divPost"
        divPost.innerHTML = `
        <p class = "TextOfNews">${post.text}</p>
            <div class = "lower">
        <p class = "date">${post.date}</p>
        <div class = "LikeContainer">
        <p class = "like"><img class="LikeIconClass" src="src/LikeIcon.png" alt="like">${post.like}</p>
        <p class = "dislike"><img class="LikeIconClass" src="src/LikeIcon.png" alt="like">${post.dislike}</p>
        </div>
            </div>
            <style>
            margin-top: 20px;
            </style>
        `

        postsContainer.appendChild(divPost)
})
}

function renderLike() {
    if (Like >= 1000) {
        Like.innerHTML = (Like/1000) + "К"
}  else {
    Like.innerHTML = Like
}
}

function renderDisLike() {
    if (Dislike >= 1000) {
        Dislike.innerHTML = (Dislike/1000) + "К"
}  else {
    Dislike.innerHTML = Dislike
}
}


renderLike()
renderDisLike()
render()

