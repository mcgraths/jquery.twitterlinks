/*!
 * jquery.twitterlinks v0.1.0
 * Turn URLS, twitter @users & twitter #hashtags into urls
 * MIT License
 * by Sean McGrath
 * http://seanmcgrath.me
 */
(function($) {
    "use strict";

    $.fn.twitterlinks = function(options) {

        var defauts = {
            "parseUrls": true,
            "parseUsers": true,
            "parseHashtags": true,
            "urlClass": "tweet_link",
            "userClass": "tweet_user",
            "hashtagClass": "hashtag",
            "target": "_blank",
            "searchWithHashtags": true
        };

        var params = $.extend(defauts, options);

        return this.each(function() {
            //contain the content
            var content = $(this).html();

            //Hashtag Search link
            var searchlink;

            if (params.searchWithHashtags) {
                //this is the search with hashtag
                searchlink = "https://twitter.com/hashtag/";
            } else {
                //this is a more global search including hashtags and the word itself
                searchlink = "https://twitter.com/search?q="
            }

            //regex
            var regexUrl = /([^\"\'])(https?|ftps?)(\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3})(\/\S*)?/g; //regex for urls
            var regexUser = /\B@([a-zA-Z0-9_-]+)/g; //regex for @users
            var regexHashtag = /([^\/]\B)(#[a-zA-Z0-9_-]+)/g; //regex for #hashtags

            //turn URLS in the content into... working urls
            if (params.parseUrls)
                content = content.replace(regexUrl, function(fullmatch, prefix, protocol, url, querystring) {
                    var fullurl = protocol + url + (querystring || "");
                    var link = '<a target="' + params.target + '" href="' + fullurl + '" class="' + params.urlClass + '">' + fullurl + '</a>';
                    return prefix + fullurl.replace(fullurl, link);
                });

            //turn @users in the content into... working urls
            if (params.parseUsers)
                content = content.replace(regexUser, function(user) {

                    var userOnly = user.replace('@', '');
                    var link = '<a target="' + params.target + '" href="http://twitter.com/' + userOnly + '" class="' + params.userClass + '">' + user + '</a>'
                    return user.replace(user, link);

                    //turn #hashtags in the content into... working urls
                });

            if (params.parseHashtags)
                content = content.replace(regexHashtag, function(fullmatch, prefix, hashtag) {
                    var hashtagOnly = hashtag.replace('#', '');
                    var link = '<a target="' + params.target + '" href="' + searchlink + hashtagOnly + '" class="' + params.hashtagClass + '">' + hashtag + '</a>';
                    return prefix + hashtag.replace(hashtag, link);
                });

            //then, it inject the last var into the element containing the content
            $(this).html(content);

        });
    };
})(jQuery);