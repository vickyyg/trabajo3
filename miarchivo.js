



        class bebida{
                constructor(id, nombre, precio, img){
                this.id = id;
                this.nombre = nombre;
                this.precio = precio;
                this.img = img;
                this.cantidad = 1;
                }
        }

        const fernet = new bebida(1, "fernet", 2000, "img/fernet.jpg");
        const sidra = new bebida(2, "sidra", 1500,"img/");
        const cerveza = new bebida(3, "cerveza", 600, "");
        const gin = new bebida(4, "gin", 3200, "");
        const vino = new bebida(5, "vino", 1100, "");
        const wisky = new bebida(6, "wisky", 3200, "");
        const vodka = new bebida(7, "vodka", 4000,"");
        const cinzano = new bebida(8, "cinzano", 2000, "");
        const campari = new bebida(9, "campari", 3100,"");



        const bebidasAlcoholicas = [fernet, sidra, cerveza, gin, vino, wisky, vodka, cinzano, campari];

        console.log(bebidasAlcoholicas);

        let carrito = [];

        if(localStorage.getItem("carrito")){
                carrito = JSON.parse(localStorage.getItem("carrito"));
            }
            
        const productos = document.getElementById("productos");


        const tienda = () => {
                bebida.forEach(bebida => {
                const card = document.createElement("div");
                card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
        <div class="card-deck">
        <div class="card">
          <img src="${bebida.img}" class="card-img-top" alt="${bebida.nombre}">
          <div class="card-body">
            <h5 class="card-title">"${bebida.nombre}"</h5>
            <p class="card-text">"${bebida.precio}"</p>
            <button class = "btn colorBoton" id="boton${bebida.id}" > Agregar al Carrito </button>

          </div>
          
        </div>
        <div class="card">
          <img src="${bebida.img}" class="card-img-top" alt="${bebida.nombre}">
          <div class="card-body">
            <h5 class="card-title">"${bebida.nombre}"</h5>
            <p class="card-text">"${bebida.precio}"</p>
            <button class = "btn colorBoton" id="boton${bebida.id}" > Agregar al Carrito </button>

          </div>
          
        </div>
        <div class="card">
          <img src="${bebida.img}" class="card-img-top" alt="${bebida.nombre}">
          <div class="card-body">
            <h5 class="card-title">"${bebida.nombre}"</h5>
            <p class="card-text">"${bebida.precio}"</p>
            <button class = "btn colorBoton" id="boton${bebida.id}" > Agregar al Carrito </button>

          </div>
         
        </div>
      </div>
      <br>
      <br>
      <div class="card-deck">
        <div class="card">
          <img src="${bebida.img}" class="card-img-top" alt="${bebida.nombre}">
          <div class="card-body">
            <h5 class="card-title">"${bebida.nombre}"</h5>
            <p class="card-text">"${bebida.precio}"</p>
            <button class = "btn colorBoton" id="boton${bebida.id}" > Agregar al Carrito </button>

          </div>
          
        </div>
        <div class="card">
          <img src="${bebida.img}" class="card-img-top" alt="${bebida.nombre}">
          <div class="card-body">
            <h5 class="card-title">"${bebida.nombre}"</h5>
            <p class="card-text">"${bebida.precio}"</p>
            <button class = "btn colorBoton" id="boton${bebida.id}" > Agregar al Carrito </button>

          </div>
          
        </div>
        <div class="card">
          <img src="${bebida.img}" class="card-img-top" alt="${bebida.nombre}">
          <div class="card-body">
            <h5 class="card-title">"${bebida.nombre}"</h5>
            <p class="card-text">"${bebida.precio}"</p>
            <button class = "btn colorBoton" id="boton${bebida.id}" > Agregar al Carrito </button>

          </div>
                        `
        contenedorProductos.appendChild(card);

        
        const boton = document.getElementById(`boton${bebida.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(bebida.id);
        })
    })
}
