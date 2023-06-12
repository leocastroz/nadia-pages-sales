<script>

import PageDepoimentVue from './PageDepoiment.vue';
export default {
  components: {
    PageDepoimentVue
  }
}
</script>
<template>

  <PageDepoimentVue />
	<div class="my-container">
		<div class="sobre">
			<div class="profe">
				<h2>CONHEÇA A SUA PROFESSORA:</h2>
				<p>Nádia Aurélio, CEO Instituto Nádia Aurélio, advogada especialista em direito público, escritora best-seller do
					Livro Mulheres Extraordinárias, mentora e treinadora de Inteligência Emocional. Há três anos deixou uma carreira
					de advogada para viver da sua grande paixão, ama estar com pessoas. Com mais de 3.000 horas de atendimento
					individualizados como mentora e mais de 1.000 pessoas que já passaram pelos seus treinamentos presenciais.</p>
				<br>
				<p>
					Algumas formações: Master Programação Neuro Linguística, Master Coaching Inteligência Emocional, Treinador de
					Inteligência Emocional, Hipnose, Constelação Familiar Sistêmica, Treinamento de Alto Impacto, Master Rebirthing,
					Psicoterapia Sistêmica, Análise de Perfil Comportamental, Oratória e Comunicação, Marketing Digital, Ouvidoria Pública.
				</p>
				<br>
				<p class="inovation">📅> O curso vai acontecer em um dia, 24 de junho das 8h00 às 18:00h.</p>
				<br>
				<p class="inovation">⏱️> 8 horas de duração</p>
				<p class="inovation">📃> Certificado</p>
			</div>
			<div class="imagem-prof">
				<img src="../../assets/home/nadd.png" alt="">
			</div>
		</div>
	</div>
</template>

<style scoped>
@media (min-width: 1280px) {
	.my-container .sobre {
    margin: 0 auto;
    max-width: 1000px;
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto auto;
  }
}

@media (max-width: 1280px) {
	.my-container .sobre {
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto;
    flex-direction: column-reverse;
  }
	.my-container .sobre h2 {
    text-align: center;
  }

  .my-container .sobre p {
    margin: 0 auto;
    width: 350px;
    font-size: 14px;
  }
}


.my-container {
  display: flex;
  margin: 0 auto;
  color: #c0c0c0;
}

.my-container .sobre .imagem-prof img {
  width: 350px;
  padding: 20px;
  border-radius: 100%;
}

.my-container .sobre .inovation {
  color: #a58f68;
  text-shadow: #a5a5a5 1px 0 20px;
  
}
.my-container .sobre h2 {
  margin: 20px 0;
  text-transform: uppercase;
  color: #a58f68;
  text-shadow: #e8c891 1px 0 20px;
}

.my-container .sobre p {
  text-align: justify;
  color: #c0c0c0;
}

</style>