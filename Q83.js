function loadUsers() {
    const message = document.getElementById("message");
    const usersDiv = document.getElementById("users");

    message.textContent = "Loading users...";
    usersDiv.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Server error: " + response.status);
            }

            return response.json();
        })
        .then(users => {
            let output = "";

            users.forEach(user => {
                output += `
                    <div>
                        <h3>${user.name}</h3>
                        <p>${user.email}</p>
                        <hr>
                    </div>
                `;
            });

            usersDiv.innerHTML = output;
            message.textContent = "Users loaded successfully!";
        })
        .catch(error => {
            message.textContent =
                "Unable to load users. Please check your internet and try again.";

            console.log("API Error:", error);
        });
}

loadUsers();