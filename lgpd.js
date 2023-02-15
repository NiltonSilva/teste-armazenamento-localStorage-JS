const lgpdUrl = "https://jsonplaceholder.typicode.com/posts";

const lgpdHtml = `
<div class="lgpd">
<div class="lgpd-left">
    <p>Nós utilizamos cookie para melhorar sua experiência como usuário.</p>
    <p>Para conferir detalhamente todos os cookies utilizados, leia nossa <a href="#">política de privadade</a>.</p>
</div>
<div class="lgpd-right">
    <button>OK</button>
</div>
</div>
<link rel="stylesheet" href="style.css">
`;

const lsContent = localStorage.getItem("lgpd");

if (!lsContent) {
  debugger;
  document.body.innerHTML += lgpdHtml;

  const lgpdArea = document.querySelector(".lgpd");
  const lgpdButton = lgpdArea.querySelector("button");

  lgpdButton.addEventListener("click", async () => {
    console.log("clicou");

    // VAI REMOVER O AVISO DE COOKIE DA TELA.
    lgpdArea.remove();

    // REQUISIÇÃO PARA SALVAR O IP DA MÁQUINA DO USUÁRIO, O NAVEGADOR, HORÁRIO E CRIAR UM ID PARA O USUÁRIO.
    const result = await fetch(lgpdUrl);
    const json = await result.json();

    // SE NÃO DEU ERRO, SALVO A INFORMAÇÃO DO USUÁRIO AQUI NO MEU LOCALSTORAGE.
    if (json.error != "") {
      const id = 123;
      localStorage.setItem("lgpd", json.id);
    }

    localStorage.setItem("lgpd", "123");
  });
}
