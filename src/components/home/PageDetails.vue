<template>
	<section>
		<div class="curso">
			<h2>O curso é para você que:</h2>
			<p>⭐ Precisa argumentar com mais clareza, seguindo uma linha de raciocínio que convença</p>
			<p>⭐ Quer se apresentar para pequenas e grandes plateias digitais ou presenciais</p>
			<p>⭐ Quer ser mais confiante e eloquente ao transmitir suas mensagens</p>
			<p>⭐ Quer transmitir autoridade por meio da linguagem corporal</p>
			<p>⭐ Quer controlar o medo e a ansiedade ao falar em público</p>
			<p>⭐ Quer persuadir e vender suas ideias com mais facilidade</p>
		</div>
		<div class="aprender">
			<h2>O que você vai aprender:</h2>
			<p>⭐ Desenvolver autoconhecimento: quem é você na comunicação?</p>
			<p>⭐ Destravar nas apresentações onlines</p>
			<p>⭐ Precisa argumentar com mais clareza, seguindo uma linha de raciocínio que convença</p>
			<p>⭐ Quer se apresentar para pequenas e grandes plateias digitais ou presenciais</p>
			<p>⭐ Como planejar, organizar e executar uma apresentação</p>
			<p>⭐ O poder das cores: estilo pessoal</p>
			<p>⭐ Comunicação não verbal</p>
		</div>
		<h2>Um curso para você crescer profissionalmente!!!</h2>
		<h3>A quem se destina o curso ?</h3>
		<div class="destino">
			<div class="data">
				<img src="../../assets/home/school.png" alt="" width="100">
				<p>Líderes</p>
			</div>

			<div class="data">
				<img src="../../assets/home/agent.png" alt="" width="100">
				<p>Profissionais de vendas</p>
			</div>

			<div class="data">
				<img src="../../assets/home/moderator.png" alt="" width="100">
				<p>Profissionais liberais</p>
			</div>

			<div class="data">
				<img src="../../assets/home/captive.png" alt="" width="100">
				<p>Profissionais da internet</p>
			</div>

			<div class="data">
				<img src="../../assets/home/chart.png" alt="" width="100">
				<p>Empreendedores</p>
			</div>

			<div class="data">
				<img src="../../assets/home/groups.png" alt="" width="100">
				<p>Influenciadores</p>
			</div>
		</div>
	</section>
</template>


<style scoped>

@media (min-width: 1280px) {
	section .destino {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: center;
  }

  section .destino .data {
    width: 300px;
    height: 90px;
  }
}

@media (max-width: 1280px) {
	section .curso {
    text-align: center;
  }
  section .curso h2 {
    font-size: 20px;
  }
  section .curso p {
    text-align: start;
    margin: 0 auto;
    max-width: 300px;
    font-size: 14px;
  }
  section .aprender {
    text-align: center;
  }
  section .aprender h2 {
    font-size: 20px;
  }
  section .aprender p {
    text-align: start;
    margin: 0 auto;
    max-width: 300px;
    font-size: 14px;
  }
  section h2 {
    font-size: 20px;
    text-align: center;
  }
}

section {
  width: 100%;
  background-color: rgb(235, 235, 235);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section .curso {
  margin: 40px 0;
  max-width: 900px;
}
section .curso h2 {
  margin-bottom: 20px;
}
section .curso p {
  padding: 3px 0;
}
section .aprender {
  margin: 0 0 60px 0;
  max-width: 800px;
}
section .aprender h2 {
  margin-bottom: 20px;
}
section .aprender p {
  padding: 3px 0;
}
section h2 {
  margin: 20px 0;
  text-transform: uppercase;
  color: #a58f68;
  text-shadow: #a5a5a5 1px 0 20px;
} 
section .destino {
  margin: 40px 0;
  text-align: center;
}
section .destino .data {
  align-items: center;
  display: flex;
  text-align: start;
  margin: 20px;
  background: #e9c078;
  background: -webkit-linear-gradient(to bottom, #e9c078, #a58f68);
  background: linear-gradient(to bottom, #e9c078, #a58f68);
  border-radius: 10px;
  color: #2a2a2a;
  box-shadow: 0 0 10px 1px #979797;
  transition: all 0.5s;
  width: 250px;
  height: 70px;
  font-size: 13px;
}
section .destino .data:hover {
  box-shadow: 0 0 20px 1px #979797;
  transform: scale(1.1);
  transition: all 0.5s;
}
section .destino .data img {
  padding: 20px;
  margin-right: 20px;
}
section h3 {
  color: #767676;
  border-bottom: 2px dashed #767676;
}
</style>
