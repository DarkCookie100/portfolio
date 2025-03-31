document
  .getElementById("formContato")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Mensagem enviada com sucesso!");

    document.getElementById("formContato").reset();

    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("textBox").addEventListener("click", function () {
      this.innerText = "Você clicou!";
    });

    document.getElementById("textBox 1").addEventListener("click", function () {
      this.innerText = "Você clicou!";
    });
  });
