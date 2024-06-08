export  const Login=(user)=> {
    return fetch(`https://expressjs-4pm.onrender.com/api/signin`, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}