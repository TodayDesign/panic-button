(function() {

    // panic implementation
    window.panic = function(site, e) {
        // wipe the whole DOM first in case of slow internet connection
        var body = document.getElementsByTagName('body')[0];
        while(body.firstChild) { body.removeChild(body.firstChild); }

        // remove as much info from URL as possible
        if(window.history) {
            window.history.replaceState({}, '', '/');
        }

        // then redirect to a non-sensitive site
        window.location.href = site;

        // disable default event handling
        return false;
    };

    function initPanic() {
        
        var button = document.getElementById('panic-button');
        var escape_site = button.getAttribute('href');

        // add click handler
        button.onclick = function(e) {
            return panic(escape_site);
        };

        // add hotkey trigger
        document.addEventListener('keydown', function(e) {
            if(e.keyCode === config.hotkey) {
                panic(escape_site);

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
