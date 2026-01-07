/**
 * Este script contiene la UI de la pagina principal
 * Solo se maneja el HTML en este punto.
 */
import productos from  '../data/productos.json';
import { calculo_Prices } from '../logic/cart';
import { getCart } from "../services/storage";

var listado_Carrito = getCart();

 var ui = '';
 var uiCar = '';

function renderCart(){
    listado_Carrito.map(pc=>{
        uiCar += `<li>${productos[pc-1].nombre} <input type="checkbox" class="del-product"></input></li> `;
    })
   return uiCar;
}
const renderizar = ()=>{
 
   
    productos.map(p=>{
        let cant_und = listado_Carrito.filter((pr)=>pr==p.id).length;
        ui += `  
                    
                    <div class="cont-medicamento">
                            <div class="card-header">
                                <div class="cart-icon-badge">🛒</div>
                                <img src=${p.imagen} alt="Nombre">
                            </div>
                        <div class="card-body">
                        <h3>Producto:</h3>
                        <span class="nombre-producto">${p.nombre}</span>
                        <input type="number" min=1 max=${p.unidades-cant_und} class="panel-unidades"></input>
                        <p class="unidades-disp">Unidades: ${p.unidades-cant_und}$</p>
                        <p class="precio">Precio: ${p.precio}$</p>
                        <button class="btn-agregar">Agregar al carro</button>
                        </div>
                    </div>
                    
        `
        
    })

   
    
    document.querySelector('#app').innerHTML = `
    <nav class="navbar">
    <div class="nav-left">
        <img src="logoSalud.png" class="logo" alt="Logo Salud Vital">
    </div>
    <div class="nav-right">
        <a href="#catalogo">Catálogo</a>
        <a href="#sobre nosotros">nosotros</a>
        <a href="#contactos">Contacto</a>
    </div>
    </nav>

  <section id="sobre-nosotros">

        <section class="sobre-nosotros">
    <div class="sobre-nosotros-logo">
        <img src="logoSalud.png" alt="Logo Salud Vital">
    </div>
    <div class="sobre-nosotros-texto">
        <h2>Sobre Salud Vital</h2>
        <p>
        En <strong>Salud Vital</strong> trabajamos cada día para cuidar tu bienestar con responsabilidad y compromiso.
        Somos una droguería moderna que ofrece medicamentos confiables, atención personalizada y productos esenciales
        para tu salud y la de tu familia.
        </p>
        <p>
        Nuestro objetivo es brindar soluciones accesibles y seguras para toda la comunidad, con un equipo profesional
        que te acompaña en cada paso. ¡Tu salud es nuestra prioridad!
        </p>
    </div>
    </section>
</section>

    <section id="catalogo">
    <div class="content-catalogo"> ${ui} </div>
    </section>

    <!-- Botón para abrir/cerrar el carrito -->
<button id="toggleCart">🛒 Carrito</button>
 
<!-- Barra lateral del carrito -->
<section id="carrito">
<div id="cartSidebar" class="cart-sidebar">
  <div class="cart-header">
    <h2>Carrito de Compras</h2>
    <button id="closeCart">✖</button>
  </div>

    <div class="Productos-Carrito">
    <ul>
        ${renderCart()} 
    </ul>
         <span class ="prices">TOTAL: ${calculo_Prices(productos)}$ </span>
          <button class="boton-Quitar">Quitar Producto(s)</button>

  </div>
 


</div>
</section>


<section id="contactos">
    <footer>
        <div class="footer-content">
            <div class="footer-section contacto">
            <h4>Contacto</h4>
            <p>📞 Tel: +57 300 123 4567</p>
            <p>✉️ Email: soporte@drogueria.com</p>
            <p>📍 Dirección: Calle 10 #20-30, Valle del Cauca</p>
            </div>
            <div class="footer-section redes">
            <h4>Síguenos</h4>
            <a href="#">Facebook</a> | 
            <a href="#">Instagram</a> | 
            <a href="#">WhatsApp</a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2025 Droguería Salud Total. Todos los derechos reservados.</p>
        </div>
        </footer>
 </section>

    `

    const toggleCart = document.getElementById('toggleCart'); 
    const closeCart = document.getElementById('closeCart'); 
    const cartSidebar = document.getElementById('cartSidebar'); 
    toggleCart.addEventListener('click', () => { cartSidebar.classList.add('active'); }); 
    closeCart.addEventListener('click', () => { cartSidebar.classList.remove('active'); });
}

export {renderizar,renderCart};