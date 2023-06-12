<template>
	<header>
		<div class="centered">
			<div class="foto-grande">
				<img src="../../assets/home/nadi.png" alt="nadia-com-livros" />
			</div>
			<div class="container">
				<h1>O PODER DA COMUNICAÇÃO</h1>
				<p>presencial - Parauapebas-PA</p>
				<p>24/junho</p>
				<h2>
					Descubra quais são as técnicas que aumentam o seu poder de influência com a fala.</h2>
				<h2 class="my-color">Um método direto ao ponto e prático!</h2>
				<h3>🎉 Garanta sua vaga</h3>
				<a href="https://chk.eduzz.com/1915261" target="_blank">LOTE 1</a>
				<a href="https://chk.eduzz.com/1915262" target="_blank">LOTE 2</a>
			</div>
		</div>
	</header>
</template>
<style scoped>
@media (max-width: 1280px) {
	header .centered {
		display: flex;
		flex-direction: column;
	}

	header .centered .container {
		padding: 40px;
	}

	header .centered img {
		width: 280px;
	}

	header .centered .container h1 {
		font-size: 20px;
	}

	header .centered .container h2 {
		font-size: 16px;
	}

	header .centered .container h3 {
		font-size: 18px;
	}

	header .centered .container a {
		font-size: 13px;
	}
}

header {
	width: 100%;
	background-image: url('../../assets/home/background.png');
	background-size: cover;
}

header .centered {
	display: flex;
	margin: 0 auto;
	max-width: 1100px;
	align-items: center;
	justify-content: space-evenly;
}

header .centered .foto-grande {
	margin-bottom: -7px;
}

header .centered .foto-grande img {
	margin-top: 60px;
	-webkit-mask-image: linear-gradient(to top, transparent 1%, black 20%);
}

header .container h1 {
	color: #d43bff;
	text-shadow: #e37eff 1px 0 20px;
	margin-top: -35px;
}

header .container {
	text-align: center;
	color: #c0c0c0;
}

header .container a {
	background: #e9c078;
	background: -webkit-linear-gradient(to bottom, #e9c078, #a58f68);
	background: linear-gradient(to bottom, #e9c078, #a58f68);
	box-shadow: 0 0 15px 1px #a58f68;
	color: #ededed;
	text-decoration: none;
	font-weight: 500;
	font-size: 18px;
	padding: 10px 20px;
	margin: 20px 10px;
	border-radius: 5px;
	transition: all 0.5s;
}

header .container a:hover {
	transform: scale(1.1);
}

header .container h2 {
	max-width: 500px;
	margin-top: 15px;
	font-size: 22px;
	text-shadow: #ededed 1px 0 10px;
	font-weight: 400;
}

header .container h3 {
	max-width: 500px;
	margin-bottom: 30px;
	font-size: 22px;
	color: #e9c078;
	text-shadow: #ededed 1px 0 20px;
}

header .container .my-color {
	color: #e9c078;
	margin-bottom: 40px;
}</style>