# lazy-load-images.js

![lazy-load-images](https://github.com/codefacebook/lazy-load-images.js/blob/master/images/lazy-load-images.gif)

lazy-load-images.js is a javascript library that defers loading of non-critical resources at page load time. Instead, these non-critical resources are loaded at the moment of need. Where images are concerned here.

## Features

* fast loading
* high performance
* supports all images type
* images responsive
* supports all modern browsers (IE10+)

## Installation

```
<link rel="stylesheet" href="css/lazy-load-images.min.css">
<script src="js/lazy-load-images.min.js"></script>
```

## Usage

### Basic

```
<a href="https://github.com/codefacebook/lazy-load-images.js/blob/master/images/cambodia-angkor-elephant.jpg" class="lazy-load replace">
  <img src="https://github.com/codefacebook/lazy-load-images.js/blob/master/images/cambodia-angkor-elephant.jpg" class="preview" alt="Cambodia Angkorwat" />
</a>
```

### Retain the link

```
<a href="http://geekhmer.github.io" data-href="https://github.com/codefacebook/lazy-load-images.js/blob/master/images/cambodia-angkor-elephant.jpg" class="lazy-load replace">
  <img src="https://github.com/codefacebook/lazy-load-images.js/blob/master/images/cambodia-angkor-elephant.jpg" class="preview" alt="Cambodia Angkorwat" />
</a>
```

### Responsive

```
<a href="https://github.com/codefacebook/lazy-load-images.js/blob/master/images/cambodia-angkor-elephant.jpg" data-srcset="https://github.com/codefacebook/lazy-load-images.js/blob/master/images/cambodia-angkor-elephant.jpg 400w, https://github.com/codefacebook/lazy-load-images.js/blob/master/images/cambodia-angkor-elephant.jpg 800w, https://github.com/codefacebook/lazy-load-images.js/blob/master/images/cambodia-angkor-elephant.jpg 1600w" class="lazy-load replace">
  <img src="https://github.com/codefacebook/lazy-load-images.js/blob/master/images/cambodia-angkor-elephant.jpg" class="preview" alt="Cambodia Angkorwat" />
</a>
```

## Source

Click [here](https://github.com/codefacebook/lazy-load-images.js/blob/master/lazy-load-images.js.zip "Source") to download source.
