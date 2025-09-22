// Estado: lista de nombres
const amigos = [];

// Referencias al DOM
const $input = document.getElementById('amigo');
const $btnAdd = document.getElementById('btn-add');
const $lista = document.getElementById('listaAmigos');
const $btnSortear = document.getElementById('btn-sortear');
const $resultado = document.getElementById('resultado');

// Dibuja la lista completa dentro de <ul id="listaAmigos">
function renderLista() {
  $lista.innerHTML = '';
  amigos.forEach((nombre) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    $lista.appendChild(li);
  });
}

// Agregar nombre desde el input
function agregarAmigo() {
  const nombre = ($input.value || '').trim();
  if (!nombre) {
    alert('Por favor, ingresa un nombre válido.');
    $input.focus();
    return;
  }
  amigos.push(nombre);
  $input.value = '';
  $input.focus();
  renderLista();
}

// Sortear un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Agrega al menos un nombre para sortear.');
    return;
  }
  const idx = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[idx];

  // Mostrar solo el último resultado
  $resultado.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `🎉 El amigo secreto es: ${ganador}`;
  $resultado.appendChild(li);
}

// Eventos
$btnAdd.addEventListener('click', agregarAmigo);
$input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarAmigo(); // permitir Enter
});
$btnSortear.addEventListener('click', sortearAmigo);

// Render inicial (lista vacía)
renderLista();
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
