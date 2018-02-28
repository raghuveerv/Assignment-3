var appid1,appid;
$( document ).ready(function() {
   function getFeed(){
    if(appid === '')
        {
            alert("This field cannot be left blank");
        }
        $.ajax('https://graph.facebook.com/me?fields=id,posts{created_time,type,full_picture,story,story_tags,message,source,likes,comments,with_tags,link}&access_token='+appid,{
            success:function(response){
                $.each(response.posts.data, function( index, value ) {
                    if(value.full_picture == ''){
                        $("#appendhere").append(value.story);
                        $("#appendhere").append("</br>");
                        $("#appendhere").append(value.link);
                        $("#appendhere").append("</br>");
                        $("#appendhere").append("id"+" "+ value.id);
                        $("#appendhere").append("</br>");
                        $("#appendhere").append(value.created_time);
                        $("#appendhere").append("<h1> _________________________________________</h1>");
                    }
                    else{
                        $("#appendhere").append("</br>");
                        $("#appendhere").append("<div id='new'> <img src='' id='userPicture' style='width: 80%; height: 50%; border-radius: 50%; margin: 5px;' align='left'> </div>");
                        document.getElementById("userPicture").setAttribute("src",value.full_picture);
                        $("#appendhere").append("</br>");
                        $("#appendhere").append("</br>");
                        $("#appendhere").append(value.story);
                        $("#appendhere").append("</br>");
                        $("#appendhere").append(value.link);
                        $("#appendhere").append("</br>");
                        $("#appendhere").append("id"+" "+ value.id);
                        $("#appendhere").append("</br>");
                        $("#appendhere").append(value.created_time);
                        $("#appendhere").append("<h1> _________________________________________</h1>");
                  }
                });
                },
                error: function(xhr, status, error) { alert(xhr.status+'  '+'error'); }
        });
    }// end get facebook info

$("#feedBtn").on('click',getFeed)
});