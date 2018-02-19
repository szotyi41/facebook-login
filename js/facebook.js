
function statusChangeCallback(response) {
  
  if (response.status === 'connected') {

    FB.api('/me', function(response) {

      //Logged in user
      document.getElementById('status').innerHTML = 'Welcome '+response.name;
      document.getElementById('profile').src = 'https://graph.facebook.com/'+response.id+'/picture?type=large';
    
    });

  } else {

  	//Logged off user
    document.getElementById('status').innerHTML = '';
    document.getElementById('profile').src = '';

  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '', //Your APP ID integer
    cookie     : true, 
    xfbml      : true, 
    version    : 'v2.8'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));