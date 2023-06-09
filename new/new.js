document.addEventListener('DOMContentLoaded', function() {

	let sliders = document.querySelectorAll(".swiper");
	if (sliders) {
		for (let index = 0; index < sliders.length; index++) {
			let slider = sliders[index];
			if (!slider.classList.contains('swiper-build')) {
				let slider_items = slider.children;
				if (slider_items) {
					for (let index = 0; index < slider_items.length; index++) {
						let el = slider_items[index];
						el.classList.add('swiper-slide');
					}
				}
				let slider_content = slider.innerHTML;
				let slider_wrapper = document.createElement("div");
				slider_wrapper.classList.add('swiper-wrapper');
				slider_wrapper.innerHTML = slider_content;
				slider.innerHTML = "";
				slider.appendChild(slider_wrapper);
				slider.classList.add('swiper-build');
			}
			if (slider.classList.contains('_gallery')) {
				//slider.data('lightGallery').destroy(true);
			}
		}
		sliders_build_callback();
	}

	function sliders_build_callback() { }


	const categoriesSlider = new Swiper('.base-categories-slider', {
		speed: 1000,
		autoHeight: true,
		allowTouchMove: false,
	})

	// Табы
	const tabLinks = document.querySelectorAll("[data-tab-title]");


	if (tabLinks.length > 0)  {
		tabLinks.forEach(function(el) {
			el.addEventListener("click", openTabs);
		});

	}

	function openTabs(el) {

		const btnTarget = el.currentTarget;
		const title = btnTarget.dataset.tabTitle;
		const category = btnTarget.dataset.tabCategory

		if (btnTarget.dataset.tabTitle === 'about') {

			categoriesSlider.slideNext()
		} else {
			categoriesSlider.slidePrev()
		}

		const tabLinks = document.querySelectorAll(`[data-tab-title][data-tab-category="${category}"]`);
		tabLinks.forEach(function(el) {
			el.classList.remove("active");
		});

		const currentTitles = document.querySelectorAll(`[data-tab-title="${title}"]`)

		for (let index = 0; index < currentTitles.length; index++) {
			const title = currentTitles[index]
			title.classList.add("active");
		}

	}




	const firstSlider = new Swiper('.base-slider__body_first', {
		speed: 500,
		spaceBetween: 8,
		slidesPerView: 2,
		loop: true,
		breakpoints: {
			991.98: {
				slidesPerView: 4,
				loop: false,
				spaceBetween: 20,
			},
			767.98: {
				slidesPerView: 3.1,
				loop: false,
				spaceBetween: 20,
			},
		}
	})


	// wasSecondSliderInit = false
	const secondSlider = new Swiper('.base-slider__body_second', {
		speed: 1000,
		spaceBetween: 20,
		slidesPerView: 1.1,
		centeredSlides: true,
		initialSlide: 0,
		autoplay: {
			delay: 2000,
		},

		loop: true,
		// freeMode: {
		// 	enabled: true,
		// 	sticky: true,
		// },
		breakpoints: {
			991.98: {
				slidesPerView: 4,
				centeredSlides: false,
				spaceBetween: 0,
			},
			767.98: {
				slidesPerView: 2.1,
				centeredSlides: true,
				spaceBetween: 20,
			},
		},

		// on: {
		// 	slideChange() {
		// 		if (!wasSecondSliderInit) {
		// 			wasSecondSliderInit = true
		// 			return
		// 		}
		//
		// 		document.querySelector('.base-slider__body_second').classList.add('changed')
		// 	}
		// }
	})
	secondSlider.on('slideChange', function() {
		secondSlider.updateSlides()
	})
	const aboutButton = document.querySelector('[data-tab-title="about"]')

	aboutButton.addEventListener('click', function() {
		firstSlider.update()
		secondSlider.update()
		secondSlider.updateSlides()
	})

	window.addEventListener('click', function(e) {
		if (e.target.closest('.hover-brands__less') || e.target.closest('.brands__square.active')) {
			e.target.closest('.brands__square').classList.remove('active')
			setTimeout(function() {
				e.target.closest('.brands__square').classList.remove('end')
			}, 300)
		}

		if (e.target.closest('.brands__more') || e.target.closest('.brands__bimg')) {

			if (document.querySelector('.brands__square.active')) {
				document.querySelector('.brands__square.active').classList.remove('active')
				document.querySelector('.brands__square.end').classList.remove('end')
			}
			e.target.closest('.brands__square').classList.add('active')
			setTimeout(function() {
				e.target.closest('.brands__square').classList.add('end')
			}, 500)
		}


	})


	const animItems = document.querySelectorAll('.anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 3;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if (
					pageYOffset > animItemOffset - animItemPoint &&
					pageYOffset < animItemOffset + animItemHeight
				) {
					if (animItem.classList.contains('base-banner__caramel')) {
						animItem.classList.add('active');
					}
					if (animItem.closest('.swiper-slide-active')) {
						animItem.classList.add('active');
					}

				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect();
			const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
		}
		setTimeout(() => {
			animOnScroll();
		}, 2000);
	}
})

