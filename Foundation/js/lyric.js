const artistInputEl = document.getElementById("artistInput");
const formEl = document.getElementById("myForm");
const searchHistoryEl = document.getElementById("searchHistory")
const dbKey = 523532

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    // addSearchHistory();
    findMySong(artistInputEl.value);
    console.log(artistInputEl.value);
});

// function addSearchHistory () {
//     const addSearchHistoryBtn = document.createElement("button")
//     TODO add class attributes to created buttons
//     addSearchHistoryBtn.classList.add("")
//     addSearchHistoryBtn.innerHTML = searchHistoryEl.value
// }

function findMySong(artistName) {
    let url = "theaudiodb.com/api/v1/json/2/search.php?s="+artistName+""
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

