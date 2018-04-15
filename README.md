# lazy-load-images.js

![lazy-load-images](https://github.com/codefacebook/lazy-load-images.js/blob/master/images/lazy-load-images.png)

lazy-load-images.js is a javascript library that defers loading of non-critical resources at page load time. Instead, these non-critical resources are loaded at the moment of need. Where images are concerned here.

We'd love to have your helping hand on contributions to lazy-load-images.js by forking and sending a pull request!

## Features

* Fast loading
* High performance
* Supports all images type
* Responsive images
* Supports all modern browsers Chrome, Firefox, Safari, (IE10+), ... etc.

## Demo

Let take a look the live [lazy-load-images.js demo](https://lazyloadimages.github.io/ "lazy-load-images.js").

## Installation

The page must load the CSS and JavaScript.

```
<link rel="stylesheet" href="css/lazy-load-images.min.css">
<script src="js/lazy-load-images.min.js"></script>
```

## Usage

lazy-load-images.js is a link to the full-size graphic around the preview.

Note: put `lazy-load` and `replace` classes on the link. And the `preview` class on the image.

```
<a href="full-images-url.png" class="lazy replace">
  <img src="tiny-images-url.png" class="preview" alt="image" />
</a>
```

Preview image can be very small (20px) in width and saved with high JPEG.

Large image can be any size but should match the preview image (20x15 can be scaled to 200x150, 400x300 or 1600x1200).

### Basic

```
<a href="full-images-url.png" 
   class="lazy-load replace">
  <img src="tiny-images-url.png" 
       class="preview" 
       alt="Cambodia Angkorwat" />
</a>
```

### Retain the link

If you require a image to remain a link, use `href` as address then add a `data-href` attribute with the large image URL.

```
<a href="http://geekhmer.github.io" 
   data-href="full-images-url.png" 
   class="lazy-load replace">
  <img src="tiny-images-url.png" 
       class="preview" 
       alt="Cambodia Angkorwat" />
</a>
```

### Responsive

Responsive images can be defined in the container link/element using the `data-srcset` and `data-sizes` attributes which map to the standard srcset and sizes attributes.

```
<a href="small-images-url.png" 
   data-srcset="small-images-url.png 400w,  large-images-url.png 800w, extra-large-images-url.png 1600w" 
   data-sizes="100vw"
   class="lazy-load replace">
  <img src="" 
       class="preview" 
       alt="Cambodia Angkorwat" />
</a>
```

## Source

Click [here](https://github.com/codefacebook/lazy-load-images.js/blob/master/lazy-load-images.js.zip "Source") to download source.

## Contributing

We'd love to have your helping hand on contributions to lazy-load-images.js by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

## License

MIT License