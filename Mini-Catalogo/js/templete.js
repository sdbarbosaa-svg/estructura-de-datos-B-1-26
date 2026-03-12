 const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {titulo: "Laptop", desc: "16GB RAM", imagen: ""},
    {titulo: "Mouse", desc: "Inalámbrico", imagen: ""},
    {titulo: "Pantalla", desc: "HDMI", imagen: ""}
  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    contenedor.appendChild(clon);
  });