export const signup = user => {
    return fetch(`https://api.spoonacular.com/users/connect?apiKey=009a0f8cbc19464d95f6102dc1bc74f8`, {
        method: "POST",
        headers: {
            accept: "application/json",
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
}