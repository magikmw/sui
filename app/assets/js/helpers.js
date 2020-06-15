Handlebars.registerHelper('cleanurl', function(url) {
    var currentpath = window.location.host + window.location.pathname;
    var cleanurl = url.replace(/^\./, currentpath.substring(0, currentpath.lastIndexOf('/'))).replace(/.*:\/\//,'').split(/[?#]/);
    return new Handlebars.SafeString(cleanurl)
});

Handlebars.registerHelper('addprotocol', function(url) {
    if (!/^\./.test(url)) {
        if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
            url = "https://" + url;
        }
    }
    return new Handlebars.SafeString(url)
});

