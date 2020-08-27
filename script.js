//================================================== enable and disable about bar ==================================================
// about one
function aboutOneActive() {
	document.getElementById('aboutOne').style.background = 'var(--second)';
	document.getElementById('aboutOneImage').src = 'images/our-mission-white.svg';
	document.getElementById('aboutOneTitle').style.color = '#FFF';
	document.getElementById('aboutOneText').style.color = '#FFF';
}

function aboutOneDisable() {
	document.getElementById('aboutOne').style.background = '';
	document.getElementById('aboutOneImage').src = 'images/our-mission.svg';
	document.getElementById('aboutOneTitle').style.color = '';
	document.getElementById('aboutOneText').style.color = '';
}

// about two
function aboutTwoActive() {
	document.getElementById('aboutTwo').style.background = 'var(--second)';
	document.getElementById('aboutTwoImage').src = 'images/who-we-are-white.svg';
	document.getElementById('aboutTwoTitle').style.color = '#FFF';
	document.getElementById('aboutTwoText').style.color = '#FFF';
}

function aboutTwoDisable() {
	document.getElementById('aboutTwo').style.background = '';
	document.getElementById('aboutTwoImage').src = 'images/who-we-are.svg';
	document.getElementById('aboutTwoTitle').style.color = '';
	document.getElementById('aboutTwoText').style.color = '';
}

// about three
function aboutThreeActive() {
	document.getElementById('aboutThree').style.background = 'var(--second)';
	document.getElementById('aboutThreeImage').src = 'images/our-vision-white.svg';
	document.getElementById('aboutThreeTitle').style.color = '#FFF';
	document.getElementById('aboutThreeText').style.color = '#FFF';
}

function aboutThreeDisable() {
	document.getElementById('aboutThree').style.background = '';
	document.getElementById('aboutThreeImage').src = 'images/our-vision.svg';
	document.getElementById('aboutThreeTitle').style.color = '';
	document.getElementById('aboutThreeText').style.color = '';
}

//================================================== enable and disable faq  ==================================================
function faqOne() {
	const faqOne = document.querySelector('.faq-1');
	faqOne.setAttribute("class", "faq-1");
	document.querySelector('.faq-text').style.display = 'none';

	document.querySelector('.faq-1 img').src = 'images/arrow-disabled.svg';
}
