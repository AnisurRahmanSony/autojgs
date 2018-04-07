var index = 1;

function plusIndex(n) {
	index = index + n;
	showImage(index);
}

function currentSlide(n) {
	showImage(index = n);
}

showImage(1);

function showImage(n) {
	var i;
	var slide = document.getElementsByClassName('slide-item');

	//alert(slide.length);
	if(n > slide.length) { index = 1};
	if(n < 1) { index = slide.length};
	for(i = 0; i < slide.length; i++) {
		slide[i].style.display = 'none';
	}
	slide[index-1].style.display = 'block';

	countSlide();
}

autoSlide();

function autoSlide() {
	// alert('Hi');
	var i;
	var slide = document.getElementsByClassName('slide-item');

	for(i = 0; i < slide.length; i++) {
		slide[i].style.display = 'none';
	}
	if(index > slide.length) { index = 1 }
	slide[index-1].style.display = 'block';

	countSlide();

	index++;
	setTimeout(autoSlide, 7000);
}

function countSlide() {
	var bullet = document.getElementsByClassName('bullet-bg');

	for(var i = 0; i < bullet.length; i++) {
		bullet[i].className = bullet[i].className.replace(' active-slide', '');
	};

	bullet[index-1].className += ' active-slide';

	var count = document.getElementById('count-slide');
	count.innerHTML = index;
	var countSlides = document.getElementById('countTotalSlides');
	countSlides.innerHTML = i;
}








