$(document).ready(function(){
    $.get("https://cosplay-96d31-default-rtdb.firebaseio.com/.json", function(data){
        $.each(data, function (index,item){
            console.log(item)
        })
    })
})