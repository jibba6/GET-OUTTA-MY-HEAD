const artistNameEl = document.getElementById("artistNameInput");
const formEl = document.getElementById("myForm");
const searchHistoryEl = document.getElementById("searchHistory")
const dbKey = 523532

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    // addSearchHistory();
    findMySong(artistNameEl.value)
    console.log(artistNameEl.value.trim());
});

// function addSearchHistory () {
//     const addSearchHistoryBtn = document.createElement("button")
//     TODO add class attributes to created buttons
//     addSearchHistoryBtn.classList.add("")
//     addSearchHistoryBtn.innerHTML = searchHistoryEl.value
// }

function findMySong(artistName) {
    let url = "https://theaudiodb.com/api/v1/json/"+dbKey+"/searchtrack.php?s="+artistName+""
    fetch(url, {
        method: "GET",
    }) 
    .then(function (response) {
    return response
    })
    .then(function(data){
    console.log(data)
    })
};

