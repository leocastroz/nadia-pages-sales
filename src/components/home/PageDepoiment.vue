<template>
		<h2>Depoimentos Curso poder da comunicação !</h2>
		<div class="destino">
			<div class="data mariva">
				<p class="people">Marivania Farias - Contadora</p>
				<p>O Curso foi maravilhoso, a sua entrega foi intensa, muito atenciosa, as convidadas também.</p>
			</div>

			<div class="data">
				<p class="people">Ingrid Filgueira - Personal organizer</p>
				<p>Eu achei bom tanto o conteúdo quanto a didática.</p>
			</div>

			<div class="data">
				<p class="people">Allana Tavares - Vendedora</p>
				<p>Foi uma experiência maravilhosa!! Aprendi muito com esse curso dinâmicas são bem legais e participativas. Você Nádia tem uma energia incrível Parabéns pelo curso, estou muito grata.</p>
			</div>

			<div class="data carlos">
				<p class="people">Carlos Wellington - Relações com a Comunidade</p>
				<p>O curso foi excelente nos seguintes aspectos:</p>
				<p style="text-align: start;">1. Ações práticas nas redes sociais (entrar ao vivo na live, fazer o exercício da Debora).<br><br>
					2. Conteúdo na comunicação mais ampla a pessoa, a energia, a aparência.<br><br>
					3. Pontualidade inicial e no retorno do almoço.<br><br>
					4. Público excelente (o que enriqueceu muito a troca de conhecimentos).<br><br>
					5. Diversificação: foram 3 palestrantes.<br><br></p>
			</div>

			<div class="data">
				<p class="people">Dave Malceany - Corretor</p>
				<p>Muito boa a dinâmica e a distribuição do conteúdo.</p>
			</div>

			<div class="data">
				<p class="people">Ellen Moura</p>
				<p>Amei o curso, muito bom a dinâmica e apresentação do conteúdo.</p>
			</div>
		</div>
</template>


<style scoped>

@media (min-width: 1280px) {
	.destino {
    grid-template-columns: auto auto auto;
  }

  .destino .data {
    width: 300px;
    height: 90px;
  }
}

h2 {
	font-size: 20px;
	text-align: center;
	color: #a58f68;
  text-shadow: #e8c891 1px 0 20px;
	padding: 0 0 50px 0;
	text-transform: uppercase;
}
.destino {
	display: grid;
	align-items: center;
	justify-content: center;
	margin: 0 auto 50px auto;	
}
.destino .data {
  align-items: center;
  display: grid;
  text-align: center justify;
  margin: 25px;
	padding: 20px;
  border-radius: 10px;
  color: #ababab;
  transition: all 0.5s;
  min-width: 250px;
	border: 1px solid #e9c07880;
  height: 70px;
  font-size: 13px;
	min-height: 200px;
}

.destino .carlos{
	min-height: 400px;
	min-width: 350px;
}

.destino .mariva {
	min-width: 350px;
}

.destino .data .people {
	color: #a58f68;
  text-shadow: #e8c891 1px 0 20px;
}

.destino .data:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}

h3 {
  color: #767676;
  border-bottom: 2px dashed #767676;
}

</style>