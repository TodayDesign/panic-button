# Panic Button

## About

![Screenshot of Women Talk Money website with panic button banner at the top](https://cdn-images-1.medium.com/max/800/1*bj3htsLntKoH-orjXG1ZNw.jpeg)

`panic-button` is a module for adding a quick exit button and banner to a site
that contains sensitive content (for example, information related to domestic 
abuse), allowing users to extremely quickly hide what they were looking at 
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
        title="Google"
        href="https://www.google.com" 
        >
        <span class="panic-button__icon">&times;</span>
        Quick exit (ESC)
    </a>
</div>
<link rel="stylesheet" property="stylesheet" href="https://cdn.rawgit.com/studiothick/panic-button/v1.2.0/dist/panic.css" />
<script async src="https://cdn.rawgit.com/studiothick/panic-button/v1.2.0/dist/panic.min.js"></script>
<!-- end panic button -->
```

If you'd like to style the banner yourself, just omit the stylesheet `link` tag
and style the `.panic-button`, `.panic-button__text` and `.panic-button__button`
elements.

The links can be changed by just updating the `href` attributes, and the actual
text is also editable without compromising the behaviour. As long as all of the
`id` attributes are intact, everything should work fine.
