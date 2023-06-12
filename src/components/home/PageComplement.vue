<script>
import PageSection from './PageSection.vue'
import PageFooter from './PageFooter.vue'
export default {
	components: {
		PageSection,
		PageFooter
	}
}
</script>

<template>
	<div class="complemente">
    <div class="center">
      <div class="box">
        <h1>Lembre-se que a sua profissão é falar</h1>
        <p class="datas">Você precisar investir em melhorar esse conhecimento agora mesmo!</p>
        <p class="datas">⭐ 90% do seu resultado vem de como você se comunica!</p>
        <div class="my-cards">
          <div class="card">
            <p>O poder da comunicação</p>
            <div class="value">
              <p>De <span><img src="../../assets/home/value.png" alt="" width="80"></span>à vista</p>
            </div>
            <p style="font-size: 12px; margin-top: -10px;">Por R$ 497,00 à vista</p>
            <p>ou 12x de R$ 49,70</p>
            <a href="https://chk.eduzz.com/1915261" class="pulse-button" target="_blank">GARANTIR INSCRIÇÃO AGORA</a>
          </div>
          <div class="card">
            <p>O poder da comunicação</p>
            <div class="value">
              <p>De <span><img src="../../assets/home/value.png" alt="" width="80"></span>à vista</p>
            </div>
            <p style="font-size: 12px; margin-top: -10px;">Por R$ 597,00 à vista</p>
            <p>ou 12x de R$ 59,70</p>
            <a href="https://chk.eduzz.com/1915262" class="pulse-button" target="_blank">GARANTIR INSCRIÇÃO AGORA</a>
          </div>
        </div>
      </div>
    </div>
    <PageSection />
    <PageFooter />
  </div>
</template>


<style scoped>

@media (min-width: 1280px) {
  .complemente .box .my-cards {
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto;
    
  }
  .complemente .center .card {
    margin: 30px;
  }
  
}

@media (max-width: 1280px)
{
  
  .complemente .box .my-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .complemente .box h1 {
    font-size: 20px;

  }
  .complemente .box p {
    font-size: 13px;
  }
}
.complemente {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/home/background.png');
  background-size: cover;
}
.complemente .center {
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 80px 0 30px 0;
}
.complemente .center .foto-big img {
  width: 400px;
  height: 410px;
  border-radius: 100%;
  box-shadow: 0 0 300px 1px #706046;
}

.complemente .center .card {
  width: 280px;
  text-align: center;
  padding: 20px;
  margin-top: 10px;
  border: 1px solid #e9c078;
  border-radius: 10px;
}

.complemente .center .card .value {
  margin-top: -10px;
}

.complemente .center .card .value p {
  display: flex;
  align-items: center;
  justify-content: center;
}

.complemente .center .card .value img {
  margin: 0 10px;
  width: 80px;
}

.complemente .center .card span {
  font-size: 18px;
  text-decoration: line-through #ff4444bb 1.5px;
}
.complemente .center .card a {
  background: #e9c078;
  background: -webkit-linear-gradient(to bottom, #e9c078, #a58f68);
  background: linear-gradient(to bottom, #e9c078, #a58f68);
  color: #414141;
  text-decoration: none;
  font-weight: bold;
  font-size: 12px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.8s;
}

.pulse-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #428bca;
  border-radius: 25px;
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

.complemente .center .card a:hover {
  background-color: #c0c0c0;
  transition: 0.8s;
  transform: scale(1.1);
  transition: all 0.5s;
}
.complemente .box h1 {
  margin: 10px 0;
  color: #a58f68;
  text-shadow: #e8c891 1px 0 20px;
  text-align: center;
}

.complemente .box .datas {
  text-align: center;
}

.complemente .box p {
  padding: 10px 0;
  
}
.complemente .box {
  text-align: start;
  color: #c0c0c0;
}
</style>
