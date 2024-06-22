document.addEventListener('DOMContentLoaded', () => {
	const gameBoard = document.getElementById('game-board')
	const startButton = document.getElementById('start-game')
	const newGameButton = document.getElementById('new-game')
	const timerElement = document.getElementById('timer')
	const scoreElement = document.getElementById('score')
	const resultMessage = document.getElementById('result-message')

	let cards = []
	let flippedCards = []
	let matchedPairs = 0
	let timer
	let timeLeft
	let score = 0

	startButton.addEventListener('click', startGame)
	newGameButton.addEventListener('click', startNewGame)

	function startGame() {
		const rows = parseInt(document.getElementById('rows').value)
		const cols = parseInt(document.getElementById('cols').value)
		const difficulty = document.getElementById('difficulty').value

		if (rows * cols < 16) {
			alert('Мінімальний розмір ігрового поля 4x4.')
			return
		}

		if ((rows * cols) % 2 !== 0) {
			alert('Кількість карток має бути парною.')
			return
		}

		resetGame()
		createBoard(rows, cols)
		startTimer(difficulty)
		startButton.style.display = 'none'
		newGameButton.style.display = 'block'
	}

	function startNewGame() {
		const rows = parseInt(document.getElementById('rows').value)
		const cols = parseInt(document.getElementById('cols').value)
		const difficulty = document.getElementById('difficulty').value

		if (rows * cols < 16) {
			alert('Мінімальний розмір ігрового поля 4x4.')
			return
		}

		if ((rows * cols) % 2 !== 0) {
			alert('Кількість карток має бути парною.')
			return
		}

		resetGame()
		createBoard(rows, cols)
		startTimer(difficulty)
	}

	function resetGame() {
		clearInterval(timer)
		gameBoard.innerHTML = ''
		timerElement.textContent = 'Таймер: 00:00'
		scoreElement.textContent = 'Рахунок: 0'
		resultMessage.textContent = ''
		score = 0
		matchedPairs = 0
		flippedCards = []
	}

	function createBoard(rows, cols) {
		gameBoard.style.gridTemplateRows = `repeat(${rows}, 1fr)`
		gameBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`

		const totalCards = rows * cols
		cards = generateCards(totalCards)

		cards.forEach(card => {
			const cardElement = document.createElement('div')
			cardElement.classList.add('card')
			cardElement.dataset.cardValue = card

			const cardInner = document.createElement('div')
			cardInner.classList.add('card-inner')

			const cardFront = document.createElement('div')
			cardFront.classList.add('card-front')
			cardFront.textContent = ''

			const cardBack = document.createElement('div')
			cardBack.classList.add('card-back')
			cardBack.innerHTML = '<p>' + card + '</p>'

			cardInner.appendChild(cardFront)
			cardInner.appendChild(cardBack)
			cardElement.appendChild(cardInner)
			cardElement.addEventListener('click', flipCard)

			gameBoard.appendChild(cardElement)
		})
	}

	function generateCards(total) {
		const cardValues = []
		for (let i = 1; i <= total / 2; i++) {
			cardValues.push(i)
			cardValues.push(i)
		}
		return cardValues.sort(() => Math.random() - 0.5)
	}

	function flipCard() {
		if (this.classList.contains('flipped') || flippedCards.length === 2) return

		this.classList.add('flipped', 'flip-2-ver-left-1')
		flippedCards.push(this)

		if (flippedCards.length === 2) {
			checkMatch()
		}
	}

	function checkMatch() {
		const [card1, card2] = flippedCards
		if (card1.dataset.cardValue === card2.dataset.cardValue) {
			matchedPairs++
			score++
			scoreElement.textContent = `Рахунок: ${score}`
			flippedCards = []
			if (matchedPairs === cards.length / 2) {
				endGame(true)
			}
		} else {
			setTimeout(() => {
				card1.classList.remove('flipped', 'flip-2-ver-left-1')
				card2.classList.remove('flipped', 'flip-2-ver-left-1')
				flippedCards = []
			}, 1000)
		}
	}

	function startTimer(difficulty) {
		switch (difficulty) {
			case 'easy':
				timeLeft = 180
				break
			case 'normal':
				timeLeft = 120
				break
			case 'hard':
				timeLeft = 60
				break
		}

		timer = setInterval(() => {
			timeLeft--
			const minutes = Math.floor(timeLeft / 60)
			const seconds = timeLeft % 60
			timerElement.textContent = `Таймер: ${minutes}:${
				seconds < 10 ? '0' : ''
			}${seconds}`
			if (timeLeft === 0) {
				clearInterval(timer)
				endGame(false)
			}
		}, 1000)
	}

	function endGame(won) {
		if (won) {
			resultMessage.textContent = `Ви перемогли! Час: ${180 - timeLeft} секунд`
		} else {
			resultMessage.textContent = 'Час вийшов! Ви програли.'
		}
		clearInterval(timer)
		timerElement.textContent = 'Таймер: 00:00'
		startButton.style.display = 'block'
		newGameButton.style.display = 'none'
	}
})
