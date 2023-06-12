<template>
	<footer>
		<div class="footer">
			<div class="copy">
				<p>Copyright © 2023 – Curso - O Poder da Comunicação por Nádia Aurélio. Todos os direitos reservados.
				</p>
			</div>
			<div class="developer">
				<p>Desenvolvido por <span>Broex.</span></p>
			</div>
		</div>
	</footer>
</template>


<style scoped>
@media (max-width: 1280px) {
	.footer {
    text-align: center;
    flex-direction: column;
  }

  .footer .developer {
    padding: 30px 0 10px 0;
  }

  footer .copy {
    padding: 0 50px;
  }
}

.footer {
  padding: 60px 0 30px 0;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer .copy {
  width: 450px;
  font-size: 12px;
}
footer .copy p {
  color: #a58f68;
}
footer .developer p {
  color: #fff;
  font-size: 12px;
}
footer .developer span {
  color: #a58f68;
  font-size: 12px;
  border-bottom: 1px solid #a58f68;
}
</style>
