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
	} else if (currentSlide !== slideNewArray.length - 1) {
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

// Categories
const $categories = document.querySelector('.categories__list ul')
let $categoriesList
let activeCategory = 0

const categoryArray = [
	{
		id: 0,
		img: './assets/pizza.png',
		tilte: 'Пицца',
	},
	{
		id: 1,
		img: './assets/sushi.png',
		tilte: 'Sushi',
	},
	{
		id: 2,
		img: './assets/rolle.png',
		tilte: 'Rols',
	},
	{
		id: 3,
		img: './assets/set.png',
		tilte: 'Sets',
	},
	{
		id: 3,
		img: './assets/wok.png',
		tilte: 'Wok',
	},
	{
		id: 3,
		img: './assets/soup.png',
		tilte: 'Soup',
	},
	{
		id: 3,
		img: './assets/salads.png',
		tilte: 'Salad',
	},
	{
		id: 3,
		img: './assets/dessert.png',
		tilte: 'Deserts',
	},
	{
		id: 3,
		img: './assets/beverages.png',
		tilte: 'Beverages',
	},
	{
		id: 3,
		img: './assets/sale.png',
		tilte: 'Promos',
	},
]

const changeCategory = (id) => {
	activeCategory = id
	const template = categoryArray
		.map((item, id) => createTemplate(id, item.img, item.tilte))
		.join('')
	$categories.innerHTML = template

	$categoriesList = [...document.querySelectorAll('.categories__list ul li')]
	$categoriesList[activeCategory].classList.add('active')
}

const createTemplate = (id, img, title) => {
	return `
				<li onclick=changeCategory(${id})>
							<img src="${img}" alt="icon" />
							<span>${title}</span>
				</li>
			`
}

window.addEventListener('DOMContentLoaded', () => {
	const template = categoryArray
		.map((item, id) => createTemplate(id, item.img, item.tilte))
		.join('')
	$categories.innerHTML = template

	$categoriesList = [...document.querySelectorAll('.categories__list ul li')]
	$categoriesList[0].classList.add('active')
})
