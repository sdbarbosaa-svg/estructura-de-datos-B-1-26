class MiCard extends HTMLElement{

constructor(){
super();

const shadow = this.attachShadow({mode:"open"});

shadow.innerHTML = `

<style>

.card{
border:1px solid #ddd;
border-radius:10px;
padding:15px;
width:200px;
background:white;
box-shadow:0 2px 6px rgba(0,0,0,0.1);
text-align:center;
}

img{
width:100%;
border-radius:8px;
}

h3{
margin:10px 0 5px 0;
}

.precio{
color:#e63946;
font-weight:bold;
}

</style>

<div class="card">

<img src="${this.getAttribute("imagen")}">

<h3>${this.getAttribute("nombre")}</h3>

<p>${this.getAttribute("descripcion")}</p>

<p class="precio">${this.getAttribute("precio")}</p>

</div>

`;
}

}

customElements.define("mi-card", MiCard);