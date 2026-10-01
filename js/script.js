const formulario = document.querySelector('#form-compra')
const preco = document.querySelector('#preco')
const quantidade = document.querySelector('#quantidade')
const desconto = document.querySelector('#desconto')
const resultado = document.querySelector('#resultado')
const cartaoResultado = document.querySelector('.result-card')
const formatoMoeda = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL'
})

formulario.addEventListener('submit', (evento) => {
	evento.preventDefault()

	const valor = Number(preco.value)
	const qtd = Number(quantidade.value)
	const percentualDesconto = Number(desconto.value || 0)

	const subtotal = valor * qtd
	const total = subtotal - subtotal * percentualDesconto / 100

	resultado.textContent = formatoMoeda.format(total)
	cartaoResultado.classList.add('visivel')
})
