// const form = document.querySelector('form');
// const name = document.querySelector('#name');
// const butonName = document.querySelector('#buton-name');
// const link = document.querySelector('#link');
// const color = document.querySelector('#color');

// color.addEventListener('input', () => {
//     const span = document.querySelector('span'); 
//     span.style.backgroundColor = color.value;
//     span.textContent = color.value;
// });

let elementorJson = null;

// Carregar o JSON da pasta
fetch("./achadinhos01.json")
  .then(res => res.json())
  .then(data => {
    elementorJson = data;
  })
  .catch(err => console.error("Erro ao carregar JSON:", err));

function FormData(event) {
  event.preventDefault();

  if (!elementorJson) {
    alert("JSON ainda não carregado!");
    return;
  }

  // Inputs do formulário
  const groupName = document.getElementById("name").value;
  const buttonName = document.getElementById("buton-name").value;
  const groupLink = document.getElementById("link").value;
  const color = document.getElementById("color").value;

  // 🔹 Caminho no JSON:
  // container (logo + heading) → container → heading
  let heading =
    elementorJson.content[0].elements[0].elements[0].elements[0].elements[1];
  if (groupName) heading.settings.title = groupName;
  heading.settings.title_color = color;

  // 🔹 Botão principal
  let button = elementorJson.content[0].elements[0].elements[0].elements[1];
  if (buttonName) button.settings.text = buttonName;
  if (groupLink) button.settings.link.url = groupLink;
  button.settings.button_text_color = "#FFFFFF"; // mantém branco fixo
  button.settings.background_color = color;

  // 🔹 Container que envolve heading + logo
  let container =
    elementorJson.content[0].elements[0].elements[0].elements[0];
  container.settings.border_color = color;

  // Baixar JSON modificado
  downloadJson(elementorJson, "achadinho_modificado.json");
}

// Função utilitária para baixar
function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  URL.revokeObjectURL(url);
}
