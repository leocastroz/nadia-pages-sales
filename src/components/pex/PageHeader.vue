<template>
	<div class="top-side">
		<div class="title">
			<h1>P E X</h1>
		</div>
		<div class="container">
			<h1>O PODER DA AUTOESTIMA</h1>
			<p>Aprenda a desbloquear o seu poder feminino e CONQUISTE DE UMA VEZ POR TODAS A SUA INDEPENDÊNCIA EMOCIONAL.</p>
		</div>
		<div class="pos-container">
			<div class="information">
				<p>Nesta <span>IMERSÃO PRESENCIAL</span>, você irá descobrir porque as mulheres que mais se conectam com seu <span>Poder Feminino</span> são mais felizes e bem-sucedidas.</p>
				<br>
				<p>🗓️  Dia xx de Agosto</p>
				<p>⏰  Com início às 8h</p>
				<br>
				<p>Tenha um dia todo dedicado a você.</p>
			</div>
			<div>
				<img src="../../assets/pex/profile.png" alt="">
			</div>
		</div>
		<div class="footer-side">
			<a href="" class="pulse-button">QUERO MEU INGRESSO COM DESCONTO</a>
		</div>
		
	</div>
</template>



<style scoped>
.top-side {
	background-image: url('https://recursos.puravida.com.br/i/lp-suplementar/desk/bg-conhecimento-last.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100vw;
	height: 100vh;
}

.footer-side {
	margin-top: 30px;
	padding: 30px;
	text-align: center;
	text-align: center;
}
.footer-side .pulse-button  {
	border-radius: 30px;
	text-decoration: none;
	font-size: 18px;
	padding: 15px 30px;
	background-image: linear-gradient(#DF61FF, #FF1E97);
	color: #FFF;
	font-weight: bold;
	display: inline-block;
	animation: pulse 2s infinite;
}



@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

h1 {
	color: #FF1E97;
	text-shadow: 0 0 20px #FF005B;
	padding: 30px 60px;
}

.container {
	text-align: center;
}

.container h1 {
	color: #EEBCFF;
	text-shadow: 0 0 20px #FF005B;
}

.container p {
	color: #ffd3f0;
	text-shadow: 0 0 20px #ff62c8;
	width: 400px;
	margin: 0 auto;
}

.pos-container {
	margin: 0 auto;
	max-width: 900px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	height: 400px;
}

.pos-container img {
	width: 250px;
	border-radius: 100%;
	box-shadow: 0 0 200px #ff00c8ba;
}

.pos-container p {
	width: 350px;
	color: #FFF;
	text-shadow: 0 0 20px #FFF;
}

.pos-container span {
	color: #FF1E97;
}
</style>