$(document).ready(function(){ 
    
   //$(".tweets").twitterlinks();
    
    //you can also custom css classes and target like this
    
    $(".tweets").twitterlinks({
    	parseUrls: true,
        parseUsers: true,
        parseHashtags: true,
        urlClass : "tweet_link", //this is default
        userClass : "tweet_user", //this is default
        hashtagClass : "hashtag", //this is default
        target : "_blank", //this is default
        searchWithHashtags: false
    });

    $(".post-body").twitterlinks();
    
    
});
