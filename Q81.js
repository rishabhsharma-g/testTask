fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        let output = "";

        users.forEach(user => {
            output += `
                <div>
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.address.city}</p>
                    <hr>
                </div>
            `;
        });

        document.getElementById("users").innerHTML = output;
    })
    .catch(error => {
        document.getElementById("users").textContent =
            "Failed to load users.";
        console.log(error);
    });