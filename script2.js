

let addButton = document.querySelector(".AddPostButton")
let inputText = document.querySelector(".TextPost")



addButton.addEventListener("click", SaveToServer)

let publicApi = "cf60887d111d1fbf7717e778cda01bac"

async function SaveToServer() {
    const result = await fetch(`https://jsonbox.ru/api.php?action=get&api_key=${publicApi}`);
    const userData = await result.json();
    let posts = userData.data.postsData

    let now = new Date()
    let dataString = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`

    posts.push({
        text: inputText.value,
        dislike: 0,
        like: 0, 
        date: dataString
    })

    await fetch('https://jsonbox.ru/api.php?action=store', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        api_key: publicApi,
        data: {postsData: posts}
    })
});
}