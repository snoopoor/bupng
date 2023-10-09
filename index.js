import { BuPNG } from './bupng';

const bp = new BuPNG(200, 200);

/*console.log(bp.getBase64());

for (let i = 0; i < 20; i++) {
	bp.putPixel(i, i, 0, 0, 255, 255);
}
console.log(bp.getBase64());*/

export default {
	port: 3034,
	fetch(request) {
		let s = `<html><body>`;

		for (let i = 0; i < 200; i++) {
			for (let j = 0; j < 200; j++) {
				bp.plotPixel(i, j, 255-i, i, i%50+190, i+50);
			}
			bp.plotPixel(i, i, 100, 0, 255, 255);
		}
		s += `<img src="${bp.getBase64()}">`;
		
		for (let i = 0; i < 10; i++) {
			bp.plotLine(i * 15, 30, 200 - i * 15, 170);
		}
		s += `<img src="mycoolpng.png">`;
		bp.saveFile('/path/to/your/web/site/public_html/mycoolpng.png');
		
		s += `</body></html>`;
		return new Response(s, {
			headers: {
				'Content-Type': 'text/html; charset=utf-8',
			},
		});
	},
}
