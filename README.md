jquery.twitterlinks.js
==================

This jQuery plugin turns URLs, Twitter @users &amp; Twitter #hashtags into working urls, within a given container (selector).

This plugin is based on **jquery.tweetParser**, but has been modified to be a bit more accurate, multi-purpose and configureable.

**Major Differences:**

- More accurate regular expressions
- Operates on HTML content
- You can use larger, more global containers
- Configure which items you wish to parse

## PARAMETERS

| Parameters | Type | default | description |
| ------------- | ----------- | ----------- | ----------- |
| parseUrls  | Boolean | true | Whether or not to parse URLs |
| parseUsers  | Boolean | true | Whether or not to parse @users |
| parseHashtags  | Boolean | true | Whether or not to parse #hashtags |
| urlClass  | String | tweet_link | css Class used for url in the tweet |
| userClass | String | tweet_user | css Class used for @user profil url in the tweet |
| hashtagClass | String | hashtag | css Class used for hashtags url in the tweet |
| target | HTML attribute for anchor tags | _blank | target used for all <a> generated |
| searchWithHashtags | Boolean | true | generate hashtag link, if true : "twitter.com/hashtag/", if false : "twitter.com/search?q=" |

## Installation

##### Download

- [Download the latest stable release](https://github.com/mcgraths/jquery.twitterlinks/releases)
- [Download the lastest build](https://github.com/mcgraths/jquery.twitterlinks/archive/master.zip)

##### Using Bower

If you want to use bower just type:

```
bower install jquery.twitterlinks
```

##### Add jquery and jquery.twitterlinks.min.js to your HTML document

```html
    <script src="path/to/jquery.min.js"></script>
    <script src="path/to/jquery.twitterlinks.min.js"></script>
```

## Usage

##### HTML

```html
    <div class="post-body">
        <ul>
            <li>#omg</li>
            <li>@lol</li>
            <li>http://wtf.com</li>
        </ul>
    </div>
 ```
 
 
##### Javascript

```javascript 
    $(document).ready(function() {
         //basic usage
        $(".post-body").twitterlinks();
        
        //With parameters, defaults
        $(".post-body").twitterlinks({
            parseUrls: true,
            parseUsers: true,
            parseHashtags: true,
            urlClass : "tweet_link",
            userClass : "tweet_user",
            hashtagClass : "hashtag",
            target : "_blank",
            searchWithHashtags : true
        });
    });
```

##### Results

```html
    <div class="post-body">
        <ul>
            <li><a target="_blank" href="https://twitter.com/hashtag/omg" class="hashtag">#omg</a></li>
            <li><a target="_blank" href="http://twitter.com/lol" class="tweet_user">@lol</a></li>
            <li><a target="_blank" href="http://wtf.com" class="tweet_link">http://wtf.com</a></li>
        </ul>
    </div>
 ```

 ## Todo

 - [ ] Cleaner Regex for URLs
 - [ ] Cleaner Regex for Hashtags
 - [x] Submit to Bower
 - [ ] Submit to jQuery
 - [ ] Better Demo
 - [ ] GitHub pages
 - [ ] Grunt improvements (jshint, watch, banners, versioning)
