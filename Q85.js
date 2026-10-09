let currentPage = 1;
const postsPerPage = 10;
let allPosts = [];

async function loadPosts() {
    const postsDiv = document.getElementById("posts");

    postsDiv.textContent = "Loading posts...";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        allPosts = await response.json();

        displayPosts();
    } catch (error) {
        postsDiv.textContent = "Unable to load posts. Please try again.";
        console.log(error);
    }
}

function displayPosts() {
    const postsDiv = document.getElementById("posts");

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;

    const pagePosts = allPosts.slice(start, end);

    postsDiv.innerHTML = "";

    pagePosts.forEach(post => {
        postsDiv.innerHTML += `
            <div>
                <h3>${post.id}. ${post.title}</h3>
                <p>${post.body}</p>
                <hr>
            </div>
        `;
    });

    document.getElementById("pageNumber").textContent =
        `Page ${currentPage}`;

    document.getElementById("prev").disabled = currentPage === 1;

    document.getElementById("next").disabled =
        end >= allPosts.length;
}

function nextPage() {
    if (currentPage * postsPerPage < allPosts.length) {
        currentPage++;
        displayPosts();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayPosts();
    }
}

loadPosts();