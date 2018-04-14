// **************************************
// *                                    *
// *  @Bunlong - bunlong.van@gmail.com  *
// *  lazy-load-images.js               *
// *  v1.0.0                            *
// *                                    *
// **************************************

if (window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName) window.addEventListener('load', function() {

  var lItem = document.getElementsByClassName('lazy-load replace'), 
      pCount, 
      timer;

  // scroll and resize events
  window.addEventListener('scroll', scroller, false);
  window.addEventListener('resize', scroller, false);

  // dom mutation observer
  if (MutationObserver) {
    var observer = new MutationObserver(function() {
      if (lItem.length !== pCount) view();
    });
    observer.observe(document.body, { subtree: true, childList: true, attributes: true, characterData: true });
  }

  // initial check
  view();

  // throttled scroll/resize
  function scroller() {
    timer = timer || setTimeout(function() {
      timer = null;
      view();
    }, 300);
  }

  // is image in view?
  function view() {
    if (lItem.length) requestAnimationFrame(function() {
      var wT = window.pageYOffset, 
          wB = wT + window.innerHeight, 
          cRect, pT, pB, p = 0;
      while (p < lItem.length) {
        cRect = lItem[p].getBoundingClientRect();
        pT = wT + cRect.top;
        pB = pT + cRect.height;
        if (wT < pB && wB > pT) {
          loadFullImage(lItem[p]);
          lItem[p].classList.remove('replace');
        }
        else p++;
      }
      pCount = lItem.length;
    });
  }

  // replace with full image
  function loadFullImage(item) {
    var href = item && (item.getAttribute('data-href') || item.href);
    if (!href) return;
    // load image
    var img = new Image();
    if (item.dataset) {
      img.srcset = item.dataset.srcset || '';
      img.sizes = item.dataset.sizes || '';
    }
    img.src = href;
    img.className = 'reveal';
    if (img.complete) addImg();
    else img.onload = addImg;
    // replace image
    function addImg() {
      requestAnimationFrame(function() {
        // disable click
        if (href === item.href) {
          item.style.cursor = 'default';
          item.addEventListener('click', function(e) { e.preventDefault(); }, false);
        }
        // preview image
        var pImg = item.querySelector && item.querySelector('img.preview');
        // add full image
        item.insertBefore(img, pImg && pImg.nextSibling).addEventListener('animationend', function() {
          // remove preview image
          if (pImg) {
            img.alt = pImg.alt || '';
            item.removeChild(pImg);
          }
          img.classList.remove('reveal');
        });
      });
    }
  }
}, false);
