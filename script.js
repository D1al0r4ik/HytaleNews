let postsContainer = document.querySelector(".posts")
let publicApi = "cf60887d111d1fbf7717e778cda01bac"
let posts = []

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
        `

        postsContainer.appendChild(divPost)
})
}



async function loader() {
    const result = await fetch(`https://jsonbox.ru/api.php?action=get&api_key=${publicApi}`);
    const userData = await result.json();
    posts = userData.data.postsData
    render()
}


postsContainer.addEventListener("click", async (event) =>{
    let deleteBtn = event.target.closest(".delete")

    if(deleteBtn) {
        let i = deleteBtn.dataset.index
        posts.splice(i, 1)
        await fetch('https://jsonbox.ru/api.php?action=store', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                api_key: publicApi,
                data: {postsData: posts}
            })
        });
        render()
    }

})


loader()
