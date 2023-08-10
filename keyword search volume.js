const inputEl = document.getElementById('input');
const searchBtnEl = document.getElementById('searchBtn');
const volumeTextEl = document.getElementById('volumeText');
const spinnerEl = document.getElementById('spinner');

let apiKey = "AIzaSyDMa1068JLooNDcfLhLz1uloSl-Gv4AFD8";

function onDisplayResult(keyword, totalResults) {
    spinnerEl.classList.add('d-none');
    volumeTextEl.textContent = `${keyword} has been searched ${totalResults} times`;
}

function onSearch() {
    spinnerEl.classList.remove('d-none');
    const keyword = inputEl.value;
    console.log(keyword);
    console.log(apiKey);
    let options = {
        method: "GET"
    };
    let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${keyword}`;
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            const totalResults = data.pageInfo.totalResults;
            onDisplayResult(keyword, totalResults);
        });
}