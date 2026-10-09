
const loader = document.getElementById("loader");
const usersDiv = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch users");
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
    })
    .catch(error => {
        usersDiv.textContent = "Failed to load users.";
        console.log(error);
    })
    .finally(() => {
        loader.style.display = "none";
    });