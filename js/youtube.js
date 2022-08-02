$(document).ready(function(){

    const API_KEY = "AIzaSyB-KTLmnWVFlpiHB2CIT7PCG-1jmAZo1FE";
    var video = '';

    $("form").submit(function (event){
        event.preventDefault()
        var search = $("#artistInput").val()+" "+$("#trackInput").val()
        videoSearch(API_KEY,search,1)
    })
    function videoSearch(key, search, results){
        $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+results+"&q="+search,function(data){
            console.log(data)
                video = `
                <iframe width="600" height="400" src ="http://www.youtube.com/embed/${data.items[0].id.videoId}" frameborder="0" allowfullscreen></iframe> 
                `
                $("#searchResults").html(video)
        })
    }
});
