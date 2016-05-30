# Panic Button

## Usage

Simply include a link to the `panic.min.js` script anywhere in your code.

```html
<script src="https://cdn.rawgit.com/StudioThick/panic-button/master/panic.min.js"></script>
```

To manually define where the panic button will attach, simply create an element
with `id="panic"`. Otherwise, the panic button will attach itself as the first
child of `<body>`.

## Styling

Include `panic.css` or manually define styling for the following
heirarchy:

```html
<div class="panic_container" id="panic">
    <span class="panic_text">{ panic_config.text }</span>
    <a class="panic_link">{ panic_config.link_text }</a>
    <a class="panic_button">{ panic_config.button_text }</a>
</div>
```

## Configuration 

Define an object in global scope called `panic_config`, and override any
or all of the following values. This object must be defined *before* the
inclusion of `panic_button.js`.

```js
panic_config = {
    // the site that the panic button will redirect to when triggered
    escape_site: 'http://www.google.com/',

    // the text in the banner
    text: 'Protect yourself online.',

    // the link in the banner -- text and target
    link_site: 'https://www.domesticshelters.org/safe-surfing',
    link_text: 'Learn how to hide your browsing history.',

    // the text on the panic button itself (&times; used for 'x' button)
    button_text: '&times; Quick exit (ESC)',

    // define which key will trigger the panic button (or null to disable)
    // (don't forget to alter button_text if you change this)
    panic_hotkey: 27    // escape
};
```

