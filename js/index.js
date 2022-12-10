const $leftArrowButton = document.querySelector('.left__arrow')
const $rightArrowButton = document.querySelector('.right__arrow')
const $slideArray = document.querySelectorAll('.slider__list li')

let currentSlide = 0
const slideNewArray = [...$slideArray]
const findedItem = slideNewArray[currentSlide]

window.addEventListener('DOMContentLoaded', () => {
	findedItem.classList.add('active')
})

$leftArrowButton.addEventListener('click', () => {
	if (currentSlide === 0) {
		$leftArrowButton.classList.add('disabled')
	} 
	else if (currentSlide !== slideNewArray.length - 1) {
		$rightArrowButton.classList.remove('disabled')
	} else {
		currentSlide -= 1 // 1

		const findedItem = slideNewArray[currentSlide]
		const nextItem = slideNewArray[currentSlide + 1]

		nextItem.classList.remove('active')
		findedItem.classList.add('active')
	}
})

$rightArrowButton.addEventListener('click', () => {
	console.log(currentSlide, slideNewArray.length - 1)

	currentSlide += 1 // 1

	const findedItem = slideNewArray[currentSlide]
	const previousItem = slideNewArray[currentSlide - 1]

	previousItem.classList.remove('active')
	findedItem.classList.add('active')

	if (currentSlide === slideNewArray.length - 1) {
		$rightArrowButton.classList.add('disabled')
	} else {
		$rightArrowButton.classList.remove('disabled')
	}
})
