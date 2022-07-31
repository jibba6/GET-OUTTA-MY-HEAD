$(document).ready(function(){

    var API_KEY = "AIzaSyBlaVTroe_yXyz4jzAMh-u5AZqyBKlLL68";

    var video = '';

    $("form").submit(function (event){
        event.preventDefault()

        var search = $("#inputField").val()

        videoSearch(API_KEY,search,1)
    })

    function videoSearch(key, search, results){

        $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+results+"&q="+search,function(data){
            console.log(data)

            data.items.forEach(item => {

                video = `

                <iframe width="420" height="315" src ="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                
                `
                $("#searchResults").append(video)
            });
        })
    }
    

})