const $ = (sel) => document.querySelector(sel);



let bannerStatus = 1;
let bannerTimmer = 4000;


let starBannerLoop = setInterval(() => {
	bannerLoop()
}, bannerTimmer);


const bannerLoop = () => {
	console.log(bannerStatus);
	let containerWidth = $('.main-banner').offsetWidth;
	console.log(containerWidth);

	if (bannerStatus === 1) {
		$('#imgban2').style.opacity = '0';
		setTimeout(() => {
			$('#imgban1').style.right = '0px';
			$('#imgban1').style.zIndex = '1001';
			$('#imgban2').style.right = '-'+containerWidth+'px';
			$('#imgban2').style.zIndex = '1002';
			$('#imgban3').style.right = containerWidth+'px';
			$('#imgban3').style.zIndex = '1000';
		}, 500);
		setTimeout(() => {
			$('#imgban2').style.opacity = '1';
			bannerStatus = 2;
		}, 1000);

	}
	if (bannerStatus === 2) {
		$('#imgban3').style.opacity = '0';
		setTimeout(() => {
			$('#imgban2').style.right = '0px';
			$('#imgban2').style.zIndex = '1001';
			$('#imgban3').style.right = '-'+containerWidth+'px';
			$('#imgban3').style.zIndex = '1002';
			$('#imgban1').style.right = containerWidth+'px';
			$('#imgban1').style.zIndex = '1000';
		}, 500);
		setTimeout(() => {
			$('#imgban3').style.opacity = '1';
			bannerStatus = 3;
		}, 1000);

	}
	if (bannerStatus === 3) {
		$('#imgban1').style.opacity = '0';
		setTimeout(() => {
			$('#imgban3').style.right = '0px';
			$('#imgban3').style.zIndex = '1001';
			$('#imgban1').style.right = '-'+containerWidth+'px';
			$('#imgban1').style.zIndex = '1002';
			$('#imgban2').style.right = containerWidth+'px';
			$('#imgban2').style.zIndex = '1000';
		}, 500);
		setTimeout(() => {
			$('#imgban1').style.opacity = '1';
			bannerStatus = 1;
		}, 1000);

	}
}

window.addEventListener('load', function () {
	console.log('All assets are loaded')
	bannerLoop()
})
