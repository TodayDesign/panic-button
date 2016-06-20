
(function() {

    //---------------------------------------------------------
    // Object.assign polyfill
    // from https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

    if (typeof Object.assign != 'function') {
        Object.assign = function(target) {
            'use strict';
            if (target == null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            target = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source != null) {
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
            }
            return target;
        };
    }
    //--------------------------------------------------------- 

    // get/update the config object
    if(typeof panic_config === 'undefined') {
        panic_config = {};
    }

    var config = Object.assign({
        escape_site: 'http://www.google.com/',
        text: 'Protect yourself online.',
        link_site: 'https://www.domesticshelters.org/safe-surfing',
        link_text: 'Learn how to hide your browsing history.',
        button_text: '&times; Quick exit (ESC)',
        hotkey: 27
    }, panic_config);

    var redirect = function() {
        window.location.href = config.escape_site;
    };

    // panic implementation
    window.panic = function() {
        // wipe the whole DOM first in case of slow internet connection
        var html = document.getElementsByTagName('html')[0];
        while(html.firstChild) { html.removeChild(html.firstChild); }

        // then redirect to a non-sensitive site
        redirect();

        // Redirect again after a tiny delay -- on Firefox and IE, the
        // escape hotkey will also be detected as a "cancel" command and
        // will terminate the redirect.
        // Holding escape will call panic again, so holding down escape will
        // just continually cancel until it's released, at which point it'll
        // successfully redirect.
        setTimeout(redirect, 20);

        // disable default event handling
        return false;
    };

    // add hotkey trigger
    if(config.hotkey) {
        document.addEventListener('keydown', function(e) {
            if(e.keyCode === config.hotkey) {
                panic();
            }
        });
    }

    function initPanic() {
        // get root element
        var root = document.getElementById('panic');
        if(!root) {
            root = document.createElement('div');
            root.setAttribute('class', 'panic_container');
            root.setAttribute('id', 'panic');

            var body = document.body;
            body.insertBefore(root, body.firstChild);
        }

        // add "Protect yourself online" text
        if(config.text) { 
            var text = document.createElement('span');
            text.innerHTML = config.text;
            text.setAttribute('class', 'panic_text');
            root.appendChild(text);
            root.appendChild(document.createTextNode(' '));
        }

        // add link to more information
        if(config.link_site) {
            var link = document.createElement('a');
            link.innerHTML = config.link_text;
            link.setAttribute('href', config.link_site);
            link.setAttribute('class', 'panic_link');
            root.appendChild(link);
            root.appendChild(document.createTextNode(' '));
        }

        // add actual panic button
        var button = document.createElement('a');
        button.setAttribute('href', '#');
        button.setAttribute('class', 'panic_button');
        button.innerHTML = config.button_text;
        button.onclick = panic;
        root.appendChild(button);

    }

    if(document.readyState !== 'loading') {
        // script was included asynchronously, call init immediately
        initPanic();
    } else {
        document.addEventListener('DOMContentLoaded', initPanic);
    }

})();
