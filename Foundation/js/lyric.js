const artistInputEl = document.getElementById("artistInput");
const trackInputEl = document.getElementById("trackInput");
const formEl = document.getElementById("myForm");
const searchHistoryEl = document.getElementById("searchHistory")
const dbKey = 523532
// event listener for the form. This is where the functions pulling the information from the form should run.
formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    addSearchHistory();
    findMySong(artistInputEl.value, trackInputEl.value);
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
// TODO creat perameter for trackName in the fetch to be able to pass the actual track name from the search. 
function findMySong(artistName, trackName) {
    let url = 'https://theaudiodb.com/api/v1/json/'+dbKey+'/searchtrack.php?s='+artistName+'&t='+trackName+''
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
//function telling what specific information to pull from the api and where to put it on the page. 
function displayBio (data) {
    const trackPath = data.track[0];
    const bioSpace = document.getElementById('searchResults');
    const trackInfo = trackPath.strDescriptionEN;
    const bioEl = document.createElement("p");
    bioEl.innerHTML = trackInfo;
    bioSpace.appendChild(bioEl)
}

