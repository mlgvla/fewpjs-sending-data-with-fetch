// Add your code here
function submitData(name, email) {
    let userData = {
        name: name,
        email: email
    }

    let userURL = "http://localhost:3000/users"

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    }

    return fetch(userURL, configObj)
        .then(resp => resp.json())
        .then(data => {
            document.body.innerHTML = data.id

        })
        .catch(error => {
            document.body.innerHTML = error.message
        })
}