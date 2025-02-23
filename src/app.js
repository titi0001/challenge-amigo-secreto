let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (!nome) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  amigos.push(nome);

  atualizarLista();

  input.value = "";
  input.focus();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = amigoSorteado;
  resultado.appendChild(li);
}

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
  }
  if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
  } else {
      document.documentElement.classList.remove("dark");
  }

  const darkModeButton = document.getElementById("toggleDarkMode");
  if (darkModeButton) {
      darkModeButton.addEventListener("click", function () {
          if (document.documentElement.classList.contains("dark")) {
              document.documentElement.classList.remove("dark");
              localStorage.setItem("theme", "light");
          } else {
              document.documentElement.classList.add("dark");
              localStorage.setItem("theme", "dark");
          }
      });
  }
});
