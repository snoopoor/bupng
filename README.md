# BuPNG

BuPNG is a javascript library used to create *.png files in [Bun](https://github.com/oven-sh/bun). It is easy to use, zero-dependency, portable, has no legacy nor deprecated code.
The library is heavily based on the [qr-image](https://github.com/alexeyten/qr-image) project (which is unfortunately obsolete for several years), the most understandable implementation of png encoding I could find online. The project [pnglib-es6](https://github.com/IjzerenHein/pnglib-es6) was also helpful by "reverse engineering" of png image data from IDAT chunk.
The [PNG specification](http://www.libpng.org/pub/png/spec/1.2/PNG-Contents.html) describes the file format in details.

# Usage

```javascript
import { BuPNG } from './bupng';
const bp = new BuPNG(200, 200);

bp.plotPixel(10, 10[, 255, 0, 0, 255]); //x, y, R, G, B, a
bp.plotLine(10, 10, 100, 20[, 255, 0, 0, 255]); //x0, y0, x1, y1, R, G, B, a

console.log(bp.getBase64());
//data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAB...
//``<img src="${bp.getBase64()}">``

bp.saveFile('/path/to/your/web/site/public_html/mycoolpng.png');
//'<img src="mycoolpng.png">'
```
