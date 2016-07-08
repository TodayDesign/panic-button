(function() {

    // panic implementation
    window.panic = function(site, title) {
        // wipe the whole DOM first in case of slow internet connection
        var html = document.getElementsByTagName('html')[0];
        while(html.firstChild) { html.removeChild(html.firstChild); }

        // remove html style attribute -- clearing the DOM will not reset
        // a background color on this element, so it needs to be done in a
        // separate step
        html.removeAttribute('style');

        // replace the title
        html.innerHTML = '<head><title>' + title + '</title></head>';

        // then redirect to a non-sensitive site
        window.location.href = site;

        // remove as much info from URL as possible
        if(window.history) {
            window.history.replaceState({}, '', '/');
        }

        // disable default event handling
        return false;
    };

    function initPanic() {
        
        var button = document.getElementById('panic-button');
        var escape_site = button.getAttribute('href');
        var escape_site_title = button.getAttribute('title') || 'Google';
        var hotkey = 27;

        // add click handler
        button.onclick = function(e) {
            return panic(escape_site, escape_site_title);
        };

        // add hotkey trigger
        document.addEventListener('keydown', function(e) {
            if(e.keyCode === hotkey) {
                panic(escape_site, escape_site_title);

                if(e) {
                    // stop escape from cancelling redirect
                    e.preventDefault();

                    // early IEs don't have preventDefault
                    e.returnValue = false;  
                }

                return false;
            }
        });

    }

    initPanic();

})();
