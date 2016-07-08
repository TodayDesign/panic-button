# Panic Button

## About

`panic-button` is a module for adding a quick exit button and banner to a site
that contains sensitive content, allowing users to extremely quickly hide what
they were looking at (for example, information related to domestic abuse)
even in the case of a slow or disconnected internet connection.

If you’re creating a site that has vulnerable people as any proportion of its 
target audience, consider incorporating a quick exit — all it takes is pasting 
the code below at the top of the page.

## Usage

Simply paste the following snippet after the `<body>` tag in your html.

```html
<!-- begin panic button -->
<div id="panic-container" class="panic-button">
    <span class="panic-button__text">Protect yourself online.</span>
    <a class="panic-button__link"
        href="https://www.domesticshelters.org/safe-surfing"
        >
        Learn how to hide your browsing history.
    </a>
    <a id="panic-button" class="panic-button__button"
        href="https://www.google.com" 
        >
        <span class="panic-button__icon">&times;</span>
        Quick exit (ESC)
    </a>
</div>
<link rel="stylesheet" property="stylesheet" href="https://cdn.rawgit.com/studiothick/panic-button/v1.0.4/dist/panic.css" />
<script async src="https://cdn.rawgit.com/studiothick/panic-button/v1.0.4/dist/panic.min.js"></script>
<!-- end panic button -->
```

