const search = document.getElementById("search");
const result = document.getElementById("result");

function searchData() {
    result.textContent = "Searching for: " + search.value;
}

function debounce(func, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(function () {
            func();
        }, delay);

    };
}

const debouncedSearch = debounce(searchData, 500);

search.addEventListener("input", debouncedSearch);