//================================================== Menu ==================================================
function menuToggle() {
    if(document.querySelector('nav').style.display == 'none') {
        document.querySelector('nav').style.display = 'block';
    } else {
        document.querySelector('nav').style.display = 'none';
    }
}
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
// faq one
function faqOne() {
	const faqOne = document.querySelector('.faq-1');
	if(document.querySelector('.faq-text').style.display == 'flex') {
		faqOne.setAttribute("class", "faq-1");
		document.querySelector('.faq-text').style.display = 'none';
		document.querySelector('.faq-1 img').src = 'images/arrow-disabled.svg';
	} else {
		faqOne.setAttribute("class", "faq-1 faq-selected");
		document.querySelector('.faq-text').style.display = 'flex';
		document.querySelector('.faq-1 img').src = 'images/arrow-enabled.svg';
	}
}
// faq two
function faqTwo() {
	const faqTwo = document.querySelector('.faq-2');
	if(document.querySelector('.faq-2 .faq-text').style.display == 'none') {
		faqTwo.setAttribute("class", "faq-2 faq-selected");
		document.querySelector('.faq-2 .faq-text').style.display = 'flex';
		document.querySelector('.faq-2 img').src = 'images/arrow-enabled.svg';
	} else {
		faqTwo.setAttribute("class", "faq-2");
		document.querySelector('.faq-2 .faq-text').style.display = 'none';
		document.querySelector('.faq-2 img').src = 'images/arrow-disabled.svg';
	}
}
// faq three
function faqThree() {
	const faqThree = document.querySelector('.faq-3');
	if(document.querySelector('.faq-3 .faq-text').style.display == 'none') {
		faqThree.setAttribute("class", "faq-3 faq-selected");
		document.querySelector('.faq-3 .faq-text').style.display = 'flex';
		document.querySelector('.faq-3 img').src = 'images/arrow-enabled.svg';
	} else {
		faqThree.setAttribute("class", "faq-3");
		document.querySelector('.faq-3 .faq-text').style.display = 'none';
		document.querySelector('.faq-3 img').src = 'images/arrow-disabled.svg';
	}
}
// faq four
function faqFour() {
	const faqFour = document.querySelector('.faq-4');
	if(document.querySelector('.faq-4 .faq-text').style.display == 'none') {
		faqFour.setAttribute("class", "faq-4 faq-selected");
		document.querySelector('.faq-4 .faq-text').style.display = 'flex';
		document.querySelector('.faq-4 img').src = 'images/arrow-enabled.svg';
	} else {
		faqFour.setAttribute("class", "faq-4");
		document.querySelector('.faq-4 .faq-text').style.display = 'none';
		document.querySelector('.faq-4 img').src = 'images/arrow-disabled.svg';
	}
}
// faq five
function faqFive() {
	const faqFive = document.querySelector('.faq-5');
	if(document.querySelector('.faq-5 .faq-text').style.display == 'none') {
		faqFive.setAttribute("class", "faq-5 faq-selected");
		document.querySelector('.faq-5 .faq-text').style.display = 'flex';
		document.querySelector('.faq-5 img').src = 'images/arrow-enabled.svg';
	} else {
		faqFive.setAttribute("class", "faq-5");
		document.querySelector('.faq-5 .faq-text').style.display = 'none';
		document.querySelector('.faq-5 img').src = 'images/arrow-disabled.svg';
	}
}
// faq six
function faqSix() {
	const faqSix = document.querySelector('.faq-6');
	if(document.querySelector('.faq-6 .faq-text').style.display == 'none') {
		faqSix.setAttribute("class", "faq-6 faq-selected");
		document.querySelector('.faq-6 .faq-text').style.display = 'flex';
		document.querySelector('.faq-6 img').src = 'images/arrow-enabled.svg';
	} else {
		faqSix.setAttribute("class", "faq-6");
		document.querySelector('.faq-6 .faq-text').style.display = 'none';
		document.querySelector('.faq-6 img').src = 'images/arrow-disabled.svg';
	}
}