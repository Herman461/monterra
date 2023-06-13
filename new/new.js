document.addEventListener('DOMContentLoaded', function() {
	// Табы
	const tabLinks = document.querySelectorAll("[data-tab-title]");
	const tabContent = document.querySelectorAll("[data-tab-content]");


	if (tabContent.length > 0)  {
		tabLinks.forEach(function(el) {
			el.addEventListener("click", openTabs);
		});

	}

	function openTabs(el) {

		const btnTarget = el.currentTarget;
		const title = btnTarget.dataset.tabTitle;
		const category = btnTarget.dataset.tabCategory

		const tabContent = document.querySelectorAll(`[data-tab-content][data-tab-category="${category}"]`);
		const tabLinks = document.querySelectorAll(`[data-tab-title][data-tab-category="${category}"]`);

		tabContent.forEach(function(el) {
			el.classList.remove("active");
		});

		tabLinks.forEach(function(el) {
			el.classList.remove("active");
		});

		const activeContent = document.querySelectorAll(`[data-tab-content="${title}"][data-tab-category="${category}"]`)

		activeContent.forEach(function(el) {
			el.classList.add('active')
		})
		document.querySelector(`[data-tab-content="${title}"]`).classList.add("active");



		const currentTitles = document.querySelectorAll(`[data-tab-title="${title}"]`)

		for (let index = 0; index < currentTitles.length; index++) {
			const title = currentTitles[index]
			title.classList.add("active");
		}

	}


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


	const firstSlider = new Swiper('.base-slider__body_first', {
		speed: 500,
		spaceBetween: 8,
		slidesPerView: 1.45,
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

	const secondSlider = new Swiper('.base-slider__body_second', {
		speed: 500,
		spaceBetween: 20,
		slidesPerView: 1.1,
		centeredSlides: true,
		loop: true,
		breakpoints: {
			991.98: {
				slidesPerView: 4,
				loop: false,
			},
			767.98: {
				slidesPerView: 2.1,
				loop: false,
			},
		}
	})

	const aboutButton = document.querySelector('[data-tab-title="about"]')

	aboutButton.addEventListener('click', function() {
		firstSlider.update()
		secondSlider.update()
	})

	window.addEventListener('click', function(e) {
		if (e.target.closest('.hover-brands__less') || e.target.closest('.brands__square.active')) {
			e.target.closest('.brands__square').classList.remove('active')
			setTimeout(function() {
				e.target.closest('.brands__square').classList.remove('end')
			}, 300)
		}

		if (e.target.closest('.brands__more') || e.target.closest('.brands__simg')) {

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
})

