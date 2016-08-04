(function() {

    function clearAttrs(elem) {
        while(elem.attributes.length > 0) {
            elem.removeAttribute(elem.attributes[0].name);
        }
    }

    function clearChildren(elem) {
        while(elem.firstChild) { 
            elem.removeChild(elem.firstChild) 
        }
    }

    // panic implementation
    window.panic = function(site, title) {
        // wipe the whole DOM first in case of slow internet connection
        var html = document.getElementsByTagName('html')[0];
        clearAttrs(html);

        var bodies = document.getElementsByTagName('body');
        for(var i = 0; i < bodies.length; ++i) {
            var b = bodies[i];
            clearChildren(b);
            clearAttrs(b);
        }

        var heads = document.getElementsByTagName('head');
        for(var i = 0; i < heads.length; ++i) {
            var h = heads[i];
            clearChildren(h);
            clearAttrs(h);
        }

        if(heads.length > 0) {
            var t = document.createElement('title');
            t.innerText = title;
            heads[0].appendChild(t);
        }

        // then redirect to a non-sensitive site
        window.location.href = site;

        // remove as much info from URL as possible
        if(window.history) {
            try {
                window.history.replaceState({}, '', '/');
            } catch(e) {
                
            }
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
