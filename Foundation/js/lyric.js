const artistInputEl = document.getElementById("artistInput");
const formEl = document.getElementById("myForm");
const searchHistoryEl = document.getElementById("searchHistory")
const dbKey = 523532
// event listener for the form. This is where the functions pulling the information from the form should run.
formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    addSearchHistory();
    findMySong(artistInputEl.value);
    console.log(artistInputEl.value);
});
// appends the child to show the recent search history in order for a person to reselect it. 
function addSearchHistory () {
    const addSearchHistoryBtn = document.createElement("button")
    // TODO add class attributes to created buttons
    addSearchHistoryBtn.classList.add("button")
    addSearchHistoryBtn.innerHTML = artistInputEl.value
    searchHistoryEl.appendChild(addSearchHistoryBtn)
}
// fetch pulling the top ten tracks to then plug into youtube
function findMySong(artistName) {
    let url = 'https://theaudiodb.com/api/v1/json/'+dbKey+'/searchtrack.php?s='+artistName+'&t=yellow'
    fetch(url, {
        method: "GET",
    }) 
    .then(function (response) {
    return response.json()
    })
    .then(function(data){
        console.log(data)
    displayBio(data)
    })
};

function displayBio (data) {
    const trackPath = data.track[0];
    const bioSpace = document.getElementById('searchResults');
    const trackInfo = trackPath.strDescriptionEN;
    const bioEl = document.createElement("p");
    bioEl.innerHTML = trackInfo;
    bioSpace.appendChild(bioEl)
}

