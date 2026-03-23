async function obtenerPerfil(){

const url = "https://jsonplaceholder.typicode.com/users/1";

const respuesta = await fetch(url);
const datos = await respuesta.json();

document.getElementById("nombre").textContent = datos.name;
document.getElementById("bio").textContent = datos.company.catchPhrase;
document.getElementById("foto").src = "https://i.pravatar.cc/150?img=3";

}

async function obtenerPosts(){

const url = "https://jsonplaceholder.typicode.com/photos?_limit=6";

const respuesta = await fetch(url);
const datos = await respuesta.json();

const contenedor = document.getElementById("posts");

datos.forEach(post => {

const div = document.createElement("div");
div.classList.add("post");

div.innerHTML = `
<img src="${post.url}">
<p>${post.title}</p>
`;

contenedor.appendChild(div);

});

}

obtenerPerfil();
obtenerPosts();