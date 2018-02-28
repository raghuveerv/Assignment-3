 // main document ready function to check if dom is loaded fully or not
var appid1,appid;
$( document ).ready(function() {

    function getFacebookInfo(){
        appid = document.getElementById("userInput").value;
        console.log(appid);
        if(appid === '')
        {
            alert("This field cannot be left blank");
        }
        else{
        $.ajax('https://graph.facebook.com/me?fields=name,birthday,email,hometown,gender&access_token='+appid,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myName").text(response.name);
                    $("#myBirthday").text(response.birthday);
                    $("#myGender").text(response.gender);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                },
                error: function(xhr, status, error) { alert(xhr.status+'  '+'error'); }
               }

        );
      }
    }// end get facebook info

$("#facebookBtn").on('click',getFacebookInfo)
});
