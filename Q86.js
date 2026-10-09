let allUsers = [];

async function loadUsers() {
    const message = document.getElementById("message");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        allUsers = await response.json();

        message.textContent = "Total users: " + allUsers.length;
        displayUsers(allUsers);

    } catch (error) {
        message.textContent = "Unable to load users.";
        console.log(error);
    }
}

function searchUsers() {
    const searchValue = document
        .getElementById("search")
        .value.trim()
        .toLowerCase();

    const filteredUsers = allUsers.filter(user =>
        user.name.toLowerCase().includes(searchValue)
    );

    displayUsers(filteredUsers);

    document.getElementById("message").textContent =
        filteredUsers.length + " user(s) found";
}

function displayUsers(users) {
    const usersDiv = document.getElementById("users");

    usersDiv.innerHTML = "";

    if (users.length === 0) {
        usersDiv.textContent = "No users found.";
        return;
    }

    users.forEach(user => {
        usersDiv.innerHTML += `
            <div>
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <hr>
            </div>
        `;
    });
}

loadUsers();