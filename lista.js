async function carregarPresentes() {
  // URL DO SEU APPS SCRIPT
  const url =
    "https://script.google.com/macros/s/AKfycbz8KLWolA6sD4vdgU0cyVTDI5ypPoIiMyVKaKMboKOkR5MKnpJx0OLsBwTSgYtNpGDAMw/exec";

  try {
    const resposta = await fetch(url);
    const presentesReservados = await resposta.json();

    const itens = document.querySelectorAll(".gift-item");

    itens.forEach((item) => {
      const nomeItem = item.textContent
        .replace("✓ Reservado", "")
        .trim()
        .toLowerCase();

      const reservado = presentesReservados.some(
        (presente) => presente.toLowerCase().trim() === nomeItem,
      );

      if (reservado) {
        item.classList.add("reservado");
      }
    });
  } catch (erro) {
    console.error("Erro ao carregar presentes:", erro);
  }
}

carregarPresentes();
