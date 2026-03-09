let postsContainer = document.querySelector(".posts")
let LikeSaver = []
let DislikeSaver = []
let posts = [{
    text: "dasdasd",
    dislike: 123,
    like: 12312,
    date: "12.13.2090"
}]
let LikeContainer = document.querySelector(".LikeContainer")

function render() {
    postsContainer.innerHTML = ""
    posts.forEach((post, index) => {
        let divPost = document.createElement("div")
        divPost.className = "divPost"
        divPost.innerHTML = `
        <p class = "TextOfNews">${post.text}</p>
        <div class = "delete" data-index = ${index}>❌</div>
            <div class = "lower">
        <p class = "date">${post.date}</p>
        <div class = "LikeContainer">
        <p class = "like" data-index = ${index}><img class="LikeIconClass" src="src/LikeIcon.png" alt="like">${renderLike(post.like)}</p>
        <p class = "dislike" data-index = ${index}><img class="LikeIconClass" src="src/LikeIcon.png" alt="like">${renderLike(post.dislike)}</p>
        </div>
            </div>

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
    const likeData = localStorage.getItem("likeData")
    const DislikeData = localStorage.getItem("DislikeData")
    if(data) {
        posts = JSON.parse(data);
    }

    if(likeData) {
        LikeSaver = JSON.parse(likeData)
    }

    if(DislikeData) {
        DislikeSaver = JSON.parse(DislikeData)
    }
}

function SaveLocal() {
    localStorage.setItem("NewsData", JSON.stringify(posts))
    localStorage.setItem("likeData", JSON.stringify(LikeSaver))
    localStorage.setItem("DislikeData", JSON.stringify(DislikeSaver))
}


postsContainer.addEventListener("click", (event) =>{
    let likeBtn = event.target.closest(".like")
    let disLikeBtn = event.target.closest(".dislike")
    let deleteBtn = event.target.closest(".delete")

    if(deleteBtn) {
        let i = deleteBtn.dataset.index
        posts.splice(i, 1)
        LikeSaver.splice(i, 1)
        DislikeSaver.splice(i, 1)
        SaveLocal()
        render()
    }

    if(likeBtn) {
        let i = likeBtn.dataset.index
        if(!LikeSaver.includes(i)){
            LikeSaver.push(i)
            posts[i].like++
            SaveLocal()
            render()
        }
    }

    if(disLikeBtn) {
        let i = disLikeBtn.dataset.index
        if(!DislikeSaver.includes(i)){
            DislikeSaver.push(i)
            posts[i].dislike++
            SaveLocal()
            render()
    }
}
})


loader()
render()
