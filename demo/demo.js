$(document).ready(function(){ 
    
   //$(".tweets").twitterlink();
    
    //you can also custom css classes and target like this
    
    $(".tweets").twitterlink({
    	"parseUrls": true,
        "parseUsers": true,
        "parseHashtags": true,
        urlClass : "tweet_link", //this is default
        userClass : "tweet_user", //this is default
        hashtagClass : "hashtag", //this is default
        target : "_blank", //this is default
        searchWithHashtags: false
    });
    
    
});
