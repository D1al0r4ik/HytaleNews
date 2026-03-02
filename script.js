let postsContainer = document.querySelector(".posts")
let posts = [{
    text: "dasdasd",
    dislike: 123,
    like: 12312,
    date: "12.13.2090"
}]
let LikeContainer = document.querySelector(".LikeContainer")

function render() {
    posts.forEach((post, index) => {
        let divPost = document.createElement("div")
        divPost.className = "divPost"
        divPost.innerHTML = `
        <p class = "TextOfNews">${post.text}</p>
            <div class = "lower">
        <p class = "date">${post.date}</p>
        <div class = "LikeContainer">
        <p class = "like" data-index = ${index}><img class="LikeIconClass" src="src/LikeIcon.png" alt="like">${renderLike(post.like)}</p>
        <p class = "dislike" data-index = ${index}><img class="LikeIconClass" src="src/LikeIcon.png" alt="like">${renderLike(post.dislike)}</p>
        </div>
            </div>
            <style>
            margin-top: 20px;
            </style>

        `

        postsContainer.appendChild(divPost)
})
}

function renderLike(Like) {
    if (Like >= 1000) {
        return (Like/1000) + "К"
}  else {
    return Like
}
}

function loader() {
    const data = localStorage.getItem("NewsData")

    if(data) {
        posts = JSON.parse(data);
    }
}

function SaveLocal() {
    localStorage.setItem("NewsData", JSON.stringify(posts))
}


LikeContainer.addEventListener("click", (event) =>{
    let likeBtn = event.target.closest(".like")
    let disLikeBtn = event.target.closest(".dislike")


    if(likeBtn) {
        let i = likeBtn.dataset.index
        posts[i].like++
        SaveLocal()
        render()
    }
    if(disLikeBtn) {
        let i = disLikeBtn.dataset.index
        posts[i].dislike++
        SaveLocal()
        render()
    }
})


loader()
render()
