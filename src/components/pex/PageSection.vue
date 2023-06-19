<template>
  <section>
    <div class="container">
      <div class="pos-container">
        <div class="min">
          <img src="../../assets/pex/womans.jpg" alt="">
        </div>
      </div>
      <div class="sub-container">
        <h1>FAÇA PARTE DO NOSSO GRUPO!</h1>
        <p>Conheça outras mulheres que estão passando pela mesma experiência</p>
        <p>Faça novas amizades e crie laços para fortalecer a comunidade feminina.</p>
        <p>Compartilhe suas experiências e aprenda com as experiências de outras mulheres.</p>
        <br>
        <a href="">+ Nosso Grupo</a>
      </div>
    </div>
    <div class="max-container">
      <h1>NOSSOS PRODUTOS</h1>
      <div class="all-container">
        <div class="max-box">
          <div class="min-box">
            <img src="../../assets/pex/home.svg" alt="">
            <p>Querem saber como conciliar a maternidade, vida pessoal e carreira de um jeito mais leve.</p>
          </div>

          <div class="min-box">
            <img src="../../assets/pex/money.svg" alt="">
            <p>Buscam conquistar sua independência financeira.</p>
          </div>

          <div class="min-box">
            <img src="../../assets/pex/secure.svg" alt="">
            <p>Almejam resgatar sua auto confiança.</p>
          </div>

          <div class="min-box">
            <img src="../../assets/pex/peoples.svg" alt="">
            <p>Querem se conectar a outras mulheres que entendam suas dores e compartilhem dos mesmos objetivos.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style  scoped>

section {
  background-color: #000;
}

.container {
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 1200px;
  padding: 100px 0;
}

.container img {
  -webkit-mask-image: linear-gradient(to top, transparent 1%, black 70%);
  border-radius: 5px;
  width: 500px;
  height: auto;

}

.pos-container .min {
  border-radius: 5px;
  box-shadow: -20px -30px 1px #ff00c8ba;

}

.sub-container {
  color: #fff;
}

.sub-container p {
  width: 350px;
  text-align: justify;
  font-size: 15px;
  margin: 10px 0;
  color: #959595;
}

.sub-container h1 {
  background: linear-gradient(270deg, #ff925b 0%, #ff00c8ba 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sub-container a {
  background: linear-gradient(270deg, #ff925b 0%, #ff00c8ba 100%);
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
}

.max-container {
  text-align: center;
}

.all-container {
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  justify-content: center;
}

.max-box {
  padding: 20px;
  display: flex;
}


.max-container h1 {
  font-size: 30px;
  background: linear-gradient(270deg, #ff925b 0%, #ff00c8ba 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.min-box {
  margin: 20px;
  padding: 20px;
  text-align: center;
  max-width: 250px;
  height: 300px;
  border: 2px solid #313131ba;
  border-radius: 5px;
  transition: all 0.4s ease-in-out;
}

.min-box:hover {
  cursor: pointer;
  border: 2px solid #ff00c8ba;
}

.min-box img {
  width: 50px;
}

.min-box p {
  margin-top: 20px;
  font-size: 15px;
  color: #959595;
}
</style>